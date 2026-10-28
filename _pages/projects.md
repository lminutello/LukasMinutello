---
layout: default
title: Projects - Lukas Minutello
permalink: /projects/
---

<h1>Projects</h1>

<div class="card-grid">
{% assign projects = site.projects | where_exp: "p", "p.hidden != true" | where_exp: "p", "p.category != 'side'" | sort: "order" %}
{% for project in projects %}{% include project-card.html project=project %}{% endfor %}
</div>

<section class="projects-section">
<div class="section-label">Side projects</div>
<div class="card-grid">
{% assign side = site.projects | where_exp: "p", "p.hidden != true" | where: "category", "side" | sort: "order" %}
{% for project in side %}{% include project-card.html project=project %}{% endfor %}
</div>
</section>
