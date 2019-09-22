import React from 'react';

//the stylesheet for the blog page
import './stylesheets/css/blog.css'

// the badge and article components that needs to be displayed
import Badge from './components/Badge';
import Article from './components/Article';

// the functional componetn for the Blog webpage that displays a list of blogs
// for a user to read through
export default function Blog() {

  // this is a list with information of every article to be dispalyed
  // each article contains:
  //   title
  //   date
  //   an array of sections which contain
  //     title
  //     img
  //     body
  const articles = [
    {
      title: "Blog 1",
      date: "21st Jan 2019",
      sections: [
        {
          title: "This is a creative title",
          img: {
            src: "http://lorempixel.com/300/300",
            alt: "placeholder"
          },
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis justo vel purus sollicitudin, vitae porta risus elementum. Sed porta consequat arcu ut accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius finibus arcu, id dictum nibh fringilla quis. Nulla eget cursus sem. Pellentesque molestie leo est, a posuere nulla hendrerit et. Sed placerat ligula id augue mollis imperdiet. Donec efficitur risus et leo blandit, non vehicula massa elementum. Maecenas eget tortor in lorem viverra faucibus. Maecenas eu feugiat dui, tristique rhoncus dolor. Donec vitae ipsum sagittis, finibus ipsum nec, aliquet mi. Ut at efficitur ipsum. Morbi elit tellus, porta at maximus a, rhoncus ac felis.'
        },
        {
          title: "Wow I'm good with titles",
          img: {
            src: "http://lorempixel.com/300/300",
            alt: "placeholder"
          },
          body: 'Donec eget turpis in lorem mollis molestie. Aenean rhoncus auctor nisl, a vulputate ipsum iaculis eu. Pellentesque bibendum justo a odio tempor commodo. Sed accumsan eleifend justo laoreet maximus. Morbi sollicitudin odio in mi gravida, vitae consectetur dui faucibus. Suspendisse potenti. Praesent ipsum tortor, posuere sed dictum vitae, tincidunt nec urna. Fusce interdum et nulla nec ullamcorper. Nulla venenatis vulputate dictum. Nullam volutpat, neque in imperdiet faucibus, eros lectus lacinia nunc, id tempus lorem eros et arcu. Aenean ac venenatis nulla. Mauris at mollis risus. Praesent tristique porta tellus at hendrerit. Nam in imperdiet magna.'
        }
      ]
    },
    {
      title: "Blog 2",
      date: "15th Feb 2019",
      sections: [
        {
          title: "This is a creative title",
          img: {
            src: "http://lorempixel.com/300/300",
            alt: "placeholder"
          },
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis justo vel purus sollicitudin, vitae porta risus elementum. Sed porta consequat arcu ut accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius finibus arcu, id dictum nibh fringilla quis. Nulla eget cursus sem. Pellentesque molestie leo est, a posuere nulla hendrerit et. Sed placerat ligula id augue mollis imperdiet. Donec efficitur risus et leo blandit, non vehicula massa elementum. Maecenas eget tortor in lorem viverra faucibus. Maecenas eu feugiat dui, tristique rhoncus dolor. Donec vitae ipsum sagittis, finibus ipsum nec, aliquet mi. Ut at efficitur ipsum. Morbi elit tellus, porta at maximus a, rhoncus ac felis.'
        },
        {
          title: "Wow I'm good with titles",
          body: 'Donec eget turpis in lorem mollis molestie. Aenean rhoncus auctor nisl, a vulputate ipsum iaculis eu. Pellentesque bibendum justo a odio tempor commodo. Sed accumsan eleifend justo laoreet maximus. Morbi sollicitudin odio in mi gravida, vitae consectetur dui faucibus. Suspendisse potenti. Praesent ipsum tortor, posuere sed dictum vitae, tincidunt nec urna. Fusce interdum et nulla nec ullamcorper. Nulla venenatis vulputate dictum. Nullam volutpat, neque in imperdiet faucibus, eros lectus lacinia nunc, id tempus lorem eros et arcu. Aenean ac venenatis nulla. Mauris at mollis risus. Praesent tristique porta tellus at hendrerit. Nam in imperdiet magna.'
        }
      ]
    },
    {
      title: "Blog 3",
      date: "21st Apr 2019",
      sections: [
        {
          title: "This is a creative title",
          img: {
            src: "http://lorempixel.com/300/300",
            alt: "placeholder"
          },
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis justo vel purus sollicitudin, vitae porta risus elementum. Sed porta consequat arcu ut accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius finibus arcu, id dictum nibh fringilla quis. Nulla eget cursus sem. Pellentesque molestie leo est, a posuere nulla hendrerit et. Sed placerat ligula id augue mollis imperdiet. Donec efficitur risus et leo blandit, non vehicula massa elementum. Maecenas eget tortor in lorem viverra faucibus. Maecenas eu feugiat dui, tristique rhoncus dolor. Donec vitae ipsum sagittis, finibus ipsum nec, aliquet mi. Ut at efficitur ipsum. Morbi elit tellus, porta at maximus a, rhoncus ac felis.'
        },
        {
          title: "Wow I'm good with titles",
          img: {
            src: "http://lorempixel.com/300/300",
            alt: "placeholder"
          },
          body: 'Donec eget turpis in lorem mollis molestie. Aenean rhoncus auctor nisl, a vulputate ipsum iaculis eu. Pellentesque bibendum justo a odio tempor commodo. Sed accumsan eleifend justo laoreet maximus. Morbi sollicitudin odio in mi gravida, vitae consectetur dui faucibus. Suspendisse potenti. Praesent ipsum tortor, posuere sed dictum vitae, tincidunt nec urna. Fusce interdum et nulla nec ullamcorper. Nulla venenatis vulputate dictum. Nullam volutpat, neque in imperdiet faucibus, eros lectus lacinia nunc, id tempus lorem eros et arcu. Aenean ac venenatis nulla. Mauris at mollis risus. Praesent tristique porta tellus at hendrerit. Nam in imperdiet magna.'
        },
        {
          title: "Hmmmm what should I call this one",
          body: 'Phasellus in augue luctus, semper nisl ac, tincidunt massa. Nulla vel felis nec lectus laoreet tempus eget vel diam. Sed tincidunt, ligula in gravida suscipit, elit neque tincidunt arcu, nec porta libero lacus a mauris. Duis condimentum mollis arcu, at aliquet ipsum ultrices quis. Quisque at sem et turpis facilisis scelerisque at eu neque. Maecenas et magna pretium, molestie est lobortis, semper nisi. Pellentesque fermentum interdum scelerisque. Vivamus non augue ex. Vestibulum ornare lectus eu orci maximus, vitae sollicitudin metus tempor. Aenean sed lectus aliquet, consequat metus id, egestas diam.'
        }
      ]
    },
    {
      date: "18th May 2019",
      title: "Blog 4",
      sections: [
        {
          title: "This is a creative title",
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis justo vel purus sollicitudin, vitae porta risus elementum. Sed porta consequat arcu ut accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius finibus arcu, id dictum nibh fringilla quis. Nulla eget cursus sem. Pellentesque molestie leo est, a posuere nulla hendrerit et. Sed placerat ligula id augue mollis imperdiet. Donec efficitur risus et leo blandit, non vehicula massa elementum. Maecenas eget tortor in lorem viverra faucibus. Maecenas eu feugiat dui, tristique rhoncus dolor. Donec vitae ipsum sagittis, finibus ipsum nec, aliquet mi. Ut at efficitur ipsum. Morbi elit tellus, porta at maximus a, rhoncus ac felis.'
        },
        {
          title: "Wow I'm good with titles",
          body: 'Donec eget turpis in lorem mollis molestie. Aenean rhoncus auctor nisl, a vulputate ipsum iaculis eu. Pellentesque bibendum justo a odio tempor commodo. Sed accumsan eleifend justo laoreet maximus. Morbi sollicitudin odio in mi gravida, vitae consectetur dui faucibus. Suspendisse potenti. Praesent ipsum tortor, posuere sed dictum vitae, tincidunt nec urna. Fusce interdum et nulla nec ullamcorper. Nulla venenatis vulputate dictum. Nullam volutpat, neque in imperdiet faucibus, eros lectus lacinia nunc, id tempus lorem eros et arcu. Aenean ac venenatis nulla. Mauris at mollis risus. Praesent tristique porta tellus at hendrerit. Nam in imperdiet magna.'
        },
        {
          title: "Hmmmm what should I call this one",
          body: 'Phasellus in augue luctus, semper nisl ac, tincidunt massa. Nulla vel felis nec lectus laoreet tempus eget vel diam. Sed tincidunt, ligula in gravida suscipit, elit neque tincidunt arcu, nec porta libero lacus a mauris. Duis condimentum mollis arcu, at aliquet ipsum ultrices quis. Quisque at sem et turpis facilisis scelerisque at eu neque. Maecenas et magna pretium, molestie est lobortis, semper nisi. Pellentesque fermentum interdum scelerisque. Vivamus non augue ex. Vestibulum ornare lectus eu orci maximus, vitae sollicitudin metus tempor. Aenean sed lectus aliquet, consequat metus id, egestas diam.'
        }
      ]
    },
    {
      title: "Blog 5",
      date: "19th Aug 2019",
      sections: [
        {
          title: "This is a creative title",
          img: {
            src: "http://lorempixel.com/300/300",
            alt: "placeholder"
          },
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis justo vel purus sollicitudin, vitae porta risus elementum. Sed porta consequat arcu ut accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius finibus arcu, id dictum nibh fringilla quis. Nulla eget cursus sem. Pellentesque molestie leo est, a posuere nulla hendrerit et. Sed placerat ligula id augue mollis imperdiet. Donec efficitur risus et leo blandit, non vehicula massa elementum. Maecenas eget tortor in lorem viverra faucibus. Maecenas eu feugiat dui, tristique rhoncus dolor. Donec vitae ipsum sagittis, finibus ipsum nec, aliquet mi. Ut at efficitur ipsum. Morbi elit tellus, porta at maximus a, rhoncus ac felis.'
        }
      ]
    }
  ]

  // the code to render the article page
  return (

    // a main tag for semantics and ease of use
    <main class="blog">

      {/* my badge which is fixed to the top of the screen */}
      <Badge />

      {/* a container for the name of my blog and all its published articles */}
      <div class="articles">
        <h1>My Blog</h1>
        <br />
        <hr />
        
        {/* the list of articles is looped through and the article component is rendered
        with the correct data for each item in the array */}
        {articles.map(article => <Article title={article.title} date={article.date} sections={article.sections}/> )}
      </div>
    </main>
  )
}
