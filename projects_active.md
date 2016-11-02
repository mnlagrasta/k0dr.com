---
---

# All Active Projects

<div class="text_block">These projects are currently considered a work in progress.</div><br>

{% for page in site.pages %}
{% if page.status contains 'active' %}
{% include project_card.html %}
{% endif%}
{% endfor %}
