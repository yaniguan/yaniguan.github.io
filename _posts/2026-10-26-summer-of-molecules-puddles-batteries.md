---
layout: note
title: A summer of molecules, puddles, and batteries
description: "Overview of a three-part series on my Applied Scientist internship at SES AI: molecules make up electrolytes, electrolytes go into batteries, and each part builds on the representations of the one before"
date: 2026-10-26 08:00:00-0700
tags: [internship, multiscale, multimodal]
series: ses-internship
part: 0
---

<p class="n-lede">For my internship I left my UCLA computational chemistry desk for a while and joined SES AI, a battery company, as an Applied Scientist intern. The problem was that today's AI is very good with pictures and text, while chemistry and batteries live in 3D geometry, in physical time, and in scales that connect, where a tiny change in one molecule shows up much later as a battery that lasts longer (or doesn't). So the work ended up as a grid rather than a straight line: three scales stacked on top of each other, each known through several kinds of data, with the same small method run at every level.</p>

<nav class="n-toc" markdown="1">
**In this post**
1. [The picture in one diagram](#the-picture-in-one-diagram)
2. [The scale axis: molecule, electrolyte, cell](#the-scale-axis)
3. [The modality axis: many ways to know each layer](#the-modality-axis)
4. [The same loop at every layer](#the-same-loop-at-every-layer)
5. [How representations flow upward](#how-representations-flow-upward)
6. [The three parts](#the-three-parts)
7. [What this got us](#what-this-got-us)
</nav>

## The picture in one diagram {#the-picture-in-one-diagram}

The official title I gave the work was "multiscale multimodal intelligence across molecules,
electrolytes, and cells," which is a mouthful, so here it is as one picture instead.

<figure class="nf nf-wide"><img width="720" height="493" src="{{ '/assets/img/notes/icons/overview-layers.svg' | relative_url }}" alt="A grid with three scale layers from bottom to top, molecule, electrolyte and cell, and five modality columns: images and text, 1D/2D/3D structure, DFT and MD trajectories, multiscale simulations, and experiments. Each row ends in a small loop from data to representation to alignment to co-scientist, and upward arrows on the left carry molecule vectors into the electrolyte layer and a 128-d electrolyte latent into the cell layer" loading="lazy"><figcaption>Rows are scales, columns are kinds of data, the loop on the right runs at every row, and the arrows on the left carry what one layer learned up to the next.</figcaption></figure>

Read it in three directions. Up the rows is the scale axis: what the thing is. Across the columns is
the modality axis: how we get to know it. And the loop on the right of every row is the method, the
same four steps each time. The short sections below take one direction at a time.

<hr>

## The scale axis: molecule, electrolyte, cell {#the-scale-axis}

Each row is a layer, and each layer is made of the one below it: molecules make up electrolytes,
and electrolytes go into cells.

Think of a battery like a city. The molecules are the people. The electrolyte is the crowd, the
liquid the ions swim through, made of salt, solvents and additives. The cell is the whole city, with
its traffic jams, heat waves and aging infrastructure. You can't understand a city from one person's
ID card, and you can't understand a crowd without watching it move, so the work split into three
parts, one per layer, each building on the last.

<hr>

## The modality axis: many ways to know each layer {#the-modality-axis}

At every layer, no single kind of data tells the whole story, and the layers don't even share the
same kinds. Here is what each row of the diagram actually holds.

<div class="n-grid three">
<div class="n-card" markdown="1">
<p class="n-card-title"><img width="240" height="200" src="{{ '/assets/img/notes/icons/multimodal-database.svg' | relative_url }}" alt="">Molecule</p>
- Images and text: molecule drawings in real papers (hand-drawn ones too) and what the paper says
  about them
- 1D/2D/3D structure: SMILES and fingerprints, atom graphs, 3D conformers
- DFT and MD properties: energies, HOMO/LUMO, how readily it gets reduced; solvation, density,
  diffusion, transport
</div>
<div class="n-card" markdown="1">
<p class="n-card-title"><img width="240" height="200" src="{{ '/assets/img/notes/icons/md-snapshot.svg' | relative_url }}" alt="">Electrolyte</p>
- Recipes: components, amounts and conditions like temperature
- DFT clusters: the ion with one partner, or a solvent and an anion competing for it
- MD trajectories: about 40,000 of them, 5,000 frames each, roughly 200 million frames
- Conductivity data, including the public CALiSol dataset
</div>
<div class="n-card" markdown="1">
<p class="n-card-title"><img width="240" height="200" src="{{ '/assets/img/notes/icons/sim-to-real.svg' | relative_url }}" alt="">Cell</p>
- Multiscale simulations: DFT, MD, interface reactions, kMC, P2D/SPMe and 3D temperature and
  stress fields
- Experiments: a 252-formulation, additive-centered DOE
- Design and test conditions: protocol, temperature, C-rate
</div>
</div>

None of this is text in the way a chatbot would like. That was the question I kept asking all
internship: can AI understand not just pictures and text, but 3D geometry, physical time, and how
the scales connect?

<hr>

## The same loop at every layer {#the-same-loop-at-every-layer}

Only when I laid the three parts side by side did I notice that every layer runs the same loop:
gather the data, learn a representation, align the different views of the same thing, then hand it
to a co-scientist that helps decide what to do next. Prediction sits on top of the aligned space at
every layer.

<figure class="nf nf-wide"><img width="720" height="300" src="{{ '/assets/img/notes/icons/method-per-scale.svg' | relative_url }}" alt="A grid of three rows, molecules, electrolytes and cells, each going through the same four steps: represent, align, predict, co-scientist" loading="lazy"><figcaption>The same loop three times over, each row reusing what the row below learned.</figcaption></figure>

| | Data | Representation | Alignment | Co-scientist / decision |
|---|---|---|---|---|
| Molecule | paper figures read by VLMs, checked by VERDICT | 1D/2D/3D vectors | 2D ↔ 3D partners (InfoNCE), keyed by InChIKey | multimodal database in MU and a Chrome extension |
| Electrolyte | polarizable force field, ~40,000 MD movies | recipe, snapshot and trajectory heads | three-way contrastive, one 128-d latent | electrolyte co-scientist |
| Cell | 252-formulation DOE plus a simulation ladder | stacked molecule, electrolyte and cell reps | cross-scale links, conditions as the glue | aging world model, cell co-scientist, decision API |

<div class="n-callout"><img width="240" height="200" src="{{ '/assets/img/notes/icons/dpo-detour.svg' | relative_url }}" alt=""><div markdown="1">
One lesson also kept showing up at every layer: a pretty number on the training objective is not
the same as the scientific goal. A preference model can score beautifully and still get molecules
wrong. A force field can nail tiny clusters and still ruin the liquid. An alignment can match
molecules perfectly and still say almost nothing about real batteries. So most of my summer went
into the checks: agreement between independent readers, liquid simulations inside the fitting loop,
calibration against real measurements.
</div></div>

<hr>

## How representations flow upward {#how-representations-flow-upward}

The layers aren't three separate projects, because what one layer learns becomes input to the next.
Nothing from the lower rows gets thrown away.

### Molecule vectors become ingredients

Part 1 turns every recognized molecule into vectors. In the electrolyte layer those vectors become
ingredients on the recipe side: a formulation network takes one vector per molecule, plus mixing
ratios, salt concentration and temperature, and predicts how the mixture behaves.

<figure class="nf nf-wide"><img width="720" height="300" src="{{ '/assets/img/notes/icons/formulation-network.svg' | relative_url }}" alt="EC, EMC and LiPF6 each pass through an encoder, combine with ratios, concentration and temperature in a formulation network, and predict conductivity, viscosity and density" loading="lazy"><figcaption>Molecule vectors plus ratios and conditions: the first arrow up.</figcaption></figure>

### The electrolyte latent and molecules build the cell

Part 2 turns every electrolyte into 128 numbers in a shared latent space, learned from recipes,
snapshots and trajectories. In Part 3 a cell is represented by stacking those pieces: the molecule
representations for each component, the electrolyte latent for the mixture, and the cell's own
design and operating conditions on top. The cell co-scientist reads the same stack, with 396
molecular, 274 electrolyte and 105 cell features per record in its early version.

<figure class="nf nf-wide"><img width="720" height="280" src="{{ '/assets/img/notes/icons/cell-representation-stack.svg' | relative_url }}" alt="Three stacked layers: molecule representations from Part 1 at the bottom, the electrolyte 128-number latent from Part 2 in the middle, design and conditions on top, merging into one cell representation" loading="lazy"><figcaption>Molecules (Part 1) + electrolyte latent (Part 2) + design and conditions = a cell representation.</figcaption></figure>

<hr>

## The three parts {#the-three-parts}

Each part walks through one row of the diagram in detail, in the order the stuff itself is built.

<div class="n-grid three">
<div class="n-card" markdown="1">
<p class="n-card-title"><img width="240" height="200" src="{{ '/assets/img/notes/icons/scale-molecule.svg' | relative_url }}" alt="">Part 1: molecules</p>
[Atom is atom, bond is bond]({{ '/notes/atom-is-atom-bond-is-bond/' | relative_url }}). Reading
molecules off real paper figures (59.8% exact on 331 journal figures), VERDICT's four readers that
may abstain, a rotation-aware recognizer, and 1D/2D/3D vectors in a multimodal database.
</div>
<div class="n-card" markdown="1">
<p class="n-card-title"><img width="240" height="200" src="{{ '/assets/img/notes/icons/scale-electrolyte.svg' | relative_url }}" alt="">Part 2: electrolytes</p>
[Teaching a puddle to dance]({{ '/notes/teaching-a-puddle-to-dance/' | relative_url }}). A
polarizable force field for 627+ molecules and 20+ anions, PFF RSI learning from more than 50 failed
versions out of 80, three heads over about 40,000 MD movies, and an electrolyte co-scientist.
</div>
<div class="n-card" markdown="1">
<p class="n-card-title"><img width="240" height="200" src="{{ '/assets/img/notes/icons/scale-cell.svg' | relative_url }}" alt="">Part 3: cells</p>
[From molecules to batteries]({{ '/notes/from-molecules-to-batteries/' | relative_url }}). A
six-rung simulation ladder around a 252-formulation DOE, scales held together by test conditions, an
aging world model that learns the whole evolution step by step, and a cell co-scientist.
</div>
</div>

<hr>

## What this got us {#what-this-got-us}

I started from batteries and ended up with a method. Batteries were just where I happened to begin;
the method should transfer to similar multiscale systems, the ones built as molecules, then mixtures,
then devices, where the important structure lives in drawings, geometry and simulations rather than
text, and where experiments are scarce but simulation is possible. It's still a living method, and I
keep adding pieces as the field moves. Grab a snack: Part 1 starts at the bottom row, with a molecule
and a computer trying to figure out who it is.
