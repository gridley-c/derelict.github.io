---
layout: minimalist
title: Derelicte
---

<div class="gallery">
{% for item in site.data.gallery %}
    <div class="gallery-item" data-caption="{{ item.caption }}" data-url="https://gp-derelict.s3.amazonaws.com/{{ item.filename }}" data-alt="{{ item.alt }}">
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
        <h3>NOTE</h3>
        <p>Images are resized, titled, and published automatically from the gallery watcher.</p>
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
    </div>
</div>
