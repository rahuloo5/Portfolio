import React from 'react'
import Nav from '../Navigation/Nav'

export default function About() {
    return (
      <div style ={{position:'absolute'}}>
        <Nav />
        <div
          style={{
            
            justifyContent: 'center',
          }}
        >
          <div style={{display: 'flex', justifyContent: 'center' ,marginTop:'25', fontStyle:'oblique' , color:'green'}}>
            <h1>ABOUT</h1>
          </div>
          <div
            style={{
              display: 'block',
              justifyContent: 'space-around',
              textAlign: 'center',
              fontSize: 20,
            }}
          >
            <h3>
              I am a self-taught developer specializing in JavaScript, React,
              and React-Native.
              <br /> Most of my learning has been through building and deploying
              apps, pushing to GitHub and getting peer code reviews on LinkedIn and Twitter.{' '}
              <br />I love the daily challenges of web development: writing
              quality code, learning new technologies, and solving complex
              problems.
              <br /> I have been continuing to learn through freelance
              opportunities. I look forward to working on a team that is
              passionate about their product.
            </h3>
          </div>
        </div>
      </div>
    );
}
