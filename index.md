---
layout: minimalist
title: Derelicte
---

<div class="gallery">
{% for item in site.data.gallery %}
    <div class="gallery-item" data-caption="{{ item.caption }}" data-url="https://gp-derelict.s3.amazonaws.com/{{ item.filename }}" data-alt="{{ item.alt }}"{% if item.camera %} data-camera="{{ item.camera }}"{% endif %}{% if item.lens %} data-lens="{{ item.lens }}"{% endif %}{% if item.settings %} data-settings="{{ item.settings }}"{% endif %}{% if item.keywords %} data-keywords="{{ item.keywords | join: ',' }}"{% endif %}>
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
        <h3>FILTER</h3>
        <p id="active-keyword" class="active-keyword">Showing all images</p>
        <ul id="keyword-list" class="keyword-list">
{% assign all_keywords = site.data.gallery | map: 'keywords' | compact | join: ',' | split: ',' %}
{% assign unique_keywords = all_keywords | uniq | sort %}
{% for keyword in unique_keywords %}
{% assign trimmed = keyword | strip %}
{% if trimmed != '' %}
{% assign count = 0 %}
{% for item in site.data.gallery %}
{% if item.keywords contains trimmed %}{% assign count = count | plus: 1 %}{% endif %}
{% endfor %}
            <li><button class="keyword-btn" data-keyword="{{ trimmed }}">{{ trimmed }} <span class="count">{{ count }}</span></button></li>
{% endif %}
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
        <p id="lightbox-exif" class="exif"></p>
        <div id="lightbox-keywords" class="keyword-cloud"></div>
    </div>
</div>
