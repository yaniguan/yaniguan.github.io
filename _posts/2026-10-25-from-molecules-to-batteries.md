---
layout: note
title: From molecules to batteries
description: "Part 3 of my SES AI internship: a simulation ladder, multiscale alignment, and a world model for battery aging"
date: 2026-10-25 09:00:00-0700
tags: [internship, batteries, multiscale, world-models]
---

_Part 3 of 3. Previously: [Atom is atom, bond is bond]({{ '/notes/atom-is-atom-bond-is-bond/' | relative_url }})
and [Teaching a puddle to dance]({{ '/notes/teaching-a-puddle-to-dance/' | relative_url }}).
The big picture is in the [overview]({{ '/notes/summer-of-molecules-puddles-batteries/' | relative_url }})._

We've read molecules off paper and watched them dance in a liquid. Now for the question
that actually pays the bills at a battery company.

## Δrecipe → Δperformance

If I change the recipe, say by adding a pinch of some additive, **what changes in the
battery?** Does it survive more charge cycles? Store better on a shelf? Charge faster?
Handle high currents?

<figure><img src="{{ '/assets/img/notes/cells/delta-recipe.webp' | relative_url }}" alt="Three bottles labeled EC, EMC, and LiPF6 with sliders, labeled Delta Recipe" loading="lazy" style="width:100%;max-width:560px;display:block;margin:0 auto"><figcaption style="text-align:center">Δrecipe: nudge the sliders on salt, solvents, and additives...</figcaption></figure>

<figure><img src="{{ '/assets/img/notes/cells/delta-performance.webp' | relative_url }}" alt="Illustration of changes in battery performance: cycling, storage, charging, and rate" loading="lazy" style="width:100%;max-width:560px;display:block;margin:0 auto"><figcaption style="text-align:center">...and ask what happens to Δperformance: cycling, storage, charging, rate.</figcaption></figure>

It's a bit like baking. Swap one ingredient and the cake might rise higher, or collapse,
or taste fine today and go stale tomorrow. The annoying part is that each real "bake" for
a battery is slow and expensive, so real experiments are limited. Compute, on the other
hand, is available. The plan: use simulations to fill in the gaps, while **real
measurements stay the reference**. Simulations get to advise; they don't get to overrule.

## A ladder of simulations, in about a month

No single simulation covers everything from electrons to a whole cell heating up, so I
built a high-throughput ladder in about a month. Each rung zooms out:

<figure><img src="{{ '/assets/img/notes/cells/dft.webp' | relative_url }}" alt="Illustration of a DFT quantum chemistry calculation" loading="lazy" style="width:100%;max-width:560px;display:block;margin:0 auto"><figcaption style="text-align:center">Rung 1, DFT: local chemistry and electron transfer, at the quantum level.</figcaption></figure>

- **DFT**: local chemistry and electron transfer. Who gives electrons to whom.
- **MD**: the liquid, using the force fields from
  [Part 2]({{ '/notes/teaching-a-puddle-to-dance/' | relative_url }}).
- **Interface reactions**: what happens where the liquid meets the electrode, the
  battery's busiest border crossing.
- **kMC** (kinetic Monte Carlo): states, events, and rates, like a board game where each
  move happens with a certain probability per unit time.
- **P2D/SPMe and 3D thermal fields**: the whole cell, including temperature and stress.

<figure><img src="{{ '/assets/img/notes/cells/3d-fields.webp' | relative_url }}" alt="3D temperature and stress fields across a battery cell" loading="lazy" style="width:100%;max-width:560px;display:block;margin:0 auto"><figcaption style="text-align:center">Top rung: whole-cell fields. This is where molecular choices finally show up as heat and stress.</figcaption></figure>

## Can we line up all the scales?

With data from every rung, the natural next idea was to align them, CLIP-style. CLIP is
the trick that taught models to put a photo and its caption close together in one shared
space. Here, the "photo" and "caption" are a molecule, its liquid, its interface, and its
cell. I used a multi-positive InfoNCE loss, which is a fancy way of saying "pull together
everything that belongs to the same experiment, push apart everything that doesn't."

Two findings, one encouraging and one sobering:

1. **Conditions are essential.** Temperature, test protocol, and the like are the glue
   between scales. When I removed them, the MD-to-electrode link score collapsed from
   **0.327 to 0.066**. Without knowing _how_ a battery was tested, the scales stop
   recognizing each other.
2. **Molecules ↛ battery just via alignment.** Matching a molecule's identity across views
   could be strong while the links to real experiments stayed weak. Knowing exactly who
   someone is doesn't tell you how they'll do at their new job.

## A world model for aging

Batteries are a story told over time: they age, cycle by cycle. So instead of predicting
the ending directly, I trained a **world model**: learn from aging simulations to predict
the _next_ state, then roll it out, feeding each prediction back in as the next input.
Like predicting tomorrow's weather, then using that forecast to predict the day after.

That's a harsh test, because small errors snowball. So I checked four things:
next-step accuracy, long-run drift, whether it gets the _direction_ of change right, and
calibration to real experiments.

- I compared **41 architectures**. The learned world model beat a direct MLP baseline on
  simulated sequences.
- That does **not** by itself prove transfer to real cells. Simulated sequences are the
  practice field, not the match.
- Calibration to experiments supported **24 targets**.
- The uncertainty was overconfident: nominal 90% intervals actually covered about
  **68–78%**. When the model said "I'm 90% sure," it should have said "eh, maybe 70%."
  Good to know, and now it's written down.

<figure><img src="{{ '/assets/img/notes/cells/sim-to-real.webp' | relative_url }}" alt="Diagram of a simulated cell connected to a real experimental cell through a calibration step, labeled sim-to-real" loading="lazy" style="width:100%;max-width:560px;display:block;margin:0 auto"><figcaption style="text-align:center">Sim-to-real: simulations do the cheap exploring, and real experiments keep them honest through calibration.</figcaption></figure>

## The VC mystery

My favorite moment came from one additive, VC. Its trends _differed_ between two different
cell designs: same ingredient, different story depending on the cell. The physics model
reproduced some of the direction changes, but not the full size of the effect.

That sounds like a failure, but it's actually the most useful kind of result. "The model
gets the direction but not the magnitude" points at a specific missing mechanism, and that
became the next mechanism test. A good model doesn't just answer questions; it tells you
which experiment to run next.

## A cell co-scientist

As with the electrolytes, I wrapped the pieces into a co-scientist: an LLM that pulls in
multi-scale evidence and calls tools, with chemistry-aware tokenization so chemical names get read as chemistry, not random
letter soup. The interface shows every tool call and record ID, and it keeps
**measured**, **computed**, and **predicted** values clearly separated. If you've read this
far, you know why that last part matters to me.

## Wrapping up the summer

Across molecules, electrolytes, and cells, the same pattern kept repeating: the exciting
number is rarely the whole truth, and the honest checks are where the real progress
hides. Agreement over confidence. Liquid tests over cluster fits. Calibration over
leaderboards.

Thanks for reading all three parts. If you want the map again, it lives in the
[overview]({{ '/notes/summer-of-molecules-puddles-batteries/' | relative_url }}). Now if
you'll excuse me, I have a mechanism test to think about.
