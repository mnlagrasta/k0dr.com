---
---

# All Completed Projects

<div class="text_block">These projects are considered to have reached a stable state. Many of these will receive updates based on use, but are ready to exhibited, forked, etc.</div>
<br>

{% for page in site.pages %}
{% if page.status contains 'complete' %}
{% include project_card.html %}
{% endif%}
{% endfor %}
