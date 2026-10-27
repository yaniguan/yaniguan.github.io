---
layout: note
title: A summer of molecules, puddles, and batteries
description: An overview of my Applied Scientist internship at SES AI, told across three scales
date: 2026-10-26 08:00:00-0700
tags: [internship, multiscale, multimodal]
---

For my internship I left my UCLA computational chemistry desk for a while and joined SES AI, a
battery company, as an Applied Scientist intern. If you asked me what I worked on, the
honest one-line answer is: _a lot of things that turned out to be one thing_.

The official title I gave the work was **multiscale multimodal intelligence across
molecules, electrolytes, and cells**. That's a mouthful, so here's the version I'd tell
you over coffee.

## The one question

Today's AI models are very good with pictures and text. They can describe a cat photo and
write a poem about it. But chemistry and batteries don't really live in pictures and text.
They live in:

- **3D geometry**: where atoms actually sit in space,
- **physical time**: how those atoms jiggle, drift, and react over nanoseconds to months,
- **scales that connect**: a tiny change in one molecule showing up, much later, as a
  battery that lasts longer (or doesn't).

So the question I kept asking all internship was: _can AI understand not just pictures and
text, but 3D geometry, physical time, and how the scales connect?_

## Three scales, one ladder

Think of a battery like a city. The **molecules** are the people. The **electrolyte** is
the crowd: the liquid the ions swim through, made of salt, solvents, and additives. The
**cell** is the whole city, with its traffic jams, heat waves, and aging infrastructure.

You can't understand a city from one person's ID card, and you can't understand a crowd
without watching it move. So the work naturally split into three parts, each climbing one
rung of the ladder.

<figure><img src="{{ '/assets/img/notes/internship-overview/map.webp' | relative_url }}" alt="Map of the internship projects: the molecule loop (VERDICT, paper mining, VLM fine-tuning, multimodal RAG) and the electrolyte branches (force-field fitting and MD trajectory representation learning) feeding an electrolyte co-scientist" loading="lazy" style="width:100%;max-width:560px;display:block;margin:0 auto"><figcaption style="text-align:center">The map I kept redrawing all internship. Left: molecules, from paper drawings to 3D geometry and energies. Right: electrolytes, from quantum reference data to force fields, and from 40K MD trajectories to learned representations. Everything flows toward an assistant that helps a scientist decide what to try next.</figcaption></figure>

## Part 1: molecules (or, "atom is atom, bond is bond")

People want to search for molecules by drawing them. Papers, unfortunately, draw the same
molecule in a dozen outfits: thin double bonds, tiny atom labels, wedges, blurry scans. A
human chemist shrugs and says "atom is atom, bond is bond." A model trained on neat,
computer-rendered drawings panics.

I fine-tuned vision-language models to read real paper figures, found that the real
bottleneck is the gap between rendered training images and real figures, took a doomed
detour through preference optimization, and ended up building a system that would rather
say "I'm not sure" than make something up. Then I followed the molecules from 2D drawings
all the way into 3D.

👉 [Atom is atom, bond is bond]({{ '/notes/atom-is-atom-bond-is-bond/' | relative_url }})

## Part 2: electrolytes (or, teaching a puddle to dance)

<figure><img src="{{ '/assets/img/notes/internship-overview/electrolyte.webp' | relative_url }}" alt="Cartoon of an electrolyte droplet surrounded by its jobs: solvation, ion transport, redox stability, and interphase formation" loading="lazy" style="width:100%;max-width:560px;display:block;margin:0 auto"><figcaption style="text-align:center">An electrolyte has a lot of jobs: wrap the ions (solvation), move them (transport), survive the voltage (redox stability), and help build a protective skin on the electrodes (interphase).</figcaption></figure>

An electrolyte looks like a boring puddle. Zoom in and it's a dance floor: lithium ions
grabbing solvent partners, anions cutting in, everything shuffling. To simulate that dance
you need a rulebook (a _force field_) and a movie projector (_molecular dynamics_).

I extended a polarizable force field to new electrolyte molecules, got humbled when a fit
that looked perfect on small clusters made the liquid clump, and built a loop that
remembers its own failures. Then I taught a model to watch ~40,000 of these movies and
learn what a liquid "looks like" from its recipe, a single snapshot, and its motion over
time.

👉 [Teaching a puddle to dance]({{ '/notes/teaching-a-puddle-to-dance/' | relative_url }})

## Part 3: cells (or, from molecules to batteries)

The question everyone in a battery company actually cares about: if I change the recipe
(say, add an additive), what happens to the battery? Does it cycle longer, store better,
charge faster?

Real experiments are slow and expensive, so I built a ladder of simulations, from quantum
chemistry up to whole-cell heat maps, tried to align all those scales into one shared
space, and trained a "world model" that predicts how a cell ages, step by step. The most
useful outcomes were honest ones: what connects, what doesn't, and where the model is
too confident.

👉 [From molecules to batteries]({{ '/notes/from-molecules-to-batteries/' | relative_url }})

## The thread that ties it together

If there's one lesson that kept showing up at every scale, it's this: **a pretty number
on the training objective is not the same as the scientific goal.** A preference model
can score beautifully and still get molecules wrong. A force field can nail tiny clusters
and still ruin the liquid. An alignment can match molecules perfectly and still say almost
nothing about real batteries.

So most of my summer was spent building the checks: agreement between independent
readers, liquid simulations as part of the fitting loop, calibration against real
measurements. Less glamorous than a leaderboard, but it's what lets you trust the answer.

Grab a snack. Part 1 starts with a cartoon version of me squinting at a molecule.
