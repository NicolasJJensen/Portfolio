import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// all the different pages and components are passed in so that
// you can change page from this one controller
import Navbar from './components/Navbar';
import Home from './Home';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Blog from './Blog';
import Contact from './Contact';

// this is the "App" comonent which display everything else
export default function App() {

  return (
    // this router contains the different screens and controls
    // swapping between then
    <Router>

      {/* the navbar is rendered so that every page gets it without having to place it in each "page" manually */}
      <Navbar />

      {/* all the different pages are initialized with their "path" and code */}
      <Route path="/" exact component={Home} />
      <Route path="/skills" component={Skills} />
      <Route path="/projects" component={Projects} />
      <Route path="/experience" component={Experience} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
    </Router>
  )
}
