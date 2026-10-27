---
layout: note
title: Teaching a puddle to dance
description: "Part 2 of my SES AI internship: force fields, liquids that clump, and learning from 40,000 molecular movies"
date: 2026-10-24 09:00:00-0700
tags: [internship, molecular-dynamics, force-fields, representation-learning]
---

_Part 2 of 3. Previously: [Atom is atom, bond is bond]({{ '/notes/atom-is-atom-bond-is-bond/' | relative_url }}).
The big picture is in the [overview]({{ '/notes/summer-of-molecules-puddles-batteries/' | relative_url }})._

In Part 1 the molecules were sitting still for their portraits. Now we drop them into a
liquid and ask a much harder question from my slides: **how do molecules move in their
micro-environment?**

## Meet the puddle

An electrolyte is the liquid inside a battery that ions swim through. The recipe is
simple: **salt + solvents + additives**. The behavior is not. Zoom in and it's a crowded
dance floor: lithium ions grab solvent molecules as partners, anions try to cut in, and
how fast everyone moves across the floor decides how well the battery charges and
discharges.

<figure><img src="{{ '/assets/img/notes/electrolytes/ions-moving.webp' | relative_url }}" alt="Illustration of ions moving through an electrolyte" loading="lazy" style="width:100%;max-width:560px;display:block;margin:0 auto"><figcaption style="text-align:center">The dance floor: ions moving through the electrolyte, picking up and dropping partners as they go.</figcaption></figure>

## The rulebook and the movie

Two words you need for this post:

- A **force field** is the rulebook for how atoms push and pull on each other.
- **Molecular dynamics (MD)** is playing the movie with that rulebook: you put lots of
  molecules in a box, apply the rules, and watch.

If the rulebook is wrong, the movie is fiction. And the existing rulebook didn't cover
some of the new electrolyte molecules we cared about. So my first job was to extend a
_polarizable_ force field (one where the electron clouds can squish in response to their
neighbors, which matters a lot around small, charged ions like lithium).

<figure><img src="{{ '/assets/img/notes/electrolytes/pff-fitting.webp' | relative_url }}" alt="Diagram of fitting force-field parameters to quantum reference data" loading="lazy" style="width:100%;max-width:560px;display:block;margin:0 auto"><figcaption style="text-align:center">Fitting the rulebook: match the force field to quantum reference calculations, one term at a time.</figcaption></figure>

The recipe:

1. Compute quantum (DFT) reference data on small lithium and sodium clusters. Some are
   **binary** (the ion with one partner); some are **ternary** (solvent and anion
   competing for the same lithium, like two people reaching for the last slice of pizza).
2. Fit mainly the **exp-6** term, the part of the rulebook covering short-range repulsion
   ("personal space!") and dispersion (the weak, sticky attraction between everything).
3. Test in liquid MD: density, radial distribution functions (who stands next to whom),
   diffusion, and conductivity.

## The fit that looked perfect

Here's the plot twist. One fit looked _great_ on the clusters. Errors low, curves lined
up, very satisfying.

Then I ran the liquid. It clumped. The ions huddled together in big clusters like
penguins in a blizzard, and transport ended up far from what's measured experimentally.

I traced it back to an ether-oxygen interaction that the fit had effectively broken.
Restoring it brought the cluster fraction down from about **0.81 to 0.28**, and
conductivity moved closer to measurement.

The lesson, which I now believe in my bones: **MD validation is part of parameter
development, not a final demo.** Small clusters can't tell you everything about a liquid.
You have to watch the movie.

## A loop that remembers its mistakes

So I built that into a loop, which I called RSI:

<figure><img src="{{ '/assets/img/notes/electrolytes/pff-rsi.webp' | relative_url }}" alt="Cycle diagram: fit force field, validate MD, record failures, refine next fit" loading="lazy" style="width:100%;max-width:560px;display:block;margin:0 auto"><figcaption style="text-align:center">The loop: fit → validate in MD → record failures → refine the next fit.</figcaption></figure>

The key part is step three. Every failure gets saved as searchable memory: the conditions,
the bad parameters, the symptoms, and the checks that caught it. The next time a fit
starts drifting toward "penguin huddle," there's a record that says _we've seen this
before, here's what it looked like._

Honest caveat: a proper fixed-budget test of whether this memory actually makes research
_faster_ is still on my to-do list. It feels faster. Feelings aren't data.

## 40,000 movies

Once you can make movies, you can make a lot of them. We had about **40,000 MD
trajectories × 5,000 frames each, roughly 200 million frames**. Way more than any human
could watch. So I asked: can a model learn what a liquid "is" from watching?

I looked at the same liquid through three views:

- the **recipe** (what went into the bottle),
- a **snapshot** (one frozen frame of atoms in 3D),
- the **trajectory** (how things move over time).

<figure><img src="{{ '/assets/img/notes/electrolytes/snapshot-encoder.webp' | relative_url }}" alt="Diagram of the snapshot encoder: a periodic box of atoms at time t becomes a graph, then a vector" loading="lazy" style="width:100%;max-width:560px;display:block;margin:0 auto"><figcaption style="text-align:center">The snapshot encoder turns one frame of the liquid into a short list of numbers.</figcaption></figure>

The snapshot encoder treats each frame as a periodic graph (atoms connected to neighbors
within 6 Å), and passes messages with an equivariant network, one that tracks both plain
numbers and directions, so rotating the box doesn't confuse it. Each frame becomes
**128 learned + 8 geometric numbers**.

<figure><img src="{{ '/assets/img/notes/electrolytes/trajectory-encoder.webp' | relative_url }}" alt="Diagram of the trajectory encoder summarizing a sequence of snapshots over time" loading="lazy" style="width:100%;max-width:560px;display:block;margin:0 auto"><figcaption style="text-align:center">The trajectory encoder reads the sequence of snapshot vectors, so the model sees motion, not just a pose.</figcaption></figure>

## The unglamorous engineering

200 million frames is a lot of frames. Two things made it tractable:

- Neighbor search went from **O(N²) to O(N)**: instead of every atom asking every other
  atom "are you close?", each atom only checks its own neighborhood.
- I froze the snapshot encoder and cached every frame **once**. The cache is about 52 GB
  and cost about 395 GPU-hours, one time. After that, a training step went from
  **12.6 s to 0.15 s**.

That's the difference between "let's try an idea" and "let's try an idea next week."

## What the model learned

- **Retrieval@10** (can you find the matching liquid in the top 10?) was 84.1% with the
  full representation versus 82.4% from static structure alone. Surprise: a single
  snapshot already knows a lot!
- **Conductivity R² of 0.976**, close to a strong descriptor baseline.
- Adding trajectory features improved conductivity error in **18 of 21** held-out chemistry
  groups. Motion helps, especially on chemistry the model hasn't seen.

I also played with _generating_ trajectories (rolling the movie forward with GRU, TCN, and
causal-transformer models), which was fun and is a story for another day.

## An electrolyte scientist sidekick

Finally, I wrapped the tools into an "electrolyte scientist" assistant: an LLM planner with
a harness and a registry of tools (reading files, checking protocols, running analysis
programs, keeping evidence records). You can ask it why a simulation failed, how a
formulation performed, or how to prepare a run at a new temperature. The researcher stays
in the loop and reviews what it proposes to try next. Sidekick, not replacement.

## Next stop: the whole battery

Molecules and liquids are fun, but nobody buys a puddle. In Part 3, we try to connect all
of this to actual batteries, and find out where the connections hold and where they snap:
[From molecules to batteries]({{ '/notes/from-molecules-to-batteries/' | relative_url }}).
