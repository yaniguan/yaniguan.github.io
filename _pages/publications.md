---
layout: page
permalink: /publications/
title: Publications
description:
nav: true
nav_order: 2
---

<style>
/* Hide topic labels on the full publications list */
.publications .col-sm-2.abbr abbr.badge,
.publications .col-sm-2.abbr .badge {
  display: none;
}
.pub-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  padding: 1.25rem 1.5rem;
  border-radius: 10px;
  border: 1px solid var(--global-divider-color, #e8e8e8);
  background: var(--global-bg-color, #fff);
  margin-bottom: 1.5rem;
}
.pub-stats {
  display: flex;
  gap: 2rem;
  align-items: center;
}
.pub-stat-item { text-align: center; }
.pub-stat-num {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--global-theme-color, #4682B4);
  line-height: 1;
}
.pub-stat-label {
  font-size: 0.7rem;
  color: var(--global-text-color-light, #999);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 0.2rem;
}
.pub-stat-divider {
  width: 1px;
  height: 2rem;
  background: var(--global-divider-color, #e8e8e8);
  flex-shrink: 0;
}
.scholar-link {
  font-size: 0.82rem;
  color: var(--global-theme-color, #4682B4);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  margin-left: auto;
}
.scholar-link:hover { text-decoration: underline; }
.research-groups {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-bottom: 2rem;
}
.rgroup {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem;
}
.rgroup-label {
  font-size: 0.68rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--global-text-color-light, #999);
  width: 7rem;
  flex-shrink: 0;
}
.rtag {
  font-size: 0.78rem;
  padding: 0.28em 0.8em;
  border-radius: 4px;
  font-weight: 500;
  line-height: 1.5;
}
.rtag-blue {
  background: rgba(70,130,180,0.09);
  color: #2e6da4;
  border: 1px solid rgba(70,130,180,0.28);
}
.rtag-green {
  background: rgba(32,160,100,0.09);
  color: #1a7a50;
  border: 1px solid rgba(32,160,100,0.28);
}
.rtag-orange {
  background: rgba(210,100,20,0.09);
  color: #b05a10;
  border: 1px solid rgba(210,100,20,0.28);
}
</style>

<div class="pub-header">
  <div class="pub-stats">
    <div class="pub-stat-item">
      <div class="pub-stat-num">380</div>
      <div class="pub-stat-label">Citations</div>
    </div>
    <div class="pub-stat-divider"></div>
    <div class="pub-stat-item">
      <div class="pub-stat-num">9</div>
      <div class="pub-stat-label">h-index</div>
    </div>
    <div class="pub-stat-divider"></div>
    <div class="pub-stat-item">
      <div class="pub-stat-num">8</div>
      <div class="pub-stat-label">i10-index</div>
    </div>
  </div>
  <a href="https://scholar.google.com/citations?user=eb_DB84AAAAJ&hl=en" target="_blank" class="scholar-link">
    <i class="ai ai-google-scholar"></i> Google Scholar
  </a>
</div>

<div class="research-groups">
  <div class="rgroup">
    <span class="rgroup-label">Electrochemistry</span>
    <span class="rtag rtag-blue">Water–Solid Interface</span>
    <span class="rtag rtag-blue">Electrode Degradation &amp; Aging</span>
    <span class="rtag rtag-blue">Reactivity &amp; Impurity Tuning</span>
    <span class="rtag rtag-blue">Bifunctional Electrocatalysts</span>
  </div>
  <div class="rgroup">
    <span class="rgroup-label">Machine Learning</span>
    <span class="rtag rtag-green">ML for Catalysis</span>
    <span class="rtag rtag-green">Deep Learning for Chemistry</span>
    <span class="rtag rtag-green">Agentic AI for Science</span>
  </div>
  <div class="rgroup">
    <span class="rgroup-label">Energy Storage</span>
    <span class="rtag rtag-orange">Li–S Batteries</span>
    <span class="rtag rtag-orange">Zinc–Air Batteries</span>
    <span class="rtag rtag-orange">Electrolyte Engineering</span>
  </div>
</div>

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>
