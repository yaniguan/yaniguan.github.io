---
layout: note
title: "Who is bonded to whom?"
description: "Part 0, Overview: three stops through my UCLA PhD thesis, from water and capacitance to Cu dissolution, molecular hydrogen shuttles, and Cs-assisted CO2 activation"
date: 2026-10-26 13:00:00-0700
tags: [electrochemistry, coordination, phd-thesis]
series: ucla-thesis
part: 0
---

<div class="n-callout warm"><div markdown="1">
The short version. My thesis is about what sits next to an electrode, and what changes when those neighbors change. Acetone and methylamine push Cu capacitance in opposite directions. Amines pull Cu out of a cathode, so about 13 ppm Cu is still found in solution at −0.75 V versus RHE. About 1 ppm Pb turns Ag from a poor amination catalyst into one that gives yields above 60%. In a separate CO₂-reduction system, a Cs⁺ ion that has lost some of its water gets closer to activated CO₂. Three posts follow those stories. This one shows how they fit together.
</div></div>

<nav class="n-toc" markdown="1">
**In this post**
1. [The electrode comes with company](#company)
2. [Three stops at the interface](#three-stops)
3. [The calculations have different jobs](#different-jobs)
4. [Reach it, keep it, restore it](#reach-keep-restore)
5. [A few distinctions worth keeping](#distinctions)
</nav>

## The electrode comes with company {#company}

Write "Cu cathode" in a methods section and it reads like a complete description. The experiments behind my thesis kept showing me that it isn't. Two reactants changed the capacitance of the same Cu electrode in opposite directions. A cathode, which its negative potential should protect, lost copper into the electrolyte. A trace of lead, small enough to be written off as an impurity, changed the amine yield on Ag by more than a factor of ten.

Each of these turned into a question about neighbors: which molecules sit next to the metal, which atoms the metal is bonded to, and what happens when those partners change. The CO₂ work later added one more version of the same question, this time about a cation and the water around it.

<figure class="nf nf-wide"><img width="720" height="240" src="{{ '/assets/img/notes/icons-thesis/coordination-thread.svg' | relative_url }}" alt="One copper thread running through four small scenes: water on Cu, a Cu atom leaving with two ammine ligands, PbH4 passing a hydrogen to an imine, and Cs+ touching bent CO2 on Ag" loading="lazy"><figcaption>The common thread is coordination changing hands: a species picks up some partners while losing or weakening others.</figcaption></figure>

<div class="nf-row"><figure><img width="240" height="200" src="{{ '/assets/img/notes/icons-thesis/series-interface.svg' | relative_url }}" alt="Water molecules and an ammonia ligand on a Cu surface" loading="lazy"><figcaption>The metal and its immediate company belong in the same picture.</figcaption></figure></div>

I use "coordination" loosely here. It covers metal–ligand bonds, hydration shells, hydrogen bonds, and the metallic neighbors that hold a surface atom in place. These are different kinds of physics, and I do not pretend they obey one equation. Following how they change is simply a practical way to connect projects that would otherwise look unrelated.

<hr>

## Three stops at the interface {#three-stops}

The series moves in a chemical order. First the environment around the electrode changes. Then the electrode itself changes. Finally, those changes in partners open a reaction route that was not there before.

<div class="n-grid three">
<div class="n-card" markdown="1">
<p class="n-card-title"><img width="240" height="200" src="{{ '/assets/img/notes/icons-thesis/part-capacitance.svg' | relative_url }}" alt="" loading="lazy">Part 1 · Capacitance</p>
[Capacitance before reduction]({{ '/notes/capacitance-before-reduction/' | relative_url }}). Acetone raises Cu double-layer capacitance and methylamine lowers it. Both molecules are more polarizable than water, so the answer has to come from the interface as a whole.
</div>
<div class="n-card" markdown="1">
<p class="n-card-title"><img width="240" height="200" src="{{ '/assets/img/notes/icons-thesis/part-dissolution.svg' | relative_url }}" alt="" loading="lazy">Part 2 · Dissolution</p>
[When the cathode dissolves]({{ '/notes/when-the-cathode-dissolves/' | relative_url }}). Amines help a Cu atom swap metallic neighbors for nitrogen ligands. A cathodic potential slows the loss, but the solution chemistry still has a say.
</div>
<div class="n-card" markdown="1">
<p class="n-card-title"><img width="240" height="200" src="{{ '/assets/img/notes/icons-thesis/part-reactivity.svg' | relative_url }}" alt="" loading="lazy">Part 3 · Reactivity: Pb + Cs in CO2RR</p>
[Borrowed hydrogen and a nearly bare cation]({{ '/notes/borrowed-hydrogen-and-a-bare-cation/' | relative_url }}). Pb and Bi hydrides are candidate hydrogen shuttles for amination. In a separate CO₂-reduction system, a less hydrated Cs⁺ makes closer, chemically specific contact with the adsorbate.
</div>
</div>

Part 3 deliberately puts two different reactions side by side. Pb and Bi change their composition as they pass hydrogen along; Cs changes its hydration and its contact with CO₂. What links them is a change in coordination that produces a reactive arrangement. The two experimental systems stay separate throughout.

<hr>

## The calculations have different jobs {#different-jobs}

My part in all of these studies was computational. The experiments raised the puzzles and tested the explanations; my job was to build atomistic models that could say why.

No single model level could do that. Explicit water resolves how molecules are arranged at the surface. Molecular dynamics gives me configurations worth looking at. A continuum solvent stands in for the rest of the liquid without placing every molecule. Holding different states at a common electrode potential lets them exchange electrons with the same reservoir, as they would in a cell. Reaction-path calculations give the barriers for moving hydrogen.

<div class="n-callout"><img width="240" height="200" src="{{ '/assets/img/notes/icons-thesis/series-interface.svg' | relative_url }}" alt="" loading="lazy"><div markdown="1">
More atoms help only when they resolve something that could change the answer. For the water response, that means molecular orientation. For Cu loss, it means kinks and ligands. For a hydride, the hydrogen donor and its transition state. For Cs, the number of waters, varied one at a time.
</div></div>

Even a detailed picture can leave out the number I most want. A frozen water configuration has a well-defined electronic response, but I may not know how often it occurs in the real liquid. An optimized hydride can have an easy transfer pathway, but I may not know how much of it is present at steady state. I try to keep those gaps in view, because they are usually where the next experiment should go.

<hr>

## Reach it, keep it, restore it {#reach-keep-restore}

When I lay the studies side by side, the same three practical checks keep coming up. A useful configuration has to be reachable. Its key species have to stay around long enough to do something. And, for anything catalytic, they have to come back afterward.

Cu dissolution shows why reaching a new coordination environment can be bad news. An amine helps a Cu atom leave its metallic surroundings and become a soluble complex, and the electrode slowly loses material. The hydride work explores a different fate for a mobile metal species: carry hydrogen to the substrate, return to the electrode, and get recharged. Leaving the surface is a branching point. What happens next decides whether it is a loss or part of a cycle.

The Cs system works another way. A ligand-confined interface keeps the cation near the adsorbate while its water shell thins out, and losing water makes room for a closer contact. Nothing has to leave the electrode for the useful change to happen.

I find this more helpful than looking for the strongest adsorption or the largest capacitance. A productive configuration has to be accessible, survive its competition, and fit into the rest of the chemistry. Strong binding can help one of those and hurt another.

<hr>

## A few distinctions worth keeping {#distinctions}

The numbers in this series answer different questions, and I try to keep each one attached to its own job.

<div class="n-grid three">
<div class="n-card" markdown="1">
<p class="n-card-title">Response and population</p>
Capacitance tells me how charge responds to potential. Several structures can give the same trend, so it cannot tell me how often each structure occurs.
</div>
<div class="n-card" markdown="1">
<p class="n-card-title">Intermediate and barrier</p>
An uphill intermediate carries an energy cost. A transition state sets a barrier. An energy profile built only from intermediates does not give a dissolution rate.
</div>
<div class="n-card" markdown="1">
<p class="n-card-title">A step and a cycle</p>
An easy hydrogen-transfer step matters only if the donor forms, reaches the substrate, survives side reactions, and regenerates. A low barrier alone does not predict yield.
</div>
</div>

These distinctions came out of putting the thesis together, not out of a wish to hedge every sentence. Each one points at a specific missing piece: measure populations, find the missing transition state, track the mobile metal, account for the water reservoir.

The through-line is simple enough to keep in mind as the chemistry gets busier. Before I credit a material with some activity, I want to know who its neighbors are under reaction conditions. [Part 1]({{ '/notes/capacitance-before-reduction/' | relative_url }}) starts with water, two solutes, and a capacitance trend that refused to follow the obvious explanation.
