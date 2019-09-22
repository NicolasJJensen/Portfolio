import React from 'react';

//import the css stylings for the badge
import '../stylesheets/css/badge.css'

//a functional component for the badge
export default function Badge() {

  // the html that the badge is made up of
  return (
    <div className="myBadge">
      <div className="badge">
        {/* my profile pic */}
        <img src={`${process.env.PUBLIC_URL}/images/profile-pic.png`} alt="profile pic"/>

        {/* my name an title */}
        <div className="information">
          <p className="name">Nicolas Jensen</p>
          <p>Developer</p>
        </div>
      </div>
    </div>
  );
}