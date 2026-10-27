---
layout: note
title: "Borrowed hydrogen and a nearly bare cation"
description: "Part 3, Reactivity: Pb + Cs in CO2RR: hydride shuttles offer a route to amination, while partial Cs desolvation strengthens contact with activated CO2 in a separate Ag system"
date: 2026-10-26 12:00:00-0700
tags: [electrochemistry, hydrides, silver, co2-reduction, coordination]
series: ucla-thesis
part: 3
---

<p class="n-lede">About 1 ppm Pb takes reductive amination on Ag from almost no amine to yields above 60%. My calculated preferred imine-hydrogenation barriers are 0.39 eV for PbH₄ in solution and about 0.47 eV for PbH₂ on Ag, versus above approximately 0.9 eV for the examined direct Ag routes. In a separate CO₂-reduction collaboration, reducing Cs hydration from five waters to one shortens its CO₂-oxygen contact from about 3.51 to 2.83 Å. Both stories turn on changing coordination, with donor regeneration and hydration-state populations still essential to the full explanation.</p>

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

Ag was a poor amination catalyst in a Pb-free cell. Add approximately 1 ppm Pb and amine yields exceeded 60%. That is a lot of catalytic influence from an ingredient that might otherwise be filed under impurities.

[Part 2]({{ '/notes/when-the-cathode-dissolves/' | relative_url }}) showed how coordination can move metal into solution. Here I follow another possible consequence of metal mobility: a species that carries hydrogen to the substrate. The reaction is still acetone reductive amination. The CO₂ system comes later, as a separate example of coordination creating reactivity.

The experimental controls made the nominal Ag composition an incomplete explanation. A fresh membrane in an Ag–Pb cell gave approximately 29% amine yield; repeated use with a Pb anode raised it to approximately 64% by the fourth use. Elemental analysis found ppm quantities of Pb in the cathode compartment. Repeated membrane use in a Pb-free cell with a Pt anode did not reproduce that activation, while deliberate Pb addition restored high yields.

The protocols also matter. The galvanostatic series gave approximately 63% at 1 ppm Pb; the potentiostatic comparison at −2.94 V versus RHE gave approximately 61%. I keep those as separate comparisons. Rinsing an active Ag electrode and transferring it into Pb-free electrolyte dropped the reported yield from 61% to 1.1%. That argues against persistent activation surviving the transfer, while leaving room for a short-lived surface species under bias.

<hr>

## Build a hydrogen donor {#donor}

I compared several possible hydrogen sources: H on Ag, water-mediated proton-coupled electron transfer, a surface Pb hydride, and a molecular Pb hydride in nearby solution.

At −2 V versus RHE, the calculated thermodynamics favor high H coverage on Ag(111). My starting model therefore carries 16 surface H atoms in a (4 × 4) cell. That specifies the environment in which the pathways are evaluated; it does not establish the exact H distribution on a real polycrystalline electrode.

Initial transfer from Ag to Pb has a calculated barrier of 0.68 eV. The next step to PbH₂ is approximately 0.51 eV, or approximately 0.48 eV with surface H replenishment. Direct water-mediated formation of the early hydrides has barriers above 1 eV in the examined structures. Early hydrides favor H pointing toward Ag, making the metal-side supply geometrically helpful.

Once PbH₂ forms, further addition through surface transfer or water-mediated steps can have barriers below approximately 0.5 eV. PbH₂ remains strongly associated with Ag in the tested structures, whereas PbH₄ has unfavorable adsorption free energy at −2 V and can enter solution. Changing the hydrogen count changes where the species can do chemistry.

For solution PbH₄, the preferred N-first imine hydrogenation has an effective barrier of 0.39 eV; its first step is 0.22 eV. Surface PbH₂ gives approximately 0.47 eV for the preferred N-first sequence. The examined direct Ag alternatives exceed approximately 0.9 eV at −2 V. The strongest comparison is the lower-barrier route opened by Pb. The 0.08 eV separation between the preferred Pb routes is too small to identify their dominant steady-state contribution.

<hr>

## A shuttle has to make the return trip {#shuttle}

The solution proposal is a PbH₄/PbH₂ shuttle. Ag generates the hydrogen-rich species, PbH₄ leaves and supplies two H atoms to the imine, and PbH₂ returns for regeneration. Surface-bound PbH₂ offers an alternative route in which hydrogen transfer stays at Ag.

