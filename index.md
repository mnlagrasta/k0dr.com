---
title: K0DR.com
---

<div id="carousel">

{% for page in site.pages %}
  {% if page.status contains 'featured' %}
  <div class="wrapper">
  <div class="featured_project" id="fp_{{ page.title }}">
     <img src="{{ page.url | prepend: site.baseurl }}/index.jpg" alt="{{ page.title }}" />
     <span id="fp_caption">
         <span class="fp_title">{{ page.title }}</span><br>
         <span class="fp_abstract">{{ page.abstract }}</span>
         <div class="fp_tags"><span class="tag_words">#active</span> <span class="tag_words">#featured</span></div>
     </span>
   </div>
  </div>
  {% endif %}
{% endfor %}

</div>

<h1>Most Recent Update:</h1>
<div class="blog_post">
<h2>{{ site.posts.first.title }}</h2>
<p>{{ site.posts.first.content }}</p>
</div>



 








<div class="project_list clear">
<h1>Active Projects:</h1>
{% for page in site.pages %}
  {% if page.status contains 'active' %}
    {% include project_card.html %}
  {% endif %}
{% endfor %}
</div>

<div class="project_list clear">
<h1>Completed Projects:</h1>
{% for page in site.pages %}
  {% if page.status contains 'complete' %}
    {% include project_card.html %}
  {% endif %}
{% endfor %}
</div>

<div class="project_list clear">
<h1>Potential Projects:</h1>
{% for page in site.pages %}
  {% if page.status contains 'potential' %}
    {% include project_card.html %}
  {% endif %}
{% endfor %}
</div>

