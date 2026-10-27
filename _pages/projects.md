---
layout: default
title: Projects - Lukas Minutello
permalink: /projects/
---

<h1>Projects</h1>
<p class="prose" style="color:#5C645E;">Design, analysis, and build work from Cornell Baja Racing, coursework, and research.</p>

<div class="card-grid">
{% assign projects = site.projects | where_exp: "p", "p.hidden != true" | sort: "order" %}
{% for project in projects %}{% include project-card.html project=project %}{% endfor %}
</div>