<figure class="nf nf-wide"><img width="720" height="300" src="{{ '/assets/img/notes/icons-thesis/pb-shuttle.svg' | relative_url }}" alt="Proposed PbH4 departure from Ag, hydrogen transfer to imine, and PbH2 return for regeneration" loading="lazy"><figcaption>A candidate cycle across surface and solution. The arrows identify proposed steps, not measured molecular fluxes.</figcaption></figure>

A favorable transfer barrier only gets the proposal partway home. Pb hydrides can react with water and release H₂; the reported side-reaction barriers are approximately 0.5–0.8 eV. Even with a lower preferred imine barrier, competition depends on encounter rates and activities. Water is abundant, and local imine availability depends on condensation and transport.

Electrochemical flow-cell measurements coupled to ICP-MS support a mobile Pb inventory. They do not directly identify PbH₄ in the working aqueous cell. Likewise, the nearly potential-independent amine yields over the reported −1.34 to −3.34 V window are compatible with a chemical solution step once donor generation is sufficient, but do not prove it is rate determining.

<div class="n-callout warm"><img width="240" height="200" src="{{ '/assets/img/notes/icons-thesis/part-reactivity.svg' | relative_url }}" alt="" loading="lazy"><div markdown="1">
A hydride shuttle needs donor formation, survival, substrate encounter, and return. My calculations make Pb-mediated hydrogen transfer plausible and lower-barrier than the examined Ag routes. They leave the balance between surface and solution cycles open.
</div></div>

<hr>

## Try another p-block passenger {#bismuth}

<figure class="nf nf-wide"><img width="720" height="260" src="{{ '/assets/img/notes/icons-thesis/hydride-ladder.svg' | relative_url }}" alt="Tiles for the p-block hydrides compared in the screen, grouped as As and Se, In and Sb, Te and Tl, Sn, Pb and Bi, with Pb and Bi highlighted and a BiH3/BiH shuttle label under Bi" loading="lazy"><figcaption>The same hydrogen-transfer question asked of the neighbours on the p-block. Pb is the reference; Bi is the one that looks like it can make the round trip.</figcaption></figure>

The next collaboration asked whether the mechanism could help select a different mediator. Experimental collaborators screened p-block additives, and I calculated hydrogen transfer for AsH₃, H₂Se, InH₃, SnH₄, SbH₃, H₂Te, TlH₃, PbH₄, and BiH₃.

These are the molecular models, not a census of aqueous species. The sixth-period TlH₃, PbH₄, and BiH₃ candidates give favorable product-forming landscapes in the comparison; the lighter candidates have less favorable intermediates or products. That is a result for this substrate and model family, rather than a periodic-table rule.

For BiH₃, the article reports a lower barrier of 0.29 eV for N-first hydrogenation and 0.56 eV for C-first. Transfer of two H atoms leaves BiH. The proposed return route brings BiH to Ag, regenerates BiH₃ through surface chemistry, and releases the donor again. This parallels the Pb proposal without assuming identical transport, adsorption, or hydrolysis.

At 1 ppm additive, reported amine yields were approximately 54.3% for Tl and 36.9% for Bi, against approximately 60.8% for the matched Pb reference; lighter tested elements gave approximately 1–3%. Increasing Bi to 6 ppm raised yield to approximately 59.7%, with no further benefit at 7 ppm. Similar yields at different inventories do not imply identical turnover frequencies.

<details class="n-details" markdown="1">
<summary>Deep dive: why transfer energetics cannot rank the full mediators</summary>
A transition state must be referenced to its preceding intermediate, particularly if that intermediate lies well below the initial reactants. The comparison also needs donor formation and regeneration. In the Bi concentration series, yield rises while turnover number normalized to total added Bi falls, and reported carbon balances are roughly 70–75%. None of those measurements determines the fraction present as active BiH₃. At 6 ppm Bi and 25 °C, Pt and Ni gave yields below 10%, emphasizing that the electrode still matters for generating the proposed molecular donor.
</details>

<hr>

## Give Cs a little less water {#cesium}

The CO₂ collaboration starts from a different problem. At a ligand-confined Ag interface, how does water deficiency change what Cs⁺ can do for a CO₂-derived adsorbate? I contributed to the electronic-structure and interfacial calculations, alongside experimental synthesis, electrochemistry, and spectroscopy.

The catalyst is a nanoparticle-ordered ligand interlayer, or NOLI. Conditioning tetradecylphosphonic-acid-capped Ag nanoparticles detaches ligands that remain near aggregated particles. That environment contains water and ions, but differs from bulk electrolyte. The question is whether partial loss of hydration allows a closer, chemically specific Cs–O contact.

