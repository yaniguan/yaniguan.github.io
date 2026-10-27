---
layout: note
title: Teaching a puddle to dance
description: "Part 2, electrolytes: the molecules recognized and represented in Part 1 become the salt, solvents and additives of a liquid. Extending a polarizable force field, a fitting loop that learns from its own failures, three heads that compress 40,000 molecular movies into one latent space, and an electrolyte co-scientist trained on all of it"
date: 2026-10-24 09:00:00-0700
tags: [internship, molecular-dynamics, force-fields, representation-learning]
series: ses-internship
part: 2
---

In Part 1 molecules got recognized and turned into vectors; here they get mixed into electrolytes,
and the question becomes how they move. I extended a polarizable force field (PFF) to 627+
molecules and 20+ anions, watched more than 50 of 80 versions fail once they had to behave as a
liquid, turned those failures into a self-improving fitting loop called PFF RSI, and taught a model
to read about 40,000 molecular-dynamics movies through three heads and one shared 128-number space.
That space predicts conductivity with R² 0.976, trajectory features improved conductivity error in
18 of 21 held-out chemistry groups, and everything I learned along the way became training material
for an electrolyte co-scientist.

## How do molecules move in a liquid?

The question on my slides for this part was "how do molecules move in their micro-environment?",
and it starts with what an electrolyte actually is. An electrolyte is the liquid inside a battery
that ions swim through. The recipe is simple: salt + solvents + additives, and those are exactly
the molecules from Part 1, now with jobs. The behavior is not simple. Zoom in and it's a crowded
dance floor: lithium ions grab solvent molecules as partners, anions try to cut in, and how fast
everyone gets across the floor decides how well the battery charges and discharges.

<figure class="nf"><img width="480" height="360" src="{{ '/assets/img/notes/electrolytes/ions-moving.webp' | relative_url }}" alt="Illustration of ions moving through an electrolyte between two electrodes" loading="lazy"><figcaption>The dance floor: ions moving through the electrolyte, picking up and dropping partners as they go.</figcaption></figure>

To watch that dance on a computer you need two things. A force field is the rulebook for how atoms
push and pull on each other. Molecular dynamics (MD) is playing the movie with that rulebook: put
lots of molecules in a box, apply the rules, and watch. If the rulebook is wrong, the movie is
fiction. Very confident, beautifully rendered fiction.

## Writing a bigger rulebook

My first job was to grow the rulebook so that the molecules people actually want to try have rules
to follow. The force field is polarizable, meaning electron clouds can squish in response to their
neighbors, which matters a lot around small, charged ions like lithium. The goal was coverage:
extend it to 627+ molecules and 20+ anions, for both lithium and sodium electrolytes.

<figure class="nf"><img width="540" height="540" src="{{ '/assets/img/notes/electrolytes/pff-fitting.webp' | relative_url }}" alt="Force-field fitting diagram with a lithium ion, a solvent molecule, an anion, and a three-body cluster" loading="lazy"><figcaption>Fitting the rulebook: Li+, a solvent, an anion, and the three-body case where they all meet.</figcaption></figure>

The reference data comes from quantum chemistry (DFT), and lots of it. Some clusters are binary:
the ion with one partner. Some are ternary: a solvent and an anion competing for the same ion, like
two people reaching for the last slice of pizza. Each pair or trio gets computed at many distances
and orientations, so the rulebook sees close calls, near misses and awkward side-on approaches, not
just the polite pose.

What I fit was mainly the exp-6 cross terms, keeping the charges and the polarization background
fixed. Exp-6 is the part of the rulebook that covers short-range repulsion ("personal space!") and
dispersion, the weak, sticky attraction between everything. The "exp" is an exponential wall that
keeps atoms from overlapping; the "6" is a gentle pull that falls off with the sixth power of
distance. All the while I was debugging, learning electrolyte science on the fly, and studying the
properties that came out. Three jobs at once, which is roughly how every internship works.

## The liquid gets a vote

The hardest lesson of the summer was that a fit isn't done when the cluster error is low; it's done
when the liquid behaves. Density, radial distribution functions (who stands next to whom),
diffusion, conductivity and viscosity all have to come out sensible in MD. My ledger ended up
indexing 80 distinct force-field versions, and more than 50 of them failed. Here are a few of my
favorite ways to fail.

