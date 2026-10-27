---
layout: note
title: "Borrowed hydrogen and a nearly bare cation"
description: "Part 3, Reactivity: Pb + Cs in CO2RR: hydride shuttles offer a route to amination, while partial Cs desolvation strengthens contact with activated CO2 in a separate Ag system"
date: 2026-10-26 12:00:00-0700
tags: [electrochemistry, hydrides, silver, co2-reduction, coordination]
series: ucla-thesis
part: 3
---

<div class="n-callout warm"><div markdown="1">
The short version. About 1 ppm Pb takes reductive amination on Ag from almost no amine to yields above 60%. In my calculations, the preferred imine-hydrogenation barriers are 0.39 eV for PbH₄ in solution and about 0.47 eV for PbH₂ on Ag, compared with more than about 0.9 eV for the direct Ag routes I examined. Bi offers a similar round trip. In a separate CO₂-reduction study, going from five waters around Cs⁺ to one shortens its contact with a CO₂ oxygen from about 3.51 to 2.83 Å. Both stories come down to coordination changing hands. Whether the donor regenerates, and how many cations actually lose their water, are still open.
</div></div>

<nav class="n-toc" markdown="1">
**In this post**
1. [A tiny impurity with a large effect](#impurity)
2. [Build a hydrogen donor](#donor)
3. [A shuttle has to make the return trip](#shuttle)
4. [Try another p-block passenger](#bismuth)
5. [Give Cs a little less water](#cesium)
6. [Partial covalent means looking at the electrons](#bonding)
7. [A productive configuration needs a whole setting](#setting)
</nav>

<div class="n-stats"><div class="n-stat"><b>~1 ppm Pb</b><span>strong experimental promotion of Ag amination</span></div><div class="n-stat"><b>0.39 / 0.47 eV</b><span>preferred solution / surface Pb-assisted barriers</span></div><div class="n-stat"><b>3.51 → 2.83 Å</b><span>Cs–O contact, five- to one-water models, approximately</span></div></div>

## A tiny impurity with a large effect {#impurity}

In a Pb-free cell, Ag was a poor amination catalyst. Add about 1 ppm Pb and the amine yield went above 60%. That is a lot of influence from something that would normally be filed under impurities.

[Part 2]({{ '/notes/when-the-cathode-dissolves/' | relative_url }}) showed coordination pulling metal into solution. Here I follow a friendlier consequence of a mobile metal: a species that carries hydrogen to the substrate. The reaction is still acetone reductive amination. The CO₂ system comes later, as a separate example of coordination creating reactivity.

The control experiments made it clear that "Ag cathode" was not the full description. A fresh membrane in an Ag–Pb cell gave about 29% amine; reusing it with a Pb anode raised that to about 64% by the fourth use. Elemental analysis found ppm amounts of Pb in the cathode compartment. Reusing membranes in a Pb-free cell with a Pt anode did not reproduce the activation, and adding Pb on purpose brought the high yields back.

The protocols matter too. The galvanostatic series gave about 63% at 1 ppm Pb, and the potentiostatic comparison at −2.94 V versus RHE gave about 61%; I keep them as separate comparisons. Rinsing an active Ag electrode and moving it into Pb-free electrolyte dropped the yield from 61% to 1.1%. That argues against a lasting activation that survives the transfer, while leaving room for a short-lived surface species under bias.

<hr>

## Build a hydrogen donor {#donor}

I compared several possible hydrogen sources: H on Ag, water-mediated proton-coupled electron transfer, a Pb hydride on the surface, and a molecular Pb hydride in the nearby solution.

At −2 V versus RHE, the thermodynamics favor a high H coverage on Ag(111), so my starting model carries 16 surface H atoms in a (4 × 4) cell. That sets the environment for the pathways; it does not pin down the H distribution on a real polycrystalline electrode.

Moving the first H from Ag to Pb has a calculated barrier of 0.68 eV. The next step, to PbH₂, is about 0.51 eV, or about 0.48 eV when surface H is replenished. Forming the early hydrides directly from water costs more than 1 eV in the structures I examined. The early hydrides prefer to point H toward Ag, which makes supply from the metal side geometrically convenient.

Once PbH₂ forms, further H can be added from the surface or from water with barriers below about 0.5 eV. PbH₂ stays firmly attached to Ag in the structures tested, whereas PbH₄ has an unfavorable adsorption free energy at −2 V and can go into solution. Changing the hydrogen count changes where the species can do chemistry.

For PbH₄ in solution, the preferred N-first hydrogenation of the imine has an effective barrier of 0.39 eV, with a first step of 0.22 eV. Surface PbH₂ gives about 0.47 eV for its preferred N-first sequence. The direct Ag routes I examined are above about 0.9 eV at −2 V. The strong result is that Pb opens a lower-barrier route. The 0.08 eV gap between the two Pb routes is too small to say which one dominates at steady state.

<hr>

## A shuttle has to make the return trip {#shuttle}

The solution-phase proposal is a PbH₄/PbH₂ shuttle. Ag charges Pb with hydrogen, PbH₄ leaves and hands two H atoms to the imine, and PbH₂ goes back to Ag to be recharged. Surface-bound PbH₂ offers an alternative in which the hydrogen transfer stays at Ag.

<figure class="nf nf-wide"><img width="720" height="300" src="{{ '/assets/img/notes/icons-thesis/pb-shuttle.svg' | relative_url }}" alt="Cycle above an Ag surface: PbH2 on Ag picks up hydrogen to become PbH4, PbH4 gives two H to an imine with a 0.39 eV barrier, and PbH2 returns to Ag" loading="lazy"><figcaption>A candidate cycle across surface and solution. The arrows identify proposed steps, not measured molecular fluxes.</figcaption></figure>

A good transfer barrier only gets the proposal partway home. Pb hydrides can also react with water and release H₂, with side-reaction barriers of about 0.5–0.8 eV. Even with a lower imine barrier, the competition depends on encounter rates and activities: water is everywhere, while the local imine supply depends on condensation and transport.

Flow-cell measurements coupled to ICP-MS support the idea of a mobile Pb inventory, but they do not directly detect PbH₄ in the working aqueous cell. Likewise, amine yields that barely change across the −1.34 to −3.34 V window fit a chemical step in solution once enough donor is generated, but they do not prove that step is rate-determining.

<div class="n-callout warm"><img width="240" height="200" src="{{ '/assets/img/notes/icons-thesis/part-reactivity.svg' | relative_url }}" alt="" loading="lazy"><div markdown="1">
A hydride shuttle has to form, survive, find the substrate, and come back. My calculations make Pb-mediated hydrogen transfer plausible and lower in barrier than the Ag routes I examined. They leave open how the work is split between the surface and solution cycles.
</div></div>

<hr>

## Try another p-block passenger {#bismuth}

<figure class="nf nf-wide"><img width="720" height="260" src="{{ '/assets/img/notes/icons-thesis/hydride-ladder.svg' | relative_url }}" alt="Periodic-table tiles for the nine hydrides compared, As and Se in period 4, In, Sn, Sb and Te in period 5, Tl, Pb and Bi in period 6 with Pb and Bi highlighted, beside a bar chart of amine yield at 1 ppm: Pb 60.8%, Tl 54.3%, Bi 36.9%, Bi at 6 ppm 59.7%, lighter elements about 1 to 3%" loading="lazy"><figcaption>The same hydrogen-transfer question asked of the neighbours on the p-block. Pb is the reference; Bi is the one that looks like it can make the round trip.</figcaption></figure>

A follow-up study asked whether the mechanism could help choose a different mediator. Several p-block additives were screened experimentally, and I calculated hydrogen transfer for AsH₃, H₂Se, InH₃, SnH₄, SbH₃, H₂Te, TlH₃, PbH₄ and BiH₃.

These are molecular models, not a census of what exists in water. The sixth-period TlH₃, PbH₄ and BiH₃ give favorable product-forming energy landscapes in the comparison, while the lighter candidates have less favorable intermediates or products. That holds for this substrate and this family of models; it is not a periodic-table rule.

For BiH₃, the barrier is 0.29 eV for N-first hydrogenation and 0.56 eV for C-first. Handing over two H atoms leaves BiH. In the proposed return route, BiH goes back to Ag, picks up hydrogen through surface chemistry to become BiH₃ again, and is released. It parallels the Pb picture without assuming that transport, adsorption or hydrolysis are the same.

At 1 ppm additive, amine yields were about 54.3% for Tl and 36.9% for Bi, against about 60.8% for the matched Pb reference; the lighter elements tested gave about 1–3%. Raising Bi to 6 ppm brought the yield to about 59.7%, with no further gain at 7 ppm. Similar yields at different loadings do not mean similar turnover frequencies.

<details class="n-details" markdown="1">
<summary>Deep dive: why transfer energetics cannot rank the full mediators</summary>
A transition state has to be referenced to the intermediate before it, especially if that intermediate sits well below the starting reactants. A full comparison also needs donor formation and regeneration. In the Bi concentration series, yield rises while turnover number per added Bi falls, and carbon balances are roughly 70–75%. None of these measurements gives the fraction of Bi present as active BiH₃. At 6 ppm Bi and 25 °C, Pt and Ni gave yields below 10%, a reminder that the electrode still matters for making the proposed molecular donor.
</details>

<hr>

## Give Cs a little less water {#cesium}

The CO₂ study starts from a different problem. At a ligand-confined Ag interface, how does a shortage of water change what Cs⁺ can do for a CO₂-derived adsorbate? My part was the electronic-structure and interface modeling.

The catalyst is a nanoparticle-ordered ligand interlayer, or NOLI. Conditioning Ag nanoparticles capped with tetradecylphosphonic acid detaches ligands, which then stay close to the aggregated particles. The space between them holds water and ions but is not bulk electrolyte. The question is whether losing part of its hydration lets Cs⁺ make a closer, chemically specific contact with an oxygen of CO₂.

I compared seven constructed states, from a remote six-water Cs⁺ to progressively less hydrated configurations near Ag(111). With the remote reference, CO₂ stays nearly linear at 179.9°, with an average Cs–O distance of about 4.56 Å. Just bringing the six-water environment closer bends CO₂ to about 171.0°.

<figure class="nf nf-wide"><img width="720" height="260" src="{{ '/assets/img/notes/icons-thesis/cs-desolvation.svg' | relative_url }}" alt="Cs+ with five, three and one coordinating waters above bent CO2 on Ag; the Cs to O contact shortens from 3.51 to 2.83 Å and ICOHP goes from −0.11 to −0.20 eV" loading="lazy"><figcaption>The hydration series compares optimized configurations. It is not a movie of a Cs ion shedding water.</figcaption></figure>

Across the five- to one-water models near the surface, the Cs–O distance falls from about 3.51 to 2.83 Å, and the CO₂–Ag distance from about 2.82 to 2.19 Å. The Cs–O ICOHP values go from about −0.11 through −0.14, −0.18 and −0.19 to −0.20 eV. Within this family of models, less water goes with a closer approach and more net bonding.

The "nearly bare" cation in the title is still damp: even the least hydrated state keeps one explicit water. Partial desolvation is the mechanism being tested.

<hr>

## Partial covalent means looking at the electrons {#bonding}

A shorter distance alone does not tell me what kind of bond it is. I looked at orbital overlap, charge-density differences, electron localization, Bader charges and crystal orbital Hamilton populations. Together they support a partial covalent contribution on top of a substantial electrostatic interaction.

<div class="n-callout"><img width="240" height="200" src="{{ '/assets/img/notes/icons-thesis/ionic-covalent.svg' | relative_url }}" alt="" loading="lazy"><div markdown="1">
Cs⁺ is still an alkali-metal cation. Partial covalent character means the Cs–O contact has a chemically specific electronic component. It does not assign an integer bond order or take away the ionic character.
</div></div>

Reference crystals help calibrate the diagnostics. CsI, CsHCO₃ and Cs₂CO₃ put the same element in different anion environments. For selected short contacts, the average ICOHP is about −0.170 eV in Cs₂CO₃ and −0.177 eV in CsHCO₃. A more negative cumulative value over a larger contact network does not mean each individual bond is stronger; contact count, unit-cell choice and distance cutoff all feed into that sum.

The hydration comparison needs a different kind of bookkeeping. CO₂ adsorption referenced to each prepared hydration state measures affinity given that state. To predict populations, I would also have to pay for preparing each water count from a common reservoir, including the chemical potential of water. Strong adsorption in the one-water model does not mean one-water Cs⁺ is common.

Spectroscopy constrains the picture as well. The published assignment is a partially reduced, activated CO₂-derived intermediate; its notation does not require exactly one electron to sit on it. Its vibrational signal appears before sustained CO production. The Cs M-edge series was collected after returning to open circuit, because the faradaic current swamped detection under bias, so it probes an interface relaxing after polarization. Stabilization, population under bias and turnover remain separate questions.

<hr>

## A productive configuration needs a whole setting {#setting}

Pb and Bi offer candidate mobile hydrogen donors. Cs⁺ offers a closer adsorbate contact while staying at a confined Ag interface. In both cases, a change in partners opens a chemically different possibility, and whether it pays off depends on the rest of the setting.

That closes the loop from water response, to Cu loss, to reactivity. In every part, I needed to know which configurations can be reached, whether their key species stay available, and how the cycle restores them. Keeping those three in view is what ties a molecular explanation back to the measured experiment.

<div class="n-card" markdown="1">
<p class="n-card-title">Where this was published</p>
This post follows thesis Chapters 5 and 6. The [Pb impurity experiments](https://doi.org/10.1002/anie.202411532) appeared in Angewandte Chemie International Edition (2024); the [Pb mechanism calculations](https://doi.org/10.1039/d6cy00189k) in Catalysis Science & Technology 16, 4090–4102 (2026); and the [p-block screen and Bi study](https://doi.org/10.1002/anie.202521065) in Angewandte Chemie International Edition (2026). I did the Pb reaction-path and p-block hydrogen-transfer calculations. The [desolvated-cation study](https://doi.org/10.1038/s41929-026-01604-w) appeared in Nature Catalysis 9, 1009–1022 (2026); my contribution there was computational.
</div>
