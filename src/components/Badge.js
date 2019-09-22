import React from 'react';
import '../stylesheets/css/badge.css'

export default function Badge(props) {
  return (
    <div className="myBadge">
      <div className="badge">
        <img src={`${process.env.PUBLIC_URL}/images/profile-pic.png`} alt="profile pic"/>
        <div className="information">
          <p className="name">Nicolas Jensen</p>
          <p>Developer</p>
        </div>
      </div>
    </div>
  );
}