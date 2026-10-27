---
layout: note
title: "Capacitance before reduction"
description: "Part 1, Capacitance: acetone and methylamine change Cu double-layer capacitance in opposite directions, and the surrounding water explains why molecular polarizability is not enough"
date: 2026-10-26 10:00:00-0700
tags: [electrochemistry, capacitance, copper, solvation]
series: ucla-thesis
part: 1
---

<p class="n-lede">Acetone raises Cu double-layer capacitance; methylamine lowers it. Both are individually more polarizable than water, so I modeled the water around them as well. The frozen-geometry water references give about 7.4 µF cm⁻² with one explicit layer and about 4.2 µF cm⁻² for the three-layer snapshot average, compared with about 13.35 µF cm⁻² for continuum solvent alone. The solutes change how that whole assembly responds, before the study reaches the more cathodic conditions used for organic reduction.</p>

<nav class="n-toc" markdown="1">
**In this post**
1. [Two solutes, opposite signs](#opposite-signs)
2. [First, give Cu some water](#water)
3. [Acetone changes the neighborhood](#acetone)
4. [Methylamine rearranges it](#methylamine)
5. [A response is not a head count](#response)
6. [Before reduction, the interface has changed](#before-reduction)
</nav>

<div class="n-stats"><div class="n-stat"><b>7.4 µF cm⁻²</b><span>one-layer water reference, approximately</span></div><div class="n-stat"><b>4.2 µF cm⁻²</b><span>three-layer frozen-snapshot average, approximately</span></div><div class="n-stat"><b>−0.32 V</b><span>measured minimum versus RHE, approximately</span></div></div>

## Two solutes, opposite signs {#opposite-signs}

The first puzzle was a sign problem. Add acetone to the electrolyte around Cu and the measured capacitance goes up. Add methylamine and it goes down. If I treated either solute as an isolated, more polarizable replacement for water, I would have expected the same direction. The experiment was already telling me that the neighbors mattered.

This is the quiet beginning of the [series]({{ '/notes/coordination-at-electrochemical-interfaces/' | relative_url }}). Acetone and methylamine are reactants in reductive amination: they can form an imine, which is then reduced to an amine. Before asking how that reduction works, I wanted to understand what the individual reactants do to the reaction environment.

<figure class="nf nf-wide"><img width="720" height="260" src="{{ '/assets/img/notes/icons-thesis/two-solutes.svg' | relative_url }}" alt="Acetone and methylamine beside a Cu water interface, with opposite directions of capacitance change" loading="lazy"><figcaption>Two more-polarizable solutes, opposite experimental trends. The isolated molecule cannot be the whole explanation.</figcaption></figure>

The experimental collaborators measured impedance on polished Cu in 0.01 M NaClO₄, adjusted to pH 12 with KOH. The potential window was −0.227 to −0.527 V versus the reversible hydrogen electrode, or RHE. The capacitance minimum lay near −0.32 V versus RHE. These conditions give a useful starting point near zero charge, before a large faradaic reaction dominates the measurement.

Capacitance describes how much additional charge an interface accommodates when the potential changes. At a molecular interface, the answer depends on more than how squishy one electron cloud is. Molecule positions, water orientations, packing, and the distance over which charge is screened all enter. My task was to find chemically plausible structures that explain the opposite signs.

<hr>

## First, give Cu some water {#water}

I started with water on Cu(111), completed by a dielectric continuum representing the surroundings. Explicit water lets me distinguish molecules pointing hydrogen toward the surface, H-down, from those pointing oxygen toward it, O-down. These are orientation classes. The molecules have not acquired permanent job titles.

<figure class="nf nf-wide"><img width="720" height="260" src="{{ '/assets/img/notes/icons-thesis/water-layers.svg' | relative_url }}" alt="Bar chart of calculated capacitance for one to four explicit water layers on Cu: about 7.4, 5.2, 4.1 and 3.5 µF/cm², under a dashed continuum-only line at 13.35" loading="lazy"><figcaption>Explicit water resolves local contacts; the continuum supplies the surrounding solvent response.</figcaption></figure>

The sampled one-layer structures give approximately 7.3–7.5 µF cm⁻², with an average near 7.4 µF cm⁻². The three-layer frozen-snapshot average is approximately 4.2 µF cm⁻². The continuum-only reference gives approximately 13.35 µF cm⁻². Adding water molecules explicitly actually lowers the calculated capacitance.

That sounds odd if more water is supposed to mean more bulk-like screening. The crucial detail is what the calculation allows to move. Molecular dynamics lets water explore local configurations. I then evaluate charging with the nuclei frozen in each sampled geometry. The electrons respond, but the water molecules cannot rotate and reorganize under every charging perturbation. A high-dielectric continuum includes a response those fixed nuclei cannot provide.

### Thickness matters, and the model notices

The supporting layer series gives approximately 7.4, 5.2, 4.1, and 3.5 µF cm⁻² for one through four explicit layers, respectively, read from the supporting plot. The three-layer value in that series and the snapshot average above come from their respective comparisons; I keep their labels attached rather than treating them as one identical number.

The continued change from three to four layers is a useful warning. This is sensitivity to the construction of the explicit region, not proof that the model has converged to a unique bulk-electrolyte capacitance. More explicit layers mean a thicker region whose frozen molecular arrangement screens differently from the continuum.

<figure class="nf nf-wide"><img width="720" height="220" src="{{ '/assets/img/notes/icons-thesis/layered-capacitor.svg' | relative_url }}" alt="Conceptual capacitor made of regions with different screening strengths" loading="lazy"><figcaption>A weakly screening region can strongly affect the overall capacitance. This is an analogy for the trend, not a fitted model of sharply bounded molecular layers.</figcaption></figure>

The familiar capacitors-in-series picture helps: the reciprocal capacitance accumulates contributions from thickness divided by screening strength. A thin, weakly screening region can have a large influence. Real molecular layers have no obligation to come with neat boundaries or a uniform dielectric constant, so I use the picture to explain direction rather than assign each water layer a measured permittivity.

<hr>

## Acetone changes the neighborhood {#acetone}

With the water reference in place, I replaced one layer in the three-layer model with acetone, placing it close to Cu, in the middle, or near the outer boundary. This tests how position changes the response while keeping the overall modeling approach consistent.

All tested arrangements increase capacitance relative to the three-layer water reference. Acetone nearest Cu gives the largest increase, followed by the intermediate placement. That makes chemical sense: a change close to the stored electrode charge has a particularly direct influence on screening.

Acetone brings a polar carbonyl group and two methyl groups. Its reported isolated-molecule polarizability is near 7.9 Å³, compared with a value of order 1 Å³ for water. But the carbonyl contact and the space occupied by the methyl groups also change the neighboring water. I cannot add molecular polarizabilities like prices on a grocery receipt and expect the interfacial total.

One-layer mixtures provide an independent check on the direction. Acetone can approach through a roughly vertical carbonyl contact or lie more parallel to Cu, leaving different room for water. The tested arrangements still give greater capacitance and polarizability than their water-only reference. Agreement in sign across these different constructions is more persuasive than the exact magnitude from one chosen structure.

The sizes of the changes are instructive. A representative three-layer arrangement gives an approximately 21% capacitance increase but an approximately 200% polarizability increase. A representative one-layer arrangement gives approximately 11% and 16%, respectively. The quantities move in the same direction without following a universal proportionality. They describe different responses under different boundary conditions.

I also checked what the trajectories were actually doing. Acetone stayed in its initially assigned region during the sampled motion. The bottom, middle, and top models therefore describe different local arrangements; their existence does not establish how frequently each occurs in the experiment. The model explains what an arrangement would do if present.

<hr>

## Methylamine rearranges it {#methylamine}

Methylamine is the more revealing test because it defeats the isolated-molecule argument. It is individually more polarizable than water, yet the experimental capacitance falls as its concentration increases near the minimum.

Its nitrogen has several options. The lone pair can coordinate Cu or accept a hydrogen bond; N–H groups can donate hydrogen bonds. Local proton transfer can form a methylammonium–hydroxide pair. These possibilities let methylamine change the surrounding water network in ways that differ from the tested acetone arrangements.

In the three-layer models, every tested methylamine configuration lowers calculated capacitance and polarizability relative to the water reference. The strongest decreases occur close to Cu. One-layer calculations retain the same direction, whether the molecule is directly N-bound to Cu or held near the surface by its water environment.

<div class="n-callout"><img width="240" height="200" src="{{ '/assets/img/notes/icons-thesis/water-orientation.svg' | relative_url }}" alt="" loading="lazy"><div markdown="1">
The water-orientation analysis supplies a structural clue. Acetone trajectories retain broadly balanced H-down and O-down populations. Methylamine produces a more persistent H-down bias, particularly in the unbound middle and bottom arrangements. The surrounding water is participating in the solute effect.
</div></div>

Some methylamine configurations also develop local ion pairs. That is chemically relevant, but I would not appoint one ion pair as the sole cause of the entire response. Proton transfer, orientation, packing, and Cu–water contacts change together. Directly Cu-bound methylamine also has its lone pair occupied differently from an unbound molecule. The shared decrease across these cases is more robust than a unique microscopic explanation.

The distinction between organizing and responding matters here. Nuclear rearrangement selects the local electronic environment. The later frozen-geometry calculation measures the electronic response of that environment. It does not directly measure slow water rotation under an applied field. The molecules have arranged the room before I test how its electrons respond.

<hr>

## A response is not a head count {#response}

A capacitance measurement can tell me the interface has changed without telling me exactly which structure it became. Several arrangements can produce the same sign. To infer their populations, I would need adequate sampling, consistent chemical potentials, and the free energies of exchanging molecules between environments.

The trajectory diagnostics help keep this straight. Bounded energy fluctuations support local sampling. Layer-averaged molecular heights show that the assigned regions remain recognizable. Neither demonstrates that every relevant solvent-exchange barrier has been crossed. A middle layer with overlapping height fluctuations is not, by itself, evidence that all molecules exchange layers freely.

<details class="n-details" markdown="1">
<summary>Deep dive: what the experimental capacitance includes</summary>
The impedance response was fitted with a resistance and a constant phase element, rather than an ideal capacitor. Effective capacitance was obtained from the fitted resistance and characteristic semicircle frequency and normalized by geometric area. That quantity depends on the equivalent circuit and real-electrode heterogeneity. I compare experiment and frozen-configuration calculations first through their trends, without assuming their absolute values are identical observables.
</details>

The same restraint applies to formation energies. Optimizing a structure taken from a final snapshot characterizes an endpoint; it does not turn it into a trajectory-averaged free energy. More negative total formation energy after adding water also partly reflects having more molecules. Neither observation supplies the equilibrium water-layer population.

<div class="n-callout warm"><img width="240" height="200" src="{{ '/assets/img/notes/icons-thesis/part-capacitance.svg' | relative_url }}" alt="" loading="lazy"><div markdown="1">
The direction of the solute effect survives the tested model choices. The exact microscopic population and full frequency-dependent response remain open. That is enough to support a collective interfacial explanation, while leaving a useful next task for sampling and experiment.
</div></div>

<hr>

## Before reduction, the interface has changed {#before-reduction}

What I take from this comparison is that reactants start doing chemistry before their intended reduction step. Acetone and methylamine reorganize contacts around Cu, and that changes the electrical response. The electrolyte is already helping define the interface on which the later reaction takes place.

It would be tempting to carry the capacitance trend straight into a prediction of amine yield. The thesis does not support that jump. Organic reduction uses more cathodic potentials and different reaction mixtures. A changed charging response does not establish a changed imine-hydrogenation barrier, and higher capacitance is not automatically better catalysis.

Methylamine does, however, leave a useful lead. Its nitrogen can interact with water and with Cu. In [Part 2]({{ '/notes/when-the-cathode-dissolves/' | relative_url }}), I follow that same coordination chemistry into a less comfortable question: what happens when the amine helps a Cu atom leave?

<div class="n-card" markdown="1">
<p class="n-card-title">Where this was published</p>
[Probing the Electric Double-Layer Capacitance to Understand the Reaction Environment in Conditions of Electrochemical Amination of Acetone](https://doi.org/10.1021/acsami.4c14134), ACS Applied Materials & Interfaces 17, 4087–4097 (2025). This post follows thesis Chapter 3. I performed the calculations and computational analysis; experimental collaborators supplied the measurements.
</div>
