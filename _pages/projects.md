---
layout: default
title: Projects - Lukas Minutello
permalink: /projects/
---

<h1>Projects</h1>

<div class="card-grid">
{% assign projects = site.projects | where_exp: "p", "p.hidden != true" | where_exp: "p", "p.category != 'other'" | sort: "order" %}
{% for project in projects %}{% include project-card.html project=project %}{% endfor %}
</div>

<section class="projects-section">
<div class="section-label">Other projects</div>
<div class="card-grid">
{% assign side = site.projects | where_exp: "p", "p.hidden != true" | where: "category", "other" | sort: "order" %}
{% for project in side %}{% include project-card.html project=project %}{% endfor %}
</div>
</section>
