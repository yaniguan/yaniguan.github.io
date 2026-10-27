---
layout: note
title: "When the cathode dissolves"
description: "Part 2, Dissolution: amines help Cu exchange metallic neighbors for nitrogen ligands, so negative polarization reduces metal loss without always eliminating it"
date: 2026-10-26 11:00:00-0700
tags: [electrochemistry, copper, dissolution, coordination]
series: ucla-thesis
part: 2
---

<p class="n-lede">An 18-minute cooling interval left the subsequent amine yield at 3.9 ± 0.2%; protective cathodic polarization during cooling raised it to 30 ± 2%, and skipping cooling gave 51 ± 2%. Cu loss helped explain the problem: about 84 ppm Cu appeared after unprotected cooling versus 19 ppm with protection, and about 13 ppm remained after polarization at −0.75 V versus RHE. My calculations trace a ligand-assisted route out of the metal, while Pb exposure means the yield changes cannot all be assigned to Cu alone.</p>

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

The experiment was supposed to begin after the cell cooled. The chemistry had already started. After an 18-minute cooling period, the subsequent amine yield was only 3.9 ± 0.2%. Holding a protective cathodic potential during that interval improved it to 30 ± 2%. Leaving out the cooling interval gave 51 ± 2%.

That is a large consequence for a step that could otherwise disappear into the experimental setup paragraph. I wanted to understand what the reaction mixture was doing to the electrode while everyone waited for the temperature to settle.

The experimental collaborators were studying reductive amination with a Cu cathode and Pb anode separated by a Nafion N-324 membrane. The catholyte contained 2.4 M acetone and 2.9 M methylamine added to 0.5 M KH₂PO₄ solution. The initial phosphate solution had pH 8.3, but the final mixture had pH 12.9 at 10 °C. The final mixture is what the electrode experiences. The starting buffer does not get the last word.

<figure class="nf nf-wide"><img width="720" height="260" src="{{ '/assets/img/notes/icons-thesis/cooling-history.svg' | relative_url }}" alt="Comparison of unprotected cooling, cathodically protected cooling, and immediate electrolysis" loading="lazy"><figcaption>The preparation interval changes the chemical history of the cell. The reported yields belong to the later electrolysis, not to product made during cooling.</figcaption></figure>

Cu concentrations after cooling were approximately 84 ppm without protection and 19 ppm with protection. That gives direct evidence that metal was leaving the electrode during preparation. Cathodic protection helped, but it did not reduce the measured loss to zero.

This follows naturally from [Part 1]({{ '/notes/capacitance-before-reduction/' | relative_url }}). Methylamine had already shown that it could change the Cu–water environment. Here the same nitrogen functionality can change the coordination of Cu itself. The consequence reaches beyond an electrical response: some of the electrode ends up in solution.

<hr>

## Negative potential helps, up to a point {#potential}

A cathode is a reducing electrode, so dissolution can initially sound backwards. Generating a cationic dissolved product carries an electrochemical cost that becomes less favorable as the potential becomes more negative. But that is only part of the free-energy balance. Ligands can stabilize the dissolved metal enough to offset a substantial part of that cost.

Potential-controlled experiments made the question more precise. After 30 minutes in the acetone–methylamine mixture, dissolved Cu decreased as the applied potential moved from +0.25 toward −1.25 V versus RHE. Approximately 13 ppm Cu nevertheless remained at −0.75 V. The smallest measured loss occurred at −1.25 V.

Those observations fit a conditional form of cathodic protection. Negative polarization opposes the formation of the compared cationic products, while the chemical environment supplies another driving force. To explain stability, I have to specify the potential and the ligands around Cu.

### The yield has another passenger

The cooling experiments also involved a Pb anode and a membrane previously exposed to Pb. Later work established that trace Pb can strongly promote amination. That matters when interpreting the striking yield changes at the start of this post.

The dissolved-Cu measurements establish Cu loss independently. Yield can depend both on the changing Cu surface and on the inventory of a mobile promoter. Assigning every percentage point of the yield difference to Cu dissolution would require simultaneous control of Pb. I keep the cooling result as motivation and evidence of cell-history sensitivity, rather than using yield as a direct meter for how much Cu dissolved.

