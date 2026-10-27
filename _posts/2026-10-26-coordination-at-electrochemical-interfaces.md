---
layout: note
title: "Who is bonded to whom?"
description: "Part 0, Overview: three stops through my UCLA PhD thesis, from water and capacitance to Cu dissolution, molecular hydrogen shuttles, and Cs-assisted CO2 activation"
date: 2026-10-26 13:00:00-0700
tags: [electrochemistry, coordination, phd-thesis]
series: ucla-thesis
part: 0
---

<p class="n-lede">My thesis follows what happens when the neighbors at an electrode change. Acetone and methylamine push Cu capacitance in opposite directions; about 13 ppm Cu remains in solution at −0.75 V versus RHE; and about 1 ppm Pb opens a much more effective route to reductive amination on Ag. At a ligand-confined Ag interface, partially desolvated Cs⁺ also makes closer contact with activated CO₂. Across three parts, I follow the same question: who is bonded to whom, and what becomes possible when those partners change?</p>

<nav class="n-toc" markdown="1">
**In this post**
1. [The electrode comes with company](#company)
2. [Three stops at the interface](#three-stops)
3. [The calculations have different jobs](#different-jobs)
4. [Reach it, keep it, restore it](#reach-keep-restore)
5. [A few distinctions worth keeping](#distinctions)
</nav>

## The electrode comes with company {#company}

I can label an electrode Cu or Ag in a methods section. That label is useful, but it leaves out a lot of the chemistry happening right beside the metal. Water points in different directions. Reactants bind, exchange protons, and rearrange their neighbors. A metal atom can acquire enough new partners to leave the electrode altogether. The material on the invoice is only the beginning of the story.

My PhD work started from specific puzzles in aqueous electrochemistry. Why would two organic reactants change capacitance in opposite directions? Why would a reducing electrode lose metal? Why would a tiny amount of another element make a large difference to product yield? A later collaboration on CO₂ reduction brought in a different puzzle: what changes when a cation gives up some of its water?

<figure class="nf nf-wide"><img width="720" height="240" src="{{ '/assets/img/notes/icons-thesis/coordination-thread.svg' | relative_url }}" alt="Conceptual thread connecting water organization, Cu extraction, hydride hydrogen transfer, and Cs contact with CO2" loading="lazy"><figcaption>The connecting thread is coordination redistribution: a species gains some partners while losing or weakening others.</figcaption></figure>

<div class="nf-row"><figure><img width="240" height="200" src="{{ '/assets/img/notes/icons-thesis/series-interface.svg' | relative_url }}" alt="Conceptual electrochemical interface with metal, water, and coordination partners" loading="lazy"><figcaption>The metal and its immediate company belong in the same picture.</figcaption></figure></div>

I use coordination broadly here. It includes metal–ligand contacts, hydration, hydrogen bonding, and the metallic neighbors that hold a surface atom in place. These interactions have different physics. Following how they change gives me a useful way to connect the projects without pretending they all run on the same equation.

<hr>

## Three stops at the interface {#three-stops}

The series follows a chemical progression: first the environment changes, then the electrode can change, then those changes in partners can open a reaction route.

<div class="n-grid three">
<div class="n-card" markdown="1">
<p class="n-card-title"><img width="240" height="200" src="{{ '/assets/img/notes/icons-thesis/part-capacitance.svg' | relative_url }}" alt="" loading="lazy">Part 1 · Capacitance</p>
[Capacitance before reduction]({{ '/notes/capacitance-before-reduction/' | relative_url }}). Acetone raises Cu double-layer capacitance and methylamine lowers it. Both molecules are more polarizable than water on their own, so I had to look at the assembled interface.
</div>
<div class="n-card" markdown="1">
<p class="n-card-title"><img width="240" height="200" src="{{ '/assets/img/notes/icons-thesis/part-dissolution.svg' | relative_url }}" alt="" loading="lazy">Part 2 · Dissolution</p>
[When the cathode dissolves]({{ '/notes/when-the-cathode-dissolves/' | relative_url }}). Amines stabilize Cu as it trades metallic neighbors for nitrogen ligands. A cathodic potential helps retain Cu, but the solution chemistry still gets a vote.
</div>
<div class="n-card" markdown="1">
<p class="n-card-title"><img width="240" height="200" src="{{ '/assets/img/notes/icons-thesis/part-reactivity.svg' | relative_url }}" alt="" loading="lazy">Part 3 · Reactivity: Pb + Cs in CO2RR</p>
[Borrowed hydrogen and a nearly bare cation]({{ '/notes/borrowed-hydrogen-and-a-bare-cation/' | relative_url }}). Pb and Bi hydrides offer candidate hydrogen shuttles in amination. In a separate CO₂-reduction system, less hydrated Cs⁺ develops a closer, chemically specific adsorbate contact.
</div>
</div>

The final part deliberately puts two different reactions side by side. Pb and Bi change composition as they transfer hydrogen; Cs changes its local hydration and interaction with CO₂. Their connection is a change in coordination that creates a reactive configuration. I keep the experimental systems separate throughout.

<hr>

## The calculations have different jobs {#different-jobs}

My contribution across these studies was computational chemistry, alongside experiments that supplied the puzzles and tested the interpretations. For the Cs collaboration, I contributed to the electronic-structure and interfacial modeling; experimental collaborators performed the synthesis, electrochemistry, and spectroscopy.

I used a hierarchy of models because each question needs different detail. Explicit water resolves local organization. Molecular dynamics supplies configurations to inspect. Continuum solvent represents the surroundings without placing every molecule. Calculations at a common electrode potential let states exchange electrons with the same reservoir. Reaction-path calculations address hydrogen-transfer barriers.

<div class="n-callout"><img width="240" height="200" src="{{ '/assets/img/notes/icons-thesis/series-interface.svg' | relative_url }}" alt="" loading="lazy"><div markdown="1">
More atoms are useful when they resolve something that could change the answer. For water response, I need molecular orientation. For Cu loss, I need kinks and ligands. For a hydride, I need the hydrogen donor and its transition state. For Cs, I need to vary hydration explicitly.
</div></div>

A detailed picture can still leave out the quantity I most want. A frozen water configuration can have a well-defined electronic response while its probability in the real liquid remains unknown. An optimized hydride can have an accessible transfer pathway while its steady-state concentration remains unknown. Keeping those gaps visible makes the calculation more useful.

<hr>

## Reach it, keep it, restore it {#reach-keep-restore}

When I put the studies together, three practical questions kept appearing. Can the relevant configuration be reached? Can its essential species remain available long enough to do something useful? Can they be restored afterward?

Cu dissolution shows why reaching a new coordination environment can be bad news for the electrode. An amine helps a Cu atom leave its metallic surroundings and become a soluble complex. The hydride studies explore another possible fate for a mobile metal species: transfer hydrogen to the substrate, return to the electrode, and regenerate. Detachment is a branching point; what follows decides whether it is material loss or part of a productive cycle.

The Cs system supplies a different arrangement. A ligand-confined interface can retain the cation near the adsorbate while water coordination decreases. Losing water makes room for a closer contact. The useful change happens without requiring a metal-containing molecule to shuttle into solution.

I find this more helpful than asking for the strongest possible adsorption or the largest possible capacitance. A useful reactive configuration needs to be accessible, survive its competition, and fit into the rest of the chemistry. Strong binding can help one requirement and obstruct another.

<hr>

## A few distinctions worth keeping {#distinctions}

The numbers in this series answer different questions, and I try to keep their job descriptions attached.

<div class="n-grid three">
<div class="n-card" markdown="1">
<p class="n-card-title">Response and population</p>
Capacitance tells me how charge responds to potential. Several structures can give the same response trend. It cannot uniquely tell me how often each structure occurs.
</div>
<div class="n-card" markdown="1">
<p class="n-card-title">Intermediate and barrier</p>
An uphill intermediate carries an energetic cost. A transition state sets an activation barrier. An energy profile containing only intermediates does not supply a dissolution rate.
</div>
<div class="n-card" markdown="1">
<p class="n-card-title">A step and a cycle</p>
An accessible hydrogen-transfer step matters only if its donor forms, reaches the substrate, survives side reactions, and regenerates. A low barrier alone does not predict product yield.
</div>
</div>

Those distinctions come from the synthesis in my thesis, rather than from a wish to add caveats to every sentence. They help locate the next useful experiment or calculation. Measure populations, find the missing transition state, track the mobile metal, account for the water reservoir: each addresses a particular missing link.

The through-line is simple enough to keep in mind while the chemistry gets busier. Before assigning activity to a material, I want to know its neighbors under the conditions of the reaction. [Part 1]({{ '/notes/capacitance-before-reduction/' | relative_url }}) starts with water, two solutes, and a capacitance trend that refused to follow the obvious explanation.
