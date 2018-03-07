---
---




{% for page in site.pages %}
  {% if page.status contains 'featured' %}
  <div class="slideshow" id="ss_{{ page.title }}">
     <img src="{{ page.url | prepend: site.baseurl }}/index.jpg" alt="{{ page.title }}" />
     <span id="caption">
         <span class="title">{{ page.title }}</span>
         <hr>
         <span class="abstract">{{ page.abstract }}</span>

         <div class="tags"><span class="tag_words">#active</span> <span class="tag_words">#featured</span></div>
     </span>
   </div>
  {% endif %}
{% endfor %}





 <div class="content" id="content_left">
   <h2>More Projects
 </div>
 <div class="content" id="content_right">
   <h2>Recent Posts</h2>
   <ul>
     <li>One</li>
     <li>Two</li>
   </ul>
 </div>



<!--
<h1>Most Recent Post:</h1>
<div class="text_block">
<h2>{{ site.posts.first.title }}</h2>
<p>{{ site.posts.first.content }}</p>
</div>
-->







<!--
<div class="project_list">
    <h1>Featured Projects:</h1>
{% for page in site.pages %}
  {% if page.status contains 'featured' %}
    {% include project_card.html %}
  {% endif %}
{% endfor %}
</div>

<div class="project_list">
<h1>Active Projects:</h1>
{% for page in site.pages %}
  {% if page.status contains 'active' %}
    {% include project_card.html %}
  {% endif %}
{% endfor %}
</div>

<div class="project_list">
<h1>Completed Projects:</h1>
{% for page in site.pages %}
  {% if page.status contains 'complete' %}
    {% include project_card.html %}
  {% endif %}
{% endfor %}
</div>

<div class="project_list">
<h1>Potential Projects:</h1>
{% for page in site.pages %}
  {% if page.status contains 'potential' %}
    {% include project_card.html %}
  {% endif %}
{% endfor %}
</div>
-->