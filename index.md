---
layout: default
title: Lukas Minutello
---

<section class="hero">
  <img class="hero-photo" src="{{ "/assets/images/profile-pic.jpg" | relative_url }}" alt="Lukas Minutello">
  <div>
    <h1>Lukas Minutello</h1>
    <p class="tagline">[PLACEHOLDER] Mechanical engineer at Cornell. Structures, FEA, and getting parts made.</p>
    <div class="btn-row">
      <a class="btn-green" href="{{ "/resume/" | relative_url }}"><i class="bi bi-file-earmark-text"></i> Resume</a>
      <a class="btn-outline-green" href="mailto:{{ site.email }}"><i class="bi bi-envelope"></i> Email</a>
      <a class="btn-outline-green" href="https://www.linkedin.com/in/{{ site.linkedin }}"><i class="bi bi-linkedin"></i> LinkedIn</a>
    </div>
  </div>
</section>

<div class="prose" markdown="1">
<div class="section-label">About</div>

[PLACEHOLDER] I'm a master's student in Mechanical Engineering at Cornell, where I also did my B.S. with a Dyson Business Minor. Most of my hands-on work comes from Cornell Baja Racing, where I've designed suspension and brake components: front uprights, carbon fiber tie rods, and floating brake rotors, all taken from CAD and FEA through machining and testing.

[PLACEHOLDER] Outside of Baja I've interned at ASML, done robotics research at the Cornell Architectural Robotics Lab, and worked as a biomedical equipment technician at NYC Health + Hospitals.
</div>

<div class="section-label" style="margin-top: 3rem;">Projects</div>
<div class="card-grid">
{% assign featured = site.projects | where: "featured", true | sort: "order" %}
{% for project in featured %}{% include project-card.html project=project %}{% endfor %}
</div>

<p style="margin-top: 1.5rem;"><a href="{{ "/projects/" | relative_url }}">All projects <i class="bi bi-arrow-right"></i></a></p>
