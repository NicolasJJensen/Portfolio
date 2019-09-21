import React from 'react';
import '../stylesheets/badge.css'

export default function Badge(props) {
  return (
    <div class="myBadge">
      <div class="badge">
        <img src="http://lorempixel.com/100/100" />
        <div class="information">
          <p class="name">Nicolas Jensen</p>
          <p>Developer</p>
        </div>
      </div>
    </div>
  );
}