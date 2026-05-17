---
layout: minimalist
title: Derelicte
---

<section class="featured">
    <h2>FEATURED EXHIBITION</h2>
    <p>Curated selections from the derelict and the sublime. Each photograph tells a story of time, neglect, and quiet beauty.</p>
</section>

<div class="gallery">
{% for item in site.data.gallery %}
    <div class="gallery-item" data-caption="{{ item.caption }}" data-category="{{ item.category }}">
        <img src="https://gp-derelict.s3.amazonaws.com/{{ item.filename }}" alt="{{ item.alt }}">
    </div>
{% endfor %}
</div>

<aside class="sidebar">
    <article class="card">
        <h3>ABOUT</h3>
        <p>Derelicte Photography captures the haunting beauty of abandoned spaces. Our lens finds poetry in decay, grace in ruin.</p>
    </article>
</aside>

<aside class="sidebar">
    <article class="card">
        <h3>COLLECTIONS</h3>
        <ul>
            <li>Industrial Decay</li>
            <li>Forgotten Homes</li>
            <li>Abandoned Nature</li>
            <li>Objects of Time</li>
            <li>Urban Relics</li>
        </ul>
    </article>
</aside>

<blockquote class="quote">
    Photography takes an instant out of time, altering life by holding it still.
</blockquote>
