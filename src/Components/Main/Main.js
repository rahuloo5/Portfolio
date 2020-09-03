import React from 'react'; 

import profile from '../../photos/profile.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

export default function Main() {
    return (
      <div
        style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}
      >
        <div>
          <img
            src={profile}
            alt="profile"
            height="350"
            width="300"
            mode="fit"
            style={{borderRadius: '50%'}}
          />
        </div>
        <div>
          <h1>Rahul Singh Tomar</h1>
          <h2>software developer</h2>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <a href="https://github.com/" style={{margin: 5}}>
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/rahul-tomar-941586116/"
            className="instagram social"
            style={{margin: 5}}
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
          </a>

          <a
            href="https://twitter.com/rahuloo55"
            className="twitter social"
            style={{margin: 5}}
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/___rahul5____/"
            className="instagram social"
            style={{margin: 5}}
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>
    );
}
