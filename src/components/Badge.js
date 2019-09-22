import React from 'react';
import '../stylesheets/css/badge.css'

export default function Badge(props) {
  return (
    <div className="myBadge">
      <div className="badge">
        <img src="http://lorempixel.com/100/100" alt="profile pic"/>
        <div className="information">
          <p className="name">Nicolas Jensen</p>
          <p>Developer</p>
        </div>
      </div>
    </div>
  );
}