This is also why the cell boundary matters. The anode, membrane, solution, and cathode can exchange chemically important material. A label on each electrode does not keep their chemistry in separate rooms.

<hr>

## Start with a Cu atom at a kink {#kink}

For the calculations, I compared a stepped and kinked Cu(843) surface with a close-packed Cu(111) terrace. A kink atom has six metallic neighbors; a surface atom on the terrace has nine. That difference gives the ligand a different starting point for extracting an atom.

I used ammonia first as a compact model ligand, then methylamine and ethylamine to examine alkyl substitution. Ammonia simplifies the geometry without implying that the actual reactant has identical steric or electronic behavior.

Amine adsorption is stronger at the kink than at the terrace by approximately 0.5 eV, with a potential-dependent difference. Its nitrogen lone pair makes a specific contact with Cu. More negative polarization weakens this donor interaction over the modeled range. The surface state and the ligand therefore respond to the same electrode potential from the beginning of the pathway.

<figure class="nf nf-wide"><img width="720" height="260" src="{{ '/assets/img/notes/icons-thesis/kink-extraction.svg' | relative_url }}" alt="An amine binds a kink Cu atom and accompanies its displacement to an adatom position" loading="lazy"><figcaption>Coordination starts changing while Cu still belongs to the surface. The ligand does not wait for a bare ion to escape.</figcaption></figure>

Without an amine, moving a kink atom onto the adjacent terrace as an adatom costs approximately 1 eV in the investigated potential range. With one ammonia attached, the cost falls to approximately 0.1–0.3 eV. The ligand stabilizes the atom as it loses metallic neighbors.

That is the first useful piece of the mechanism. A ligand can change the cost of making the surface precursor that later dissolves. Complexation in solution and extraction from the solid belong to one connected pathway.

The displacement also changes which geometries are accessible. An adatom is more exposed than the original kink atom, leaving room for additional nitrogen donors. Extraction at the edge exposes another kink-like site, allowing the local motif to recur rather than using up a single special atom once.

<hr>

## Add partners, loosen the metal {#partners}

A second and third ammonia can further stabilize the extracted Cu atom. A four-ligand surface structure is possible too, although the remaining surface contacts constrain its geometry. Detachment gives the complex more room to adopt a solution-like arrangement.

Bond analysis supplies a useful electronic view. As Cu acquires more nitrogen partners, the summed bonding contribution between that Cu atom and the surface decreases. For the four-ligand kink-derived complex, the reported Cu–Cu −ICOHP contribution falls by approximately a factor of two relative to the low-ligand reference.

<div class="n-callout"><img width="240" height="200" src="{{ '/assets/img/notes/icons-thesis/bond-tug.svg' | relative_url }}" alt="" loading="lazy"><div markdown="1">
Cu–N contacts grow as the metallic contacts weaken. ICOHP helps describe that redistribution of bonding, but it is not a bond-dissociation energy or an independently calculated detachment barrier.
</div></div>

I considered several dissolved coordination numbers and oxidation states. Within the selected products, the linear two-ligand Cu(II) complex was most stable; three-ligand Cu(I) and four-ligand Cu(II) species were also competitive over portions of the potential range. These are candidate thermodynamic endpoints, not a measurement of which species dominates the experimental solution.

The approximate thresholds were −1.1 V for the two-ammonia Cu(II) product, −0.9 V for the three-ammonia Cu(I) product, and −0.8 V for the four-ammonia Cu(II) product, relative to the compared surface state at the modeled pH. Dissolution becomes more favorable on the more positive side of each threshold.

These values explain why negative potential can reduce dissolution without eliminating it throughout the experimental window. They are specific to the ligand chemical potential, product activity, pH, and surface references used. Changing those conditions changes the balance.

