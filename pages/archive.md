---
layout: page
title: Archive
order: 1
---

Browse all posts by month and year.

{% assign postsByYearMonth = site.posts | group_by_exp: "post", "post.date | date: '%B %Y'" %}
{% for yearMonth in postsByYearMonth %}

  <h2>{{ yearMonth.name }}</h2>
  <ul class="archive">
    {% for post in yearMonth.items %}
      <li><a href="{{ post.url }}">{{ post.title }}</a> <small>{{ post.date | date_to_long_string: "ordinal" }}</small></li>
    {% endfor %}
  </ul>
{% endfor %}
