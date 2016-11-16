---
---

# All Active Projects

<div class="text_block">These projects are currently considered a work in progress.</div><br>


{% assign num_found = 0 %}
{% for page in site.pages %}
{% if page.status contains 'active' %}
{% include project_card.html %}
{% endif%}
{% endfor %}