<figure class="nf"><img width="540" height="540" src="{{ '/assets/img/notes/internship-overview/electrolyte.webp' | relative_url }}" alt="Cartoon of an electrolyte droplet surrounded by its jobs: solvation, ion transport, redox stability, and interphase formation" loading="lazy"><figcaption>An electrolyte has many jobs. A rulebook that only nails small clusters can still flunk all of them in the liquid.</figcaption></figure>

One fit looked great on the clusters. Errors low, curves lined up, very satisfying. Then I ran the
liquid and it clumped: the ions huddled together like penguins in a blizzard. I traced it to one
ether-oxygen interaction the fit had effectively broken. Restoring it cut the ion aggregation
fraction from 0.811 to 0.282, and from 0.415 to 0.044 in a second system. Conductivity moved closer
to experiment, though it was still too low. Progress, not victory.

Another time, a tiny coefficient, 0.00170, got rounded to zero on its way into the simulation. The
builder treated zero as "missing" and helpfully swapped a big repulsive wall for a small one, and MD
failed. Now a check reads the final built parameters, not just the ones I meant to build. And in my
favorite, lone-pair virtual sites stored with the label "He" were passed to DFT as real helium
atoms. That quietly affected 27 of 61 clusters. Nothing says summer internship like accidentally
inventing noble-gas electrolyte chemistry. Now templates, masses and site types are checked before
anything goes out.

One failure was actually a success. A salt-free solvent control came out at a viscosity of about
2.1–2.4 mPa·s, which told me the solvent was fine and the problem lived in the salt model. The
lesson I now believe in my bones: a low DFT fitting error doesn't protect the liquid, and MD
validation is part of parameter development, not a final demo.

## PFF RSI: turning failures into checks

Fifty-odd failures is a lot of pain, but it's also a lot of data, so I distilled them into a
recursive self-improvement system, PFF RSI. The slide version is a simple cycle: fit the force
field, validate in MD, record the failures, refine the next fit.

<figure class="nf"><img width="540" height="540" src="{{ '/assets/img/notes/electrolytes/pff-rsi.webp' | relative_url }}" alt="Cycle diagram: fit force field, validate MD, record failures, refine next fit" loading="lazy"><figcaption>The slide version: fit → validate in MD → record failures → refine the next fit.</figcaption></figure>

Underneath the cycle, the slide stacks four layers: context, memory, code harness and weights. A
saved failure is memory: the system, the version, what changed, what I expected versus what I
measured, and what it cost, stored so it can be searched later by conditions, bad parameters,
symptoms and useful checks. Loading the relevant failures before a new fit is context. Turning a
failure into an automatic check is a new procedure, written as code in the harness, so the same
mistake gets caught by a machine instead of by me at 11 pm. The weights are the fitted parameters
that the whole loop keeps refining.

<figure class="nf nf-wide"><img width="720" height="280" src="{{ '/assets/img/notes/icons/pff-rsi-loop.svg' | relative_url }}" alt="Loop diagram: sample DFT clusters, fit exp-6 cross terms, guard against known failures, check in MD, learn by turning failures into checks, then back to sampling" loading="lazy"><figcaption>When a brand-new molecule arrives: sample, fit, guard, check in MD, learn, repeat.</figcaption></figure>

When a brand-new molecule shows up, the loop runs on its own. It samples a small starting set of
clusters and expands only the channels that failed, fits, and checks. Parameters that match a known
failure pattern get intercepted and sent to MD for a look before anyone uses them, so the wall that
rounded to zero and the helium incident can't sneak through twice. The honest caveat is that a fixed-budget
test proving this memory actually makes research faster is still on my to-do list. It feels faster.
Feelings aren't data.

## 40,000 movies and three heads

Once the rulebook works you can make movies, lots of them, and then you hit a new problem: none of
it is text. Each trajectory is 5,000 frames, one every 4 picoseconds, for 20 nanoseconds in total.
I ended up with about 40,000 trajectories, roughly 200 million frames.

<figure class="nf nf-wide"><img width="720" height="140" src="{{ '/assets/img/notes/icons/ion-timeline.svg' | relative_url }}" alt="A timeline of simulation frames from frame 1 to frame 5,000, 4 picoseconds apart, 20 nanoseconds in total" loading="lazy"><figcaption>One movie: 5,000 frames, 4 ps apart, 20 ns in total. Now multiply by 40,000.</figcaption></figure>

