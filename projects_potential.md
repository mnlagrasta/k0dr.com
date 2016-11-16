---
---

# All Potential Projects

<div class="text_block">These are projects that are currently under consideration. Although, if you are seeing it here, it is very likely I'll be working on it sometime in the future. I just can't promise any completion dates.</div><br>

{% for page in site.pages %}
{% if page.status contains 'potential' %}
{% include project_card.html %}
{% endif%}
{% endfor %}
