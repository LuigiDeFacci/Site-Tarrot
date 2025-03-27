---
layout: default
title: Artigos # Title for browser tab and potentially SEO
---

# Reflexões Místicas

<p>
    Explore nossa coleção de artigos sobre adivinhação, simbolismo, mitologia e crescimento pessoal através de práticas esotéricas.
</p>

<!-- This section will dynamically list your posts -->
<section class="post-list-container">
    <h2>Artigos Recentes</h2>
    {%- assign posts_exist = site.posts | size -%}
    {%- if posts_exist > 0 -%}
      <ul class="post-list">
        {%- for post in site.posts -%}
        <li>
          {%- assign date_format = site.minima.date_format | default: "%d/%m/%Y" -%} <!-- Date format -->
          <span class="post-meta">{{ post.date | date: date_format }}</span>
          <h3>
            <a class="post-link" href="{{ post.url | relative_url }}">
              {{ post.title | escape }} <!-- Post Title (linked) -->
            </a>
          </h3>
          {%- if site.show_excerpts -%} <!-- Optional: Show excerpt if enabled -->
            {{ post.excerpt }}
          {%- endif -%}
        </li>
        {%- endfor -%}
      </ul>
    {%- else -%}
      <p>Ainda não há artigos publicados. Volte em breve!</p>
    {%- endif -%}
</section>

<!-- Optional: Add pagination if needed later -->