You can't paste a trajectory into a chatbot and ask how it felt. It's coordinates, boxes and time,
and the interesting part (who solvates whom, how ions hop) is spread across thousands of frames. So
I asked whether a model could learn what a liquid is by watching, and squeeze each one into
something small enough to search, compare and predict with. I looked at the same liquid through
three views, each with its own encoder, or "head," in the same order as my slides.

<div class="nf-row"><figure><img width="400" height="400" src="{{ '/assets/img/notes/electrolytes/recipe-encoder.webp' | relative_url }}" alt="Recipe encoder diagram: components, ratios and conditions become a vector" loading="lazy"><figcaption>1. Recipe: what's in the bottle</figcaption></figure><figure><img width="400" height="400" src="{{ '/assets/img/notes/electrolytes/snapshot-encoder.webp' | relative_url }}" alt="Snapshot encoder diagram: a periodic box of atoms becomes a graph, then a vector" loading="lazy"><figcaption>2. Snapshot: one frozen frame</figcaption></figure><figure><img width="390" height="390" src="{{ '/assets/img/notes/electrolytes/trajectory-encoder.webp' | relative_url }}" alt="Trajectory encoder diagram summarizing a sequence of frames over time" loading="lazy"><figcaption>3. Trajectory: motion over time</figcaption></figure></div>

The recipe encoder reads what's in the bottle: the components, their amounts, and conditions like
temperature, and turns them into 128 numbers. The snapshot encoder reads one frame of 3D atoms; it's
my favorite, so it gets its own section below. The trajectory encoder reads motion over time: the
5,000 frames are split into 50 chunks of 100, so the model sees how things move, not just a pose.

All three are compressed into one shared 128-d latent space and trained with three-way contrastive
alignment: views of the same liquid are pulled together, views of different liquids pushed apart. A
recipe should find its own movie, and a snapshot should find its own recipe. That one space then
does three jobs: retrieval, alignment between views, and property prediction.

<figure class="nf nf-wide"><img width="720" height="280" src="{{ '/assets/img/notes/icons/three-heads-latent.svg' | relative_url }}" alt="Recipe, snapshot and trajectory encoders feeding one shared 128-number latent space, which feeds retrieval, alignment and property prediction" loading="lazy"><figcaption>Three heads, one 128-d space, three uses.</figcaption></figure>

For retrieval, retrieval@10 (is the matching liquid in the top 10?) was 84.1% with the full
representation versus 82.4% from the static snapshot alone, so a single frame already knows a lot.
For conductivity, the model reached R² 0.976, close to a strong descriptor baseline, and adding
trajectory features improved conductivity error in 18 of 21 held-out chemistry groups: motion helps,
especially on chemistry the model hasn't seen. On my summary slide the property heads came out at
R² 0.906, 0.936 and 0.987 for conductivity, viscosity and solubility. One more finding I'm fond of:
the representation carried over from lithium to sodium electrolytes with only a simple alignment
step. Same dance, different lead dancer.

From there the slides go two steps further. Reverse design starts from the properties you want and
looks for recipes that land there. I also tried trajectory generation, rolling the movie forward
with GRU, TCN and causal-transformer models, which I'll leave as a teaser.

## Inside the snapshot encoder

The snapshot encoder is where the physics goes into the architecture, the same way rotation did
in Part 1. Each frame becomes a periodic atom graph: every atom connects to neighbors within 6 Å,
using the minimum-image rule across the box boundaries (the box wraps around like Pac-Man), and
whole molecules are kept intact instead of getting sliced at the edge.

<figure class="nf"><img width="600" height="600" src="{{ '/assets/img/notes/electrolytes/md-snapshot.webp' | relative_url }}" alt="Snapshot of an MD simulation box full of atoms" loading="lazy"><figcaption>One frame of the liquid in its box, about to become a periodic graph.</figcaption></figure>

Then comes equivariant message passing. Each atom carries two kinds of luggage: plain numbers
(scalars) and little arrows (vectors). Messages are built from distances and directions, so when
you rotate the box, the arrows rotate right along with it and the final pooled numbers don't change
at all. The model doesn't waste effort learning that a rotated liquid is the same liquid (the same
"atom is atom" spirit as Part 1), while still keeping directional information like which way a
solvent faces a lithium ion. Each frame comes out as 128 learned numbers plus 8 geometric ones, such
as lithium coordination and ion contacts: 136 numbers per frame.

