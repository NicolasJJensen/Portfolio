import React, {useState} from 'react';

import '../stylesheets/css/article.css'

export default function Article(props) {

  return (
    <article>
      <h2>{props.title}</h2>
      <p class="date" >{props.date}</p>

      <br />
      <hr class="articleHR" />
      <br />

      {props.sections.map(section => (
        <section>
          <h3>{section.title}</h3>
          <p>
            {section.img && <img src={section.img.src} alt={section.img.alt} />}
            {section.body}
          </p>
        </section>
      ))}
    </article>
  )
}
