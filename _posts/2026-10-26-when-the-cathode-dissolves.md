---
layout: note
title: "When the cathode dissolves"
description: "Part 2, Dissolution: amines help Cu exchange metallic neighbors for nitrogen ligands, so negative polarization reduces metal loss without always eliminating it"
date: 2026-10-26 11:00:00-0700
tags: [electrochemistry, copper, dissolution, coordination]
series: ucla-thesis
part: 2
---

<div class="n-callout warm"><div markdown="1">
The short version. Letting the cell sit for 18 minutes while it cooled dropped the later amine yield to 3.9 ± 0.2%. Holding a protective cathodic potential during cooling gave 30 ± 2%, and skipping the wait gave 51 ± 2%. Copper loss is part of the reason: about 84 ppm Cu ended up in solution without protection and 19 ppm with it, and about 13 ppm was still there after 30 minutes at −0.75 V versus RHE. My calculations trace how an amine walks a Cu atom out of a kink site. Pb was also present in these cells, so not every point of yield can be blamed on Cu.
</div></div>

<nav class="n-toc" markdown="1">
**In this post**
1. [The cell changed while it cooled](#cooling)
2. [Negative potential helps, up to a point](#potential)
3. [Start with a Cu atom at a kink](#kink)
4. [Add partners, loosen the metal](#partners)
5. [The vacancy stays on the receipt](#vacancy)
6. [A stable product still needs an accessible path](#access)
7. [From losing metal to moving hydrogen](#next)
</nav>

<div class="n-stats"><div class="n-stat"><b>3.9 ± 0.2%</b><span>amine yield after unprotected cooling</span></div><div class="n-stat"><b>84 ppm → 19 ppm</b><span>Cu after cooling, without and with protection, approximately</span></div><div class="n-stat"><b>13 ppm</b><span>Cu at −0.75 V versus RHE, approximately</span></div></div>

## The cell changed while it cooled {#cooling}

The experiment was supposed to start once the cell had cooled. The chemistry did not wait. After an 18-minute cooling period, the amine yield from the following electrolysis was only 3.9 ± 0.2%. Holding a protective cathodic potential during the same 18 minutes brought it up to 30 ± 2%. Skipping the cooling step altogether gave 51 ± 2%.

That is a big effect for a step that would normally disappear into one line of the experimental section. I wanted to know what the reaction mixture was doing to the electrode while everyone waited for the temperature to settle.

The cell for this reductive amination used a Cu cathode and a Pb anode separated by a Nafion N-324 membrane. The catholyte contained 2.4 M acetone and 2.9 M methylamine added to 0.5 M KH₂PO₄. The phosphate solution started at pH 8.3, but the final mixture measured pH 12.9 at 10 °C. The electrode sees the final mixture; the label on the buffer bottle does not get the last word.

<figure class="nf nf-wide"><img width="720" height="260" src="{{ '/assets/img/notes/icons-thesis/cooling-history.svg' | relative_url }}" alt="Three cells: unprotected cooling with many Cu ions and 3.9% yield, cooling under cathodic hold with few Cu ions and 30% yield, and no cooling with 51% yield" loading="lazy"><figcaption>The preparation interval changes the chemical history of the cell. The reported yields belong to the later electrolysis, not to product made during cooling.</figcaption></figure>

After cooling, the solution held about 84 ppm Cu without protection and 19 ppm with it. That is direct evidence that metal was leaving the electrode during preparation. Cathodic protection helped, but it did not bring the loss to zero.

This follows on from [Part 1]({{ '/notes/capacitance-before-reduction/' | relative_url }}). There, methylamine changed the water around Cu. Here the same nitrogen changes who Cu itself is bonded to, and the result is no longer just an electrical response: part of the electrode ends up in solution.

<hr>

## Negative potential helps, up to a point {#potential}

A cathode is the reducing electrode, so dissolution sounds backwards at first. Making a dissolved Cu cation costs energy, and that cost grows as the potential becomes more negative. But that is only one side of the balance. Ligands can stabilize the dissolved metal enough to pay back a good part of the cost.

Potential-controlled experiments sharpened the question. After 30 minutes in the acetone–methylamine mixture, dissolved Cu fell as the applied potential moved from +0.25 toward −1.25 V versus RHE. Even so, about 13 ppm Cu remained at −0.75 V. The smallest loss came at −1.25 V.

So cathodic protection works here only conditionally. A negative potential works against forming the cationic products, while the chemical environment pushes the other way. To explain stability, I have to specify both the potential and the ligands around Cu.

### The yield has another passenger

The cooling experiments also had a Pb anode and a membrane that had already been exposed to Pb. Later work showed that trace Pb can strongly promote this amination, which matters for reading the yield changes at the top of this post.

The dissolved-Cu measurements stand on their own as evidence of Cu loss. The yield, though, can depend on both the changing Cu surface and the amount of a mobile promoter in the cell. Pinning every percentage point on Cu dissolution would need Pb controlled at the same time. So I treat the cooling result as motivation, and as evidence that the cell remembers its history, rather than as a gauge of how much Cu dissolved.

It is also a reminder that the cell boundary matters. Anode, membrane, solution and cathode can trade chemically important material. Labelling each electrode does not keep their chemistry in separate rooms.

<hr>

## Start with a Cu atom at a kink {#kink}

For the calculations, I compared a stepped and kinked Cu(843) surface with a flat Cu(111) terrace. A kink atom has six metallic neighbors; a terrace atom has nine. That gives a ligand a very different starting point for pulling an atom out.

I used ammonia first as a compact model ligand, then methylamine and ethylamine to see what alkyl groups change. Ammonia keeps the geometry simple; it does not mean the real reactant behaves identically in sterics or electronics.

The amine binds about 0.5 eV more strongly at the kink than on the terrace, with the exact difference depending on potential. Its nitrogen lone pair makes a specific bond to Cu, and more negative polarization weakens that donor bond over the modeled range. From the first step, the surface and the ligand are both responding to the same electrode potential.

<figure class="nf nf-wide"><img width="720" height="260" src="{{ '/assets/img/notes/icons-thesis/kink-extraction.svg' | relative_url }}" alt="Three stages on a stepped Cu surface: ammonia binds the kink atom, the atom moves to an adatom site with its ammonia, and with four ammine ligands it lifts off the surface" loading="lazy"><figcaption>Coordination starts changing while Cu still belongs to the surface. The ligand does not wait for a bare ion to escape.</figcaption></figure>

Without an amine, moving a kink atom out onto the neighboring terrace as an adatom costs about 1 eV over the potentials studied. With one ammonia attached, it costs about 0.1–0.3 eV. The ligand props the atom up as it loses metallic neighbors.

That is the first useful piece of the mechanism. A ligand can lower the cost of making the surface precursor that later dissolves. Complexation in solution and extraction from the solid are two ends of one connected pathway.

The move also opens up new geometries. An adatom is more exposed than the kink atom it came from, leaving room for more nitrogen donors. And pulling an atom from the step edge exposes another kink-like site, so the motif can repeat rather than using up one special atom.

<hr>

## Add partners, loosen the metal {#partners}

A second and third ammonia stabilize the extracted Cu atom further. A four-ligand structure can also form on the surface, although the remaining surface contacts constrain its shape. Once it detaches, the complex has room to adopt a solution-like geometry.

Bond analysis gives a useful electronic view. As Cu picks up nitrogen partners, its summed bonding to the surface goes down. For the four-ligand complex derived from the kink, the Cu–Cu −ICOHP contribution falls by about a factor of two relative to the low-ligand reference.

<div class="n-callout"><img width="240" height="200" src="{{ '/assets/img/notes/icons-thesis/bond-tug.svg' | relative_url }}" alt="" loading="lazy"><div markdown="1">
Cu–N bonds grow as the metallic bonds weaken. ICOHP describes that redistribution of bonding well, but it is not a bond-dissociation energy and not a computed detachment barrier.
</div></div>

I considered several dissolved coordination numbers and oxidation states. Among them, the linear two-ligand Cu(II) complex was the most stable, with three-ligand Cu(I) and four-ligand Cu(II) species competitive over parts of the potential range. These are candidate thermodynamic endpoints, not a measurement of which species dominates in the real solution.

The thresholds come out at about −1.1 V for the two-ammonia Cu(II) product, −0.9 V for the three-ammonia Cu(I) product and −0.8 V for the four-ammonia Cu(II) product, relative to the compared surface state at the modeled pH. On the positive side of each threshold, dissolution becomes favorable.

Those values explain why a negative potential can reduce dissolution without stopping it across the whole experimental window. They depend on the ligand chemical potential, product activity, pH and surface references used, and changing any of these shifts the balance.

<details class="n-details" markdown="1">
<summary>Deep dive: the 0.51 and 0.21 eV comparison</summary>
For an illustrative four-ligand sequence at −0.7 V, the most uphill surface intermediate sits about 0.51 eV above the reference used in that profile. Letting the fourth ligand come in during detachment lowers that to about 0.21 eV. The order of coordination and detachment matters. Neither number is a computed transition-state barrier, so the comparison does not give a rate ratio.
</details>

<hr>

## The vacancy stays on the receipt {#vacancy}

The terrace teaches a bookkeeping lesson. Taking an atom out of a perfect Cu(111) surface leaves a vacancy. If that vacancy stays in the model, the extraction sequence is strongly uphill, by roughly 1.5 eV for the relevant surface state.

If instead the vacancy is filled from a bulk Cu reservoir, the cost drops a lot. The two calculations describe different atom balances: the bulk reservoir has supplied something valuable, and the model has to say so.

<div class="n-callout warm"><img width="240" height="200" src="{{ '/assets/img/notes/icons-thesis/terrace-vacancy.svg' | relative_url }}" alt="" loading="lazy"><div markdown="1">
A vacancy-compensated terrace calculation isolates the cost of the missing atom. It does not show that an atom can actually move into that vacancy on the experimental time scale.
</div></div>

The compensated terrace pathway resembles the kink sequence, but the flatter surroundings leave less room for several amine ligands, so the four-ligand surface precursor is less comfortable there. Its dissolved endpoint can still come close to the kink-derived threshold once the removed atom is referenced to bulk Cu.

On a real electrode, steps, edges and defects can supply atoms, and moving atoms between those sites has its own kinetics. The kink pathway is the clearest local picture of extraction; the compensated terrace is a useful thermodynamic limit. Keeping both makes the role of surface shape easier to see.

<hr>

## A stable product still needs an accessible path {#access}

Comparing ligands keeps the story from getting too tidy. Methylamine and ethylamine stabilize the dissolved complexes more strongly than ammonia, as their donor strength would suggest. Yet the first ligand-capped adatom costs more to make with the bulkier amines.

Experiments at −0.25 V found less dissolved Cu with the substituted amines than with ammonia. That fits a picture in which reaching the surface precursor is harder, even though the final dissolved complex is more stable.

This is why I keep endpoint stability and accessibility apart. A molecule can be a great partner for dissolved Cu and still struggle to get into the right geometry on a crowded metal surface. Steric and interfacial constraints bite before the system ever gets to enjoy the favorable endpoint.

The intermediate profiles support this qualitatively. They do not include every transition state needed to predict dissolution rates or long-term metal loss. That gap is a well-defined next problem: how fast can the ligands and the Cu atom move through this route under matched operating conditions?

<hr>

## From losing metal to moving hydrogen {#next}

What comes out of this is a chemically specific route for Cu loss under cathodic conditions. Amines bind low-coordinated Cu, make its displacement cheaper, and help swap metallic neighbors for ligands. The electrode potential works against some of that chemistry, but cannot be read independently of it.

The step from Part 1 is small at the molecular level and large in the lab. First methylamine rearranged the water around Cu. Now it rearranges who binds Cu. The interface can change its composition during preparation as well as during electrolysis.

A mobile metal species is not always a sign of a failing electrode, though. In [Part 3]({{ '/notes/borrowed-hydrogen-and-a-bare-cation/' | relative_url }}), trace Pb offers a possible way of carrying hydrogen between Ag and an imine. Whether that helps depends on whether the species reacts productively and comes back. The question shifts from keeping every atom in place to knowing where it goes and whether it returns.

<div class="n-card" markdown="1">
<p class="n-card-title">Where this was published</p>
[Origin of copper dissolution under electrocatalytic reduction conditions involving amines](https://doi.org/10.1039/d4sc01944j), Chemical Science 15, 14485–14496 (2024). This post follows thesis Chapter 4. I did the calculations and wrote the first draft of the manuscript; the measurements are reported in the same paper. The Pb caveat connects to the [2024 impurity study](https://doi.org/10.1002/anie.202411532) discussed in Part 3.
</div>
