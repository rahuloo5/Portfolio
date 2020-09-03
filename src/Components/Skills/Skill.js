import React from 'react'
import Nav from '../Navigation/Nav'
import './Skill.css'
import html from '../../photos/html5.png'
import jsx from '../../photos/jsx.png'
import reactjs from '../../photos/reactjs.png'
import reactNative from '../../photos/react-native.png'
import dart from '../../photos/dart.png'
import flutter from '../../photos/flutter.png'
import graphql from '../../photos/GraphQL.png'
import node from '../../photos/nodejs.png'
import mysql from '../../photos/mysql.png'
import mongo from '../../photos/mongodb.jpg'
import python from '../../photos/python.png'
import material from '../../photos/material.png'
import javascript from '../../photos/javascript.png'
import bootstrap from '../../photos/bootstrap.png'
import css from '../../photos/css.png'
export default function Skill() {
    return (
      <div>
        <Nav />
        <div>
          <div className="title">
            <span
              style={{
                textAlign: 'center',
                justifyContent: 'center',
                marginLeft: '660px',
                fontStyle: 'oblique',
              }}
            >
              <h2 style={{color: 'green'}}>SKILLS</h2>
            </span>
          </div>
        </div>
        <dav className="container">
          <div className="content">
            <div className="card">
              <h4 className="h4line">HTML</h4>
              <div className="down">
                <div>
                  <img src={html} alt="html" className="image" />
                  <br />
                  <span style={{marginLeft: 17}}>HTML5</span>
                </div>

                <div>
                  <img src={jsx} alt="html" className="image" />
                  <br />
                  <span style={{marginLeft: 30}}>JSX</span>
                </div>
              </div>
            </div>
          </div>
        </dav>

        <dav className="container">
          <div className="content">
            <div className="card">
              <h4 className="h4line">CSS</h4>
              <div className="down">
                <div>
                  <img src={css} alt="html" className="image" />
                  <br />
                  <span style={{marginLeft: 17}}>CSS</span>
                </div>

                <div>
                  <img src={material} alt="html" className="image" />
                  <br />
                  <span style={{marginLeft: 30}}>JSX</span>
                </div>

                <div>
                  <img src={bootstrap} alt="html" className="image" />
                  <br />
                  <span style={{marginLeft: 25}}>Bootstrap</span>
                </div>
              </div>
            </div>
          </div>
        </dav>

        <dav className="container">
          <div className="content">
            <div className="card">
              <h4 className="h4line">JavaScript</h4>
              <div className="down">
                <div>
                  <img src={reactjs} alt="html" className="image" />
                  <br />
                  <span style={{marginLeft: 17}}>ReactJS</span>
                </div>

                <div>
                  <img src={reactNative} alt="html" className="image" />
                  <br />
                  <span style={{marginLeft: 30}}>ReactNative</span>
                </div>

                <div>
                  <img src={javascript} alt="html" className="image" />
                  <br />
                  <span style={{marginLeft: 17}}>JavaScript</span>
                </div>

                <div>
                  <img src={node} alt="html" className="image" />
                  <br />
                  <span style={{marginLeft: 17}}>Node</span>
                </div>
              </div>
            </div>
          </div>
        </dav>

        <dav className="container">
          <div className="content">
            <div className="card">
              <h4 className="h4line">Database</h4>
              <div className="down">
                <div>
                  <img src={mysql} alt="html" className="image" />
                  <br />
                  <span style={{marginLeft: 17}}>MYSQL</span>
                </div>

                <div>
                  <img src={mongo} alt="html" className="image" />
                  <br />
                  <span style={{marginLeft: 30}}>MogoDb</span>
                </div>
              </div>
            </div>
          </div>
        </dav>

        <dav className="container">
          <div className="content">
            <div className="card">
              <h4 className="h4line">Learning Phase</h4>
              <div className="down">
                <div>
                  <img src={graphql} alt="html" className="image" />
                  <br />
                  <span style={{marginLeft: 17}}>GraphQL</span>
                </div>

                <div>
                  <img src={dart} alt="html" className="image" />
                  <br />
                  <span style={{marginLeft: 30}}>Dart</span>
                </div>

                <div>
                  <img src={flutter} alt="html" className="image" />
                  <br />
                  <span style={{marginLeft: 30}}>Flutter</span>
                </div>

                <div>
                  <img src={python} alt="html" className="image" />
                  <br />
                  <span style={{marginLeft: 30}}>Python</span>
                </div>
              </div>
            </div>
          </div>
        </dav>
      </div>
    );
}
