import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './Home';
import Skills from './Skills';

export default function App() {

  return (
    <Router>
      <Navbar />
      <Route path="/index.html" component={Home} />
      <Route path="/skills.html" component={Skills} />
      {/* <Route path="/experience" component={Experience} />
      <Route path="/projects" component={Projects} />
      <Route path="/blog" component={Blog} />
      <Route path="/about" component={About} /> */}
    </Router>
  )
}