Then the unglamorous part, which made everything else possible. Neighbor search went from O(N²) to
O(N): instead of every atom asking every other atom "are you close?", each atom only checks its own
neighborhood. Then I froze the encoder and cached about 192 million snapshots once, which took 395
H200 GPU-hours and a cache of about 52 GB. After that, a training step went from 12.6 s to 0.15 s.
That's the difference between "let's try an idea" and "let's try an idea next week."

## The electrolyte co-scientist

Everything above is how I came to understand formulation, and the last step was to hand that
understanding to something that could use it. So I curated it into training material. The first
part is organized scientific task records: formulation and MD cases, reading evidence, a public
conductivity dataset (CALiSol), and policy examples, 254,527 rows in the model's chat and tool
format (rows are tasks, not independent formulations). The second is the MD engine's simulation
logs, bugs and failures; the helium incident lives on. The third is tool-usage records plus the
tool definitions themselves.

<figure class="nf nf-wide"><img width="720" height="280" src="{{ '/assets/img/notes/icons/co-scientist-pipeline.svg' | relative_url }}" alt="Curated tasks, MD logs and bugs, and tool definitions feed a fine-tuned LLM inside a harness of tools, checks and a loop, producing an electrolyte co-scientist whose proposals a researcher reviews" loading="lazy"><figcaption>Curated data + logs and bugs + tool definitions → fine-tuned LLM inside a harness → co-scientist, with a researcher reviewing.</figcaption></figure>

I fine-tuned an open-weight LLM with LoRA for about one epoch, 63,632 steps on one GPU. Fine-tuning
teaches the model the task format, how to read evidence, and when and how to call tools. It does
not turn the model into a calculator: the numbers still come from the data and the programs.

The harness does the rest. It has a tool registry (file reading, protocol checks, analysis
programs, evidence records, and PFF RSI itself) and a loop: the researcher asks, the LLM plans, and
the harness retrieves experiments, calls the explanation and generation models, executes approved
simulations, and compares results with saved artifacts. Preparing a run is kept separate from
submitting it. A request carries the formulation, protocol, resources and a fingerprint, gets
validated before a job is ever created, is recognized if it's a repeat (no burning GPU time on the
same run twice), and can recover after a failure. Raw trajectories stay on the tool side; the LLM
sees summaries, not 5,000 frames of coordinates.

<figure class="nf"><img width="720" height="342" src="{{ '/assets/img/notes/internship-overview/map.webp' | relative_url }}" alt="Map of the internship projects, with the force-field and trajectory-representation branches feeding an electrolyte co-scientist" loading="lazy"><figcaption>Where it all lands on my project map: both electrolyte branches feed the co-scientist.</figcaption></figure>

The tools had their own growing pains, and I fixed three I'm proud of. An unsupported unit used to
look like "no data," so the model would conclude nothing existed; now the tool rejects it clearly.
Short error messages made the model guess over and over, like someone jiggling a locked door; now
errors spell out the full argument contract. And one request passed every numeric check while "DMC"
was carrying the SMILES of DMF, a different molecule with a confusingly similar name; now the
checker verifies chemical identity, which is Part 1's lesson coming back to collect.

So what can it do? It can explain why a simulation failed, how a formulation performed, or how to
prepare a run at a new temperature, and the researcher stays in charge by reviewing the next
formulations it proposes. This was also when I noticed I was building a way of working more than a
single model: represent the liquid, align its views, predict, then hand it to a co-scientist. I'd
love to call that a method of my own, but the field moves so fast that I kept adding new pieces to
it all summer, so for now it's a living one.

## What this got us

<div class="nf-row"><figure><img width="160" height="160" src="{{ '/assets/img/notes/series/electrolyte.webp' | relative_url }}" alt="Electrolyte icon" loading="lazy"><figcaption>Electrolytes</figcaption></figure><figure><img width="142" height="160" src="{{ '/assets/img/notes/series/cell.webp' | relative_url }}" alt="Battery cell icon" loading="lazy"><figcaption>go into cells</figcaption></figure></div>

Part 2 gave us a rulebook that covers the molecules people want to try and that learns from its own
mistakes, a 128-number description of each liquid learned from recipes, frames and motion, and a
co-scientist that knows how to read all of it. Nobody buys a puddle, though. These formulations
only matter once they're sealed inside a real battery, next to electrodes, getting charged and
discharged for months, and that's where Part 3 takes them.
