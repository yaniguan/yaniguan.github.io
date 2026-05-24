---
layout: page
permalink: /publications/
title: Publications
description:
nav: true
nav_order: 2
---

<style>
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
.research-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-bottom: 2rem;
}
.rtag {
  font-size: 0.78rem;
  padding: 0.3em 0.85em;
  border-radius: 4px;
  font-weight: 500;
  background: rgba(70,130,180,0.08);
  color: var(--global-theme-color, #4682B4);
  border: 1px solid rgba(70,130,180,0.25);
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

<div class="research-tags">
  <span class="rtag">Computational Electrochemistry</span>
  <span class="rtag">Electrochemical Amination</span>
  <span class="rtag">Electrocatalysis</span>
  <span class="rtag">Machine Learning for Chemistry</span>
  <span class="rtag">Agentic AI for Science</span>
  <span class="rtag">Energy Storage Materials</span>
</div>

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>
