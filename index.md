---
---

<div class="clear"></div>

<!--
<h1>Most Recent Post:</h1>
<div class="text_block">
<h2>{{ site.posts.first.title }}</h2>
<p>{{ site.posts.first.content }}</p>
</div>
-->

<div class="project_list">
    <h1>Featured Projects:</h1>
{% for page in site.pages %}
  {% if page.status contains 'featured' %}
    {% include project_Card.html %}
  {% endif %}
{% endfor %}

<div class="clear"></div>

<h1>Completed Projects</h1>
{% for page in site.pages %}
  {% if page.status contains 'complete' %}
    {% include project_Card.html %}
  {% endif %}
{% endfor %}

<div class="clear"></div>

<h1>Active Projects</h1>
{% for page in site.pages %}
  {% if page.status contains 'active' %}
    {% include project_Card.html %}
  {% endif %}
{% endfor %}

<div class="clear"></div>

<h1>Potential Projects</h1>
{% for page in site.pages %}
  {% if page.status contains 'potential' %}
    {% include project_Card.html %}
  {% endif %}
{% endfor %}

</div>
