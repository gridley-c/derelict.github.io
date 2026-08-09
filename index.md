---
layout: minimalist
title: Derelicte
---

<div class="gallery">
{% for item in site.data.gallery %}
    <div class="gallery-item{% if item.featured %} wide{% endif %}" data-caption="{{ item.caption }}" data-category="{{ item.category }}" data-url="https://gp-derelict.s3.amazonaws.com/{{ item.filename }}" data-alt="{{ item.alt }}">
        <img src="https://gp-derelict.s3.amazonaws.com/{{ item.filename }}" alt="{{ item.alt }}" loading="lazy">
    </div>
{% endfor %}
</div>

<aside class="sidebar">
    <article class="card">
        <h3>ABOUT</h3>
        <p>Photography that reveals the hidden angles of reality — the cyclopean, the cosmic, and the quiet beauty of familiar places left to time.</p>
    </article>
</aside>

<aside class="sidebar">
    <article class="card">
        <h3>COLLECTIONS</h3>
        <ul>
{% assign categories = site.data.gallery | map: 'category' | compact | uniq | sort %}
{% for category in categories %}
{% assign count = site.data.gallery | where: 'category', category | size %}
            <li><span>{{ category }}</span> <span class="count">{{ count }}</span></li>
{% endfor %}
        </ul>
    </article>
</aside>

<blockquote class="quote">
    The photograph is a rusted cage, where light is trapped and left to wither in the cold.
</blockquote>

<div id="lightbox" class="lightbox" aria-hidden="true">
    <button class="lightbox-close" aria-label="Close">&times;</button>
    <img id="lightbox-img" src="" alt="">
    <div class="lightbox-meta">
        <h3 id="lightbox-caption"></h3>
        <p id="lightbox-alt"></p>
        <span id="lightbox-category" class="category-pill"></span>
    </div>
</div>
