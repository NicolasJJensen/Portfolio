import React from 'react';

//import the css styling for an article
import '../stylesheets/css/article.css'

// functional react component
export default function Article(props) {

  // the html to be used each time this component is called
  return (
    //each article has an article tag for semantics
    <article>

      {/* the title and date of the article with a line seperating the title from the content */}
      <h2>{props.title}</h2>
      <p class="date" >{props.date}</p>

      <br />
      <hr class="articleHR" />
      <br />

      {/* loop through a list of sections that have been given and generate the section 
          based on a html template with the information inside */}
      {props.sections.map(section => (

        // each section of the article uses a section tag for better semantics
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