<details class="n-details" markdown="1">
<summary>Deep dive: the 0.51 and 0.21 eV comparison</summary>
For an illustrative four-ligand sequence at −0.7 V, the most uphill surface intermediate requires approximately 0.51 eV relative to the energetic reference used in that profile. Letting the fourth ligand approach during detachment gives an intermediate-state requirement of approximately 0.21 eV. The order of coordination and detachment matters. Neither number is a calculated transition-state activation barrier, so the comparison does not determine a numerical rate ratio.
</details>

<hr>

## The vacancy stays on the receipt {#vacancy}

The terrace offers a useful bookkeeping lesson. Removing an atom from a perfect Cu(111) surface leaves a vacancy. Keeping that vacancy in the model makes the extraction sequence strongly unfavorable, with a cost of order 1.5 eV for the relevant surface state.

If I instead supply the vacancy from a bulk Cu reservoir, the cost becomes much lower. Those calculations describe different atom balances. The bulk reservoir has supplied something valuable, and the model has to say so.

<div class="n-callout warm"><img width="240" height="200" src="{{ '/assets/img/notes/icons-thesis/terrace-vacancy.svg' | relative_url }}" alt="" loading="lazy"><div markdown="1">
A vacancy-compensated terrace calculation isolates the cost of the missing atom. It does not establish that an atom can migrate into that vacancy immediately on the experimental time scale.
</div></div>

The compensated terrace pathway resembles the kink sequence, but the flatter surroundings leave less room for several amine ligands. The four-ligand surface precursor is less comfortable there. Its dissolved endpoint can still approach the kink-derived threshold when the net removed atom is referenced to bulk Cu.

On a real electrode, steps, edges, and defects may supply atoms, and transport between those sites brings its own kinetic requirements. The kink pathway is the clearest local extraction picture. The compensated terrace model is useful as a limiting thermodynamic comparison. Keeping both makes the role of morphology easier to see.

<hr>

## A stable product still needs an accessible path {#access}

The ligand substitution comparison prevents an overly tidy ending. Methylamine and ethylamine stabilize the compared dissolved complexes more strongly than ammonia does, consistent with their donor character. Yet making the initial ligand-capped adatom costs more with substitution.

Experiments at −0.25 V found less dissolved Cu with the substituted amines than with ammonia. That direction is consistent with constrained access to the surface precursor, even though the final dissolved complexes are stabilized more strongly.

This is why I separate endpoint stability from accessibility. A molecule can be a good partner for dissolved Cu and still have difficulty reaching the right geometry on a crowded metal surface. Steric and interfacial constraints enter before the system gets to enjoy the favorable endpoint.

The intermediate profiles support that explanation qualitatively. They do not contain all the transition states needed to predict dissolution rates or long-term metal loss. The missing kinetics are a specific next problem: how quickly can the ligands and Cu atom move through the proposed route under matched operating conditions?

<hr>

## From losing metal to moving hydrogen {#next}

The outcome here is a chemically specific route for Cu loss under cathodic conditions. Amines bind low-coordinate Cu, stabilize its displacement, and help replace metallic neighbors with ligand coordination. The electrode potential opposes some of that chemistry, but cannot be interpreted independently of it.

The progression from Part 1 is small at the molecular level and large at the experimental level. First methylamine rearranged water around Cu. Now it rearranges who binds Cu. The relevant interface can change its composition during preparation as well as during electrolysis.

A mobile metal-containing species need not always mean a failed electrode. In [Part 3]({{ '/notes/borrowed-hydrogen-and-a-bare-cation/' | relative_url }}), trace Pb offers a candidate route for carrying hydrogen between Ag and an imine. Its usefulness depends on whether the species can react productively and regenerate. The question shifts from keeping every atom still to understanding where it goes and whether it comes back.

<div class="n-card" markdown="1">
<p class="n-card-title">Where this was published</p>
[Origin of copper dissolution under electrocatalytic reduction conditions involving amines](https://doi.org/10.1039/d4sc01944j), Chemical Science 15, 14485–14496 (2024). This post follows thesis Chapter 4. I performed the calculations and drafted the manuscript; experimental collaborators performed the measurements. The Pb qualification connects to the [2024 impurity study](https://doi.org/10.1002/anie.202411532) discussed in Part 3.
</div>
