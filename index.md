---
layout: minimalist
title: Derelicte
---



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
        <p>Photography that reveals the hidden angles of reality. Each image captures the cyclopean and the cosmic: ancient ruins of forgotten eons, non-Euclidean horizons, and the quiet beauty of familiar places.</p>
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