I compared seven constructed states, from remote six-water Cs to progressively less hydrated configurations near Ag(111). The remote reference leaves CO₂ nearly linear at 179.9°, with an average Cs–O separation of approximately 4.56 Å. Moving the six-water environment closer already bends CO₂ to approximately 171.0°.

<figure class="nf nf-wide"><img width="720" height="260" src="{{ '/assets/img/notes/icons-thesis/cs-desolvation.svg' | relative_url }}" alt="Cs loses part of its water coordination and approaches an oxygen of activated CO2 near Ag" loading="lazy"><figcaption>The hydration series compares optimized configurations. It is not a movie of a Cs ion shedding water.</figcaption></figure>

Across the five- to one-water near-surface models, Cs–O distance falls from approximately 3.51 to 2.83 Å, and CO₂–Ag distance from approximately 2.82 to 2.19 Å. The corresponding Cs–O ICOHP values are approximately −0.11, −0.14, −0.18, −0.19, and −0.20 eV. Less hydration accompanies closer approach and a larger net bonding contribution within this model family.

The title's nearly bare cation is still hydrated: even the least hydrated state retains one explicit water. Partial desolvation is the mechanism being tested.

<hr>

## Partial covalent means looking at the electrons {#bonding}

A shorter distance alone does not establish a bond type. I examined orbital overlap, differential charge density, electron localization, Bader charges, and crystal orbital Hamilton populations. Together, they support a partial covalent contribution alongside the substantial electrostatic interaction.

<div class="n-callout"><img width="240" height="200" src="{{ '/assets/img/notes/icons-thesis/ionic-covalent.svg' | relative_url }}" alt="" loading="lazy"><div markdown="1">
Cs⁺ remains an alkali-metal cation. Partial covalent character describes chemically specific electronic interaction in the Cs–O contact, without assigning an integer bond order or removing its ionic character.
</div></div>

Reference crystals help interpret the diagnostics. CsI, CsHCO₃, and Cs₂CO₃ contain the same element with different anion environments. For selected short contacts, average ICOHP is approximately −0.170 eV in Cs₂CO₃ and −0.177 eV in CsHCO₃. A more negative cumulative value in a larger contact network does not mean every individual bond is stronger. Contact count, unit-cell choice, and distance cutoff enter that sum.

The interfacial hydration comparison needs another kind of bookkeeping. CO₂ adsorption referenced to each prepared hydration state measures affinity conditional on that state. To predict populations, I must also pay the cost of preparing different water counts from a common reservoir, including water chemical potential. Favorable adsorption in the one-water model does not establish that one-water Cs is abundant.

Spectroscopy constrains the interpretation too. The published assignment is a partially reduced, activated CO₂-derived intermediate; its notation does not require a charge partition to place exactly one electron on it. Its vibrational signal precedes sustained CO production. The Cs M-edge series was collected after return to open circuit because faradaic current overwhelmed detection under bias, so it probes a relaxing post-polarization interface. Stabilization, population under bias, and turnover remain distinct questions.

<hr>

## A productive configuration needs a whole setting {#setting}

Pb and Bi offer candidate mobile hydrogen donors. Cs offers a closer adsorbate contact while remaining near a confined Ag interface. In both cases, changing partners creates a chemically different possibility; realizing it depends on the rest of the setting.

That closes the thread from water response to Cu loss to reactivity. I need to know which configurations can be reached, whether their essential species remain available, and how the cycle restores them. Those questions keep the useful molecular explanation connected to the measured experiment.

<div class="n-card" markdown="1">
<p class="n-card-title">Where this was published</p>
This post follows thesis Chapters 5 and 6. The [Pb impurity experiments](https://doi.org/10.1002/anie.202411532) appeared in Angewandte Chemie International Edition (2024); the [Pb mechanism calculations](https://doi.org/10.1039/d6cy00189k) in Catalysis Science & Technology 16, 4090–4102 (2026); and the [p-block screen and Bi study](https://doi.org/10.1002/anie.202521065) in Angewandte Chemie International Edition (2026). I performed the Pb reaction-path and p-block hydrogen-transfer calculations. The [desolvated-cation study](https://doi.org/10.1038/s41929-026-01604-w) appeared in Nature Catalysis 9, 1009–1022 (2026); my contribution there was computational.
</div>
