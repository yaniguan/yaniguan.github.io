---
layout: note
title: Atom is atom, bond is bond
description: "Part 1 of my SES AI internship: teaching models to read molecules from real papers, and then to see them in 3D"
date: 2026-10-23 09:00:00-0700
tags: [internship, vlm, ocsr, molecular-representation]
---

_Part 1 of 3. Start with the [overview]({{ '/notes/summer-of-molecules-puddles-batteries/' | relative_url }}) if you haven't._

Here's a scene from my slides. A cartoon scientist (me, basically) looks at a drawing of a
molecule.

> **Me:** Who are you?
>
> **Molecule:** NaPF6 in FEC.

Lovely. Polite molecule. Now I show it a second drawing of the same thing, in a different
style.

> **Molecule:** Same here.
>
> **Model:** Hmm...
>
> **Me:** Haha, the same.

<figure><img src="{{ '/assets/img/notes/molecules/me-the-scientist.webp' | relative_url }}" alt="Cartoon avatar of a scientist with glasses and a lab coat next to a computer icon" loading="lazy" style="max-width:160px"><figcaption style="text-align:center">The cartoon star of my slides, squinting at molecules so you don't have to.</figcaption></figure>

## Same molecule, many outfits

People want to search chemistry by drawing: sketch a structure, find every paper that
mentions it. The catch is that papers draw the same molecule in wildly different styles.
Thin double bonds. Atom labels the size of a dust mite. Wedge bonds. Scans that look like
they went through a fax machine twice.

<figure><img src="{{ '/assets/img/notes/molecules/same-molecule-many-outfits.webp' | relative_url }}" alt="Five differently styled drawings of NaPF6 on the top row and five differently styled drawings of FEC on the bottom row" loading="lazy" style="width:100%;max-width:560px;display:block;margin:0 auto"><figcaption style="text-align:center">NaPF6 (top) and FEC (bottom), each wearing five outfits. To a chemist, these are obviously the same. To a model trained on one style, they're strangers.</figcaption></figure>

A chemist looks at all of these and says the thing that became my motto for the summer:
**"Atom is atom, bond is bond."** The style doesn't matter. The model, at first, disagreed.

## The real bottleneck

The obvious fix is "train on more drawings." And it's easy to generate endless
drawings with chemistry software, so you can produce a model that looks amazing.
(My slides had a joke here: _"99.5% accuracy (reported by me)."_)

But the real bottleneck wasn't the amount of data. It was **distribution shift**: the gap
between tidy, computer-rendered training images and messy, real paper figures. A model
that aces the rendered exam can still flunk the real world.

So I went and got real data: about 38K molecule crops from papers. Since nobody hands you
ground-truth labels for those, I ran four independent readers and kept a label only when
3 of 4 agreed.

## Teaching the model

> **Model:** Teach me.

I fine-tuned vision-language models (supervised fine-tuning with LoRA, a lightweight way
to adapt a big model without retraining all of it). I compared 3 base models and 6
mixtures of real and synthetic images. To keep myself honest, I split the data by molecule
identity and removed 55,267 benchmark molecules (by InChIKey, a chemical fingerprint) from
training, so the model couldn't just memorize the test.

The winner: GLM trained with 70% real images, reaching **59.8% exact structure** on 331
figures from ACS journals, statistically comparable to MolScribe (58.3%), a strong
established reader. I wrote more about the real-vs-synthetic story in
[an earlier note]({{ '/notes/real-data-ocsr/' | relative_url }}).

## The DPO detour

Then I got ambitious and tried DPO, a preference-tuning method that teaches a model to
prefer good answers over bad ones. The training curves were gorgeous: loss dropped from
0.69 to 0.19, preference accuracy hit 90–97%.

Exact match on the molecules it actually generated? **0–2%.**

The model had learned to win the preference game, not to read molecules. A second attempt
improved validity but still landed at roughly half the accuracy of plain fine-tuning. So I
kept SFT and walked away with the lesson I now repeat to anyone who'll listen: _a pretty
training score can miss the scientific goal._

## VERDICT: allowed to say "I don't know"

Back to the comic:

> **Me:** You got it, go label more real molecule depictions in papers.
>
> **Model:** Yes, ma'am, even though I have high confidence, there is no ground truth. Is it reliable?

Great question, model. That's what VERDICT answers.

<figure><img src="{{ '/assets/img/notes/molecules/verdict.webp' | relative_url }}" alt="VERDICT logo: a central database connected to a molecule drawing, a SMILES string, a paper, and a 3D structure" loading="lazy" style="width:100%;max-width:560px;display:block;margin:0 auto"><figcaption style="text-align:center">VERDICT: several readers, one chemical identity check, and permission to abstain.</figcaption></figure>

Instead of trusting one model, VERDICT asks my fine-tuned VLM plus three open-source
readers. It compares their answers by **chemical identity** (InChIKey), not raw strings,
because two different strings can describe the same molecule. It keeps the disagreements
and the sources, and it's allowed to abstain.

The nice part: whether the readers agree turns out to be a great signal for whether the
answer is right. Agreement separates right from wrong answers with an AUROC of about
**0.916**, compared with **0.547** for checking how similar a redrawn image looks to the
original (which is barely better than a coin flip). Retraining on what the loop collected
gave mixed gains, so I report data quality and model improvement separately rather than
blending them into one happy number.

## From flat drawings to 3D

Reading the drawing is just step one. The full pipeline goes:
**2D image → SMILES → 3D conformer → energies and forces** (with machine-learned
potentials like MACE and UMA).

Why bother with 3D? A molecule has several "views." SMILES is a line of text. A graph says
who's bonded to whom. A 3D structure says where everything actually sits in space. It's
like describing a friend by their name, their family tree, or their photo.

I tested 2D alone, 3D alone, 2D+3D, and a sneaky control: 2D plus _shuffled_ 3D, to check
whether the model was really using the geometry or just enjoying extra numbers. In the
controlled test, adding real 3D cut energy error by about **18.2%** and volume error by
about **49.4%**. Geometry matters.

Two more humbling findings:

- **Cross-view retrieval ≠ property prediction.** Being good at matching a molecule's
  SMILES to its 3D shape doesn't mean you're good at predicting what it does.
- I trained a SMILES "student" to copy a 3D "teacher." It matched the teacher's vectors
  nicely, and gave **no** gain on conductivity. Copying the homework isn't the same as
  understanding it.

## What I took away

Real data beats more synthetic data. Agreement is a better trust signal than confidence.
And 3D helps, but only if you check that it helps the thing you care about.

Molecules don't live alone, though. Next, they jump into a liquid and start dancing:
[Teaching a puddle to dance]({{ '/notes/teaching-a-puddle-to-dance/' | relative_url }}).
