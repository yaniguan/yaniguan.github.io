---
layout: note
title: A summer of molecules, puddles, and batteries
description: "Overview of a three-part series on my Applied Scientist internship at SES AI: molecules make up electrolytes, electrolytes go into batteries, and each part builds on the representations of the one before"
date: 2026-10-26 08:00:00-0700
tags: [internship, multiscale, multimodal]
series: ses-internship
part: 0
---

For my internship I left my UCLA computational chemistry desk for a while and joined SES AI, a
battery company, as an Applied Scientist intern, and followed one question up three scales:
molecules, the electrolytes they make up, and the cells those electrolytes go into. Along the way I
taught models to read molecules off real paper figures (59.8% exact on 331 journal figures), to
watch about 40,000 molecular-dynamics movies of electrolytes, and to learn how a battery cell ages
step by step instead of guessing one lifetime number. This post is the map; the three parts are the
territory.

## The one question

The official title I gave the work was "multiscale multimodal intelligence across molecules,
electrolytes, and cells," which is a mouthful, so here's the version I'd tell you over coffee.
Today's AI models are very good with pictures and text. They can describe a cat photo and write a
poem about it. But chemistry and batteries don't really live in pictures and text. They live in 3D
geometry, where atoms actually sit in space; in physical time, how those atoms jiggle, drift and
react over nanoseconds to months; and in scales that connect, where a tiny change in one molecule
shows up, much later, as a battery that lasts longer (or doesn't).

<div class="nf-row"><figure><img width="240" height="200" src="{{ '/assets/img/notes/icons/3d-geometry.svg' | relative_url }}" alt="A ball-and-stick molecule drawn with depth and xyz axes" loading="lazy"><figcaption>3D geometry</figcaption></figure><figure><img width="720" height="140" src="{{ '/assets/img/notes/icons/ion-timeline.svg' | relative_url }}" alt="A timeline of simulation frames, 4 picoseconds apart, 20 nanoseconds in total" loading="lazy"><figcaption>Physical time</figcaption></figure><figure><img width="240" height="200" src="{{ '/assets/img/notes/icons/alignment-scales.svg' | relative_url }}" alt="Six scales from molecules to experiments joined in a ring, held together by conditions" loading="lazy"><figcaption>Connected scales</figcaption></figure></div>

So the question I kept asking all internship was whether AI can understand not just pictures and
text, but 3D geometry, physical time, and how the scales connect.

## Three scales, one storyline

The storyline follows the stuff itself: molecules make up electrolytes, and electrolytes go into
cells. Think of a battery like a city. The molecules are the people. The electrolyte is the crowd,
the liquid the ions swim through, made of salt, solvents and additives. The cell is the whole city,
with its traffic jams, heat waves and aging infrastructure. You can't understand a city from one
person's ID card, and you can't understand a crowd without watching it move, so the work split into
three parts, each building on the last.

<div class="nf-row"><figure><img width="160" height="152" src="{{ '/assets/img/notes/series/molecule.webp' | relative_url }}" alt="Molecule icon" loading="lazy"><figcaption>Molecules</figcaption></figure><figure><img width="160" height="160" src="{{ '/assets/img/notes/series/electrolyte.webp' | relative_url }}" alt="Electrolyte icon" loading="lazy"><figcaption>make up electrolytes</figcaption></figure><figure><img width="142" height="160" src="{{ '/assets/img/notes/series/cell.webp' | relative_url }}" alt="Battery cell icon" loading="lazy"><figcaption>which go into cells</figcaption></figure></div>

I kept redrawing the project map all summer. The left side is molecules, from paper drawings to 3D
geometry and energies. The right side is electrolytes, from quantum reference data to force fields,
and from 40K MD trajectories to learned representations, both feeding an electrolyte co-scientist.

<figure class="nf"><img width="720" height="342" src="{{ '/assets/img/notes/internship-overview/map.webp' | relative_url }}" alt="Map of the internship projects: the molecule loop (VERDICT, paper mining, VLM fine-tuning, multimodal RAG) and the electrolyte branches (force-field fitting and MD trajectory representation learning) feeding an electrolyte co-scientist" loading="lazy"><figcaption>The map I kept redrawing all internship.</figcaption></figure>

## Part 1: molecules, the foundation

Part 1 starts from a plain problem: right now, mostly humans can read the molecule drawings in
papers, and papers draw the same molecule in a dozen outfits, sometimes by hand. A chemist shrugs and
says "atom is atom, bond is bond." A model trained on neat, computer-rendered drawings panics.

<div class="nf-row"><figure><img width="240" height="200" src="{{ '/assets/img/notes/icons/hand-drawn.svg' | relative_url }}" alt="A wobbly pencil-drawn ring molecule next to a pencil" loading="lazy"><figcaption>Hand-drawn too</figcaption></figure><figure><img width="240" height="200" src="{{ '/assets/img/notes/icons/lora.svg' | relative_url }}" alt="A frozen weight block with a small trainable low-rank adapter" loading="lazy"><figcaption>VLM post-training</figcaption></figure><figure><img width="500" height="484" src="{{ '/assets/img/notes/molecules/verdict.webp' | relative_url }}" alt="VERDICT logo" loading="lazy"><figcaption>VERDICT</figcaption></figure><figure><img width="240" height="200" src="{{ '/assets/img/notes/icons/rotation-c8.svg' | relative_url }}" alt="A molecule drawing ringed by eight rotation arrows" loading="lazy"><figcaption>Rotation-aware recognition</figcaption></figure></div>

I post-trained vision-language models to read real paper figures and found that the real bottleneck
is the gap between rendered and real images. I built VERDICT, four independent readers that would
rather say "I'm not sure" than make something up, and a rotation-aware recognizer that knows a
rotated drawing is the same molecule but a mirrored one might not be. Then I turned recognized
molecules into vectors, using 1D, 2D and 3D descriptions, five public base models and three kinds of
training, and asked honestly what 3D really adds.

<figure class="nf"><img width="240" height="200" src="{{ '/assets/img/notes/icons/multimodal-database.svg' | relative_url }}" alt="A database cylinder linked to image, text, DFT and MD records" loading="lazy"><figcaption>Every recognized molecule becomes a hub for its image, text, DFT and MD data.</figcaption></figure>

It all ends in a truly multimodal database, delivered through the MU product and a Chrome
extension: start from a molecule picture and jump to what the paper says, its DFT properties, or its
MD properties. Read it here: [Atom is atom, bond is bond]({{ '/notes/atom-is-atom-bond-is-bond/' | relative_url }}).

## Part 2: electrolytes, molecules mixed into a liquid

Part 2 takes the molecules from Part 1 and makes them the salt, solvents and additives of an
electrolyte, which looks like a boring puddle and is really a dance floor. Lithium ions grab solvent
partners, anions cut in, everything shuffles.

<figure class="nf"><img width="540" height="540" src="{{ '/assets/img/notes/internship-overview/electrolyte.webp' | relative_url }}" alt="Cartoon of an electrolyte droplet surrounded by its jobs: solvation, ion transport, redox stability, and interphase formation" loading="lazy"><figcaption>An electrolyte has a lot of jobs: wrap the ions (solvation), move them (transport), survive the voltage (redox stability), and help build a protective skin on the electrodes (interphase).</figcaption></figure>

To simulate that dance you need a rulebook, a force field, and a movie projector, molecular
dynamics. I extended a polarizable force field (PFF) to 627+ molecules and 20+ anions, got humbled
when fits that looked perfect on small clusters made the liquid clump (more than 50 of 80 versions
failed), and distilled those failures into PFF RSI, a fitting loop that turns every saved mistake
into an automatic check.

<figure class="nf nf-wide"><img width="720" height="280" src="{{ '/assets/img/notes/icons/pff-rsi-loop.svg' | relative_url }}" alt="Loop diagram: sample, fit, guard against known failures, MD check, learn, back to sample" loading="lazy"><figcaption>PFF RSI: sample → fit → guard against known failures → MD check → learn → repeat.</figcaption></figure>

Then I taught a model to watch about 40,000 of these movies through three heads: the recipe (what's
in the bottle), a snapshot (one frozen frame of atoms) and the trajectory (how everything moves over
time), all compressed into one shared 128-number space used for retrieval, alignment and property
prediction.

<figure class="nf nf-wide"><img width="720" height="280" src="{{ '/assets/img/notes/icons/three-heads-latent.svg' | relative_url }}" alt="Recipe, snapshot and trajectory encoders feeding one shared latent space used for retrieval, alignment and properties" loading="lazy"><figcaption>Three heads, one latent space, three uses.</figcaption></figure>

Finally, I curated everything I'd learned (task records, simulation logs and bugs, tool definitions)
to fine-tune an open-weight LLM and put it inside a harness of tools and checks: an electrolyte
co-scientist that explains failed runs and prepares new ones, with a researcher reviewing what it
proposes. Read it here: [Teaching a puddle to dance]({{ '/notes/teaching-a-puddle-to-dance/' | relative_url }}).

## Part 3: cells, electrolytes inside batteries

Part 3 puts the electrolyte formulations from Part 2 into cells and reaches the question everyone at
a battery company actually cares about: if I change the recipe, say by adding an additive, what
happens to the battery? Does it cycle longer, store better, charge faster?

<div class="nf-row"><figure><img width="540" height="540" src="{{ '/assets/img/notes/cells/delta-recipe.webp' | relative_url }}" alt="Delta recipe: bottles with sliders" loading="lazy"><figcaption>Δrecipe</figcaption></figure><figure><img width="540" height="540" src="{{ '/assets/img/notes/cells/delta-performance.webp' | relative_url }}" alt="Delta performance: cycling, storage, charging, rate" loading="lazy"><figcaption>Δperformance</figcaption></figure></div>

The central idea is that nothing from Parts 1 and 2 gets thrown away. Both were mostly
representation learning, so a cell can be represented by stacking the learned molecule
representations and the electrolyte latent, with the cell's design and conditions on top. Real
experiments are slow and expensive, so around a 252-formulation additive experiment I built a ladder
of simulations, one rung per scale: from electrons (DFT) to the liquid (MD), to bonds breaking at the
electrode surface (interface reactions), to how that surface evolves over long times (kMC), to
voltage, capacity and aging (P2D / SPMe), all the way up to temperature and stress across the whole
cell (3D fields). Then I aligned those scales in one shared space and found that test conditions are
the glue that holds them together.

<figure class="nf nf-wide"><img width="720" height="280" src="{{ '/assets/img/notes/icons/cell-representation-stack.svg' | relative_url }}" alt="Molecule representations, the electrolyte latent, and design and conditions stacked into one cell representation" loading="lazy"><figcaption>Molecules (Part 1) + electrolyte latent (Part 2) + design and conditions = a cell representation.</figcaption></figure>

The part I'm most excited about is the aging world model. Instead of a black box that predicts
lifetime as one number, it learns the whole evolution process: given the cell's design, its current
state and how it's being used, predict the next state, and roll that forward into a full aging
curve. Learning the process rather than the endpoint is also where I started to see what I'd call
knowledge emergence, which I'm still working to confirm properly.

<figure class="nf nf-wide"><img width="720" height="280" src="{{ '/assets/img/notes/icons/blackbox-vs-rollout.svg' | relative_url }}" alt="Left: a black box turning inputs into one lifetime number. Right: a model rolling out a full aging curve state by state" loading="lazy"><figcaption>From a black-box lifetime number to learning the whole evolution.</figcaption></figure>

It ends with a cell co-scientist that reasons over representations from all three parts, plus a
decision API that hands the agent's small, repetitive judgment calls to a typed decision model so
the reasoning model can focus on reasoning. Read it here: [From molecules to batteries]({{ '/notes/from-molecules-to-batteries/' | relative_url }}).

## The same four steps at every scale

Only when I laid the three parts side by side did I notice they follow the same four steps:
represent, align, predict, and hand the result to a co-scientist. For molecules, that's VLMs and
VERDICT reading drawings plus 1D/2D/3D representations, aligned views, property prediction, and the
multimodal database. For electrolytes, it's three heads into a 128-d latent, then properties, then
the electrolyte co-scientist. For cells, it's stacked representations and multiscale alignment, then
regression and classification heads plus the world model, then the cell co-scientist.

<figure class="nf nf-wide"><img width="720" height="300" src="{{ '/assets/img/notes/icons/method-per-scale.svg' | relative_url }}" alt="A grid of three rows, molecules, electrolytes and cells, each going through the same four steps: represent, align, predict, co-scientist" loading="lazy"><figcaption>Represent → align → predict → co-scientist, three times over.</figcaption></figure>

One lesson also kept showing up at every scale: a pretty number on the training objective is not the
same as the scientific goal. A preference model can score beautifully and still get molecules wrong.
A force field can nail tiny clusters and still ruin the liquid. An alignment can match molecules
perfectly and still say almost nothing about real batteries. So most of my summer was spent building
the checks: agreement between independent readers, liquid simulations inside the fitting loop,
calibration against real measurements. Less glamorous than a leaderboard, but it's what lets you
trust the answer.

<figure class="nf"><img width="240" height="200" src="{{ '/assets/img/notes/icons/dpo-detour.svg' | relative_url }}" alt="A beautifully falling training loss curve next to a crossed-out molecule labeled 0 to 2 percent exact match" loading="lazy"><figcaption>Pretty loss, wrong molecules: the first time I learned this lesson, but not the last.</figcaption></figure>

## What this got us

I started from batteries and ended up with a method. Batteries were just where I happened to begin;
the method should transfer to most systems like them, the ones built as molecules, then mixtures,
then devices, where the important structure lives in drawings, geometry and simulations rather than
text, and where experiments are scarce but simulation is possible. It's still a living method, and I
keep adding pieces as the field moves. Grab a snack: Part 1 starts at the foundation, with a molecule
and a computer trying to figure out who it is.
