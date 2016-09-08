---
layout: default
---


<div class="project_list">
    <h1>Featured Projects:</h1>

    <div class="project_card"><a href="#">
        <h2>Desklights2</h2>
        <div class="project_thumb"><img src="./media/desklights2_thumb.jpg" alt="Desklights2" width="100%"></div>
        <div class="project_blurb">This is a small blurb of text about the product. Blah blah foo foo blah foo yay.</div>
    </a></div>

    <div class="project_card">
        <div class="project_card_header"><h2>Desklights</h2></div>
        <div class="project_thumb"><img src="./media/desklights_thumb.jpg" alt="Desklights1" width="100%"></div>
        <div class="project_blurb">This is a small blurb of text about the product. Blah blah foo foo blah foo yay.</div>
    </div>

    <div class="project_card">
        <div class="project_card_header"><h2>Desklights</h2></div>
        <div class="project_thumb"><img src="./media/desklights_thumb.jpg" alt="Desklights1" width="100%"></div>
        <div class="project_blurb">This is a small blurb of text about the product. Blah blah foo foo blah foo yay.</div>
    </div>

    <div class="project_card">
        <div class="project_card_header"><h2>Desklights</h2></div>
        <div class="project_thumb"><img src="./media/desklights_thumb.jpg" alt="Desklights1" width="100%"></div>
        <div class="project_blurb">This is a small blurb of text about the product. Blah blah foo foo blah foo yay.</div>
    </div>

</div>

# Posts
    {% for post in site.posts %}
        {{ post.date | date: "%b %-d, %Y" }}

          {{ post.url | prepend: site.baseurl }} {{ post.title | escape }}
    {% endfor %}

{% for page in site.pages %}
  {{ page.url }}
{% endfor %}
