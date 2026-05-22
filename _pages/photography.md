---
layout: page
permalink: /photography/
title: Photography
description: Moments from hikes, road trips, and travels.
nav: true
nav_order: 6
---

<style>
.photo-grid {
  columns: 3;
  column-gap: 1rem;
}
.photo-grid .photo-item {
  break-inside: avoid;
  margin-bottom: 1rem;
}
.photo-grid .photo-item img {
  width: 100%;
  display: block;
  border-radius: 6px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.photo-grid .photo-item img:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 20px rgba(0,0,0,0.15);
}
.photo-caption {
  font-size: 0.8rem;
  color: #888;
  margin-top: 0.3rem;
  text-align: center;
}
@media (max-width: 768px) {
  .photo-grid { columns: 2; }
}
@media (max-width: 480px) {
  .photo-grid { columns: 1; }
}
.coming-soon-placeholder {
  text-align: center;
  padding: 4rem 2rem;
  color: #aaa;
  font-style: italic;
}
</style>

{% if site.data.photos.photos.size > 0 and site.data.photos.photos[0].image != "placeholder.jpg" %}

<div class="photo-grid">
  {% for photo in site.data.photos.photos %}
  <div class="photo-item">
    <img src="{{ photo.image | prepend: '/assets/img/photography/' | relative_url }}"
         alt="{{ photo.caption | default: '' }}"
         loading="lazy">
    {% if photo.caption or photo.location %}
    <p class="photo-caption">
      {% if photo.caption %}{{ photo.caption }}{% endif %}
      {% if photo.location %}&nbsp;·&nbsp;{{ photo.location }}{% endif %}
    </p>
    {% endif %}
  </div>
  {% endfor %}
</div>

{% else %}

<div class="coming-soon-placeholder">
  <p>Photos coming soon.</p>
  <p>To add photos: place images in <code>assets/img/photography/</code> and list them in <code>_data/photos.yml</code>.</p>
</div>

{% endif %}
