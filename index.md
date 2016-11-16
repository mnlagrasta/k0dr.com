---
---

<div class="logo"><a href="/"><img src="/media/k0dr_logo_white.png" alt="K0DR Open Source Workshop" id="logo"></a></div>
<div class="about">
    K0DR.com is a place to share and document my personal projects. These projects involve a variety of materials and techniques, but always embrace the principles of open source.
    <br><br>
    - Michael La Grasta
</div>
<div class="clear"></div>


<h1>Most Recent Post:</h1>
<div class="text_block">
<h2>{{ site.posts.first.title }}</h2>
<p>{{ site.posts.first.content }}</p>
</div>

<div class="project_list">
    <h1>Featured Projects:</h1>

{% for page in site.pages %}
  {% if page.status contains 'featured' %}
        <div class="project_card"><a href="{{ page.url | prepend: site.baseurl }}">
            <div class="project_thumb"><img src="{{ page.url | prepend: site.baseurl }}/index.jpg" alt="{{ page.title }}" width="100%" /></div>
            <div class="project_abstract">{{ page.title }} : {{ page.abstract }}</div>
        </a></div>
  {% endif %}
{% endfor %}

</div>
