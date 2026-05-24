---
layout: page
permalink: /publications/
title: Publications
description:
nav: true
nav_order: 2
---

<style>
.pub-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1.25rem 1.5rem;
  border-radius: 10px;
  border: 1px solid var(--global-divider-color, #e8e8e8);
  background: var(--global-bg-color, #fff);
}
.pub-stat-item {
  text-align: center;
}
.pub-stat-num {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--global-theme-color, #6C63FF);
  line-height: 1;
}
.pub-stat-label {
  font-size: 0.72rem;
  color: var(--global-text-color-light, #999);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 0.2rem;
}
.pub-stat-divider {
  width: 1px;
  height: 2rem;
  background: var(--global-divider-color, #e8e8e8);
}
.topic-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}
.topic-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35em 0.9em;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1.5px solid;
  line-height: 1.4;
}
.chip-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
}
.chip-count {
  font-size: 0.7rem;
  opacity: 0.7;
  font-weight: 400;
}
/* color palette per topic */
.chip-electrochemistry {
  color: #6C63FF;
  border-color: #6C63FF;
  background: rgba(108,99,255,0.06);
}
.chip-electrochemistry .chip-dot { background: #6C63FF; }

.chip-electrocatalysis {
  color: #20a779;
  border-color: #20a779;
  background: rgba(32,167,121,0.06);
}
.chip-electrocatalysis .chip-dot { background: #20a779; }

.chip-energy {
  color: #e07b00;
  border-color: #e07b00;
  background: rgba(224,123,0,0.06);
}
.chip-energy .chip-dot { background: #e07b00; }

.chip-ml {
  color: #d1406a;
  border-color: #d1406a;
  background: rgba(209,64,106,0.06);
}
.chip-ml .chip-dot { background: #d1406a; }

.scholar-link {
  font-size: 0.82rem;
  color: var(--global-theme-color, #6C63FF);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  margin-left: auto;
}
.scholar-link:hover { text-decoration: underline; }
</style>

<div class="pub-stats">
  <div class="pub-stat-item">
    <div class="pub-stat-num">12</div>
    <div class="pub-stat-label">Journal Articles</div>
  </div>
  <div class="pub-stat-divider"></div>
  <div class="pub-stat-item">
    <div class="pub-stat-num">2019</div>
    <div class="pub-stat-label">First Publication</div>
  </div>
  <div class="pub-stat-divider"></div>
  <div class="pub-stat-item">
    <div class="pub-stat-num">2025</div>
    <div class="pub-stat-label">Most Recent</div>
  </div>
  <a href="https://scholar.google.com/citations?user=eb_DB84AAAAJ&hl=en" target="_blank" class="scholar-link">
    <i class="ai ai-google-scholar"></i> Google Scholar
  </a>
</div>

<div class="topic-chips">
  <span class="topic-chip chip-electrochemistry">
    <span class="chip-dot"></span>
    Electrochemical Amination &amp; Interface
    <span class="chip-count">5 papers</span>
  </span>
  <span class="topic-chip chip-electrocatalysis">
    <span class="chip-dot"></span>
    Electrocatalysis &amp; Energy Conversion
    <span class="chip-count">4 papers</span>
  </span>
  <span class="topic-chip chip-energy">
    <span class="chip-dot"></span>
    Energy Storage Materials
    <span class="chip-count">3 papers</span>
  </span>
  <span class="topic-chip chip-ml">
    <span class="chip-dot"></span>
    ML for Heterogeneous Catalysis
    <span class="chip-count">1 paper</span>
  </span>
</div>

<!-- _pages/publications.md -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>
