---
layout: minimalist
title: Derelicte
---



<div class="gallery">
{% for item in site.data.gallery %}
{% assign classes = "gallery-item" %}
{% if forloop.index == 1 %}{% assign classes = classes | append: " wide" %}
{% elsif forloop.index == 3 %}{% assign classes = classes | append: " tall" %}
{% elsif forloop.index == 5 %}{% assign classes = classes | append: " wide" %}
{% elsif forloop.index == 7 %}{% assign classes = classes | append: " tall" %}{% endif %}
    <div class="{{ classes }}" data-caption="{{ item.caption }}" data-category="{{ item.category }}">
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
    The photograph is a rusted cage, where light is trapped and left to wither in the cold.
</blockquote>
