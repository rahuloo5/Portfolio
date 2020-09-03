import React from 'react';
import ReactPlayer from 'react-player';
import './Project.css'
import burger from '../../photos/burger.PNG'
import Nav from '../Navigation/Nav'

export default function Project() {
    return (
      <>
        <Nav />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div>
            <h1
              style={{color: 'red', fontFamily: 'sans-serif', fontSize: '35'}}
            >
              PROJECTS
            </h1>
          </div>
          <div>
            <h2
              style={{
                fontStyle: 'oblique',
                color: 'green',
                textDecorationLine: 'underline',
              }}
            >
              APPS
            </h2>
          </div>
          <div className="AppDisplay">
            <ReactPlayer
              className="react-player fixed-bottom"
              url="https://www.youtube.com/watch?v=BD-rBe-1sms"
              width="250px"
              height="200px"
              controls={false}
              playing={true}
              loop={true}
            />
            <h3 style={{paddingLeft: 20, color: '#F94F1D'}}>Food Swipe</h3>
          </div>

          <h4 style={{paddingBottom: '50px'}}>
            This App Uses Tinder Swipe Animation ,In this we add and reject food
            items by swipe{' '}
          </h4>

          <div className="AppDisplay">
            <ReactPlayer
              className="react-player fixed-bottom"
              url="https://www.youtube.com/watch?v=5OUlkuesHcU"
              width="250px"
              height="200px"
              controls={false}
              playing={true}
              loop={true}
            />
            <h3 style={{paddingLeft: 20, color: '#F94F1D'}}>
              {' '}
              Instagram Scroll-View Clone
            </h3>
          </div>

          <h4 style={{paddingBottom: '50px'}}>
            This App is clone of Instagram Scroll View Images
          </h4>

          <div className="AppDisplay">
            <ReactPlayer
              className="react-player fixed-bottom"
              url="https://www.youtube.com/watch?v=O8ys8Z4OSIo"
              width="250px"
              height="200px"
              controls={false}
              playing={true}
              loop={true}
            />
            <h3 style={{paddingLeft: 20, color: '#F94F1D'}}> Recipe App</h3>
          </div>

          <h4 style={{paddingBottom: '50px'}}>
            Using Dummy Data , Recipe App made where we can see Recipe of any
            food.
          </h4>

          <div className="AppDisplay">
            <ReactPlayer
              className="react-player fixed-bottom"
              url="https://www.youtube.com/watch?v=4Qg0xHE9QHY"
              width="250px"
              height="200px"
              controls={false}
              playing={true}
              loop={true}
            />
            <h3 style={{paddingLeft: 20, color: '#F94F1D'}}>Alcholpedia </h3>
          </div>

          <h4 style={{paddingBottom: '50px'}}>
            In This App , User can get info about any drink that he wants to
            drink .
          </h4>

          <div>
            <h2
              style={{
                fontStyle: 'oblique',
                color: 'green',
                textDecorationLine: 'underline',
                marginBottom: '25px',
              }}
            >
              WEBSITES
            </h2>
          </div>

          <div className="AppDisplay">
            <ReactPlayer
              className="react-player fixed-bottom"
              url="https://www.youtube.com/watch?v=xfC5MkI22V4"
              width="250px"
              height="200px"
              controls={false}
              playing={true}
              loop={true}
            />
            <h3 style={{paddingLeft: 20, color: '#F94F1D'}}>MausamCast </h3>
          </div>

          <h4 style={{paddingBottom: '50px'}}>
            In This Website , User can get weather info about any city/country .
          </h4>

          <div className="AppDisplay">
            <ReactPlayer
              className="react-player fixed-bottom"
              url="https://www.youtube.com/watch?v=hf-jn5OYd70"
              width="250px"
              height="200px"
              controls={false}
              playing={true}
              loop={true}
            />
            <h3 style={{paddingLeft: 20, color: '#F94F1D'}}>The Last Wish </h3>
          </div>

          <h4 style={{paddingBottom: '50px'}}>
            In this Website i Provide Funeral Services to families of every
            religion with different packages and complete last wish of a person
            .
          </h4>

          <div className="AppDisplay">
            <ReactPlayer
              className="react-player fixed-bottom"
              url="https://www.youtube.com/watch?v=2rj6K64qdY0"
              width="250px"
              height="200px"
              controls={false}
              playing={true}
              loop={true}
            />
            <h3 style={{paddingLeft: 20, color: '#F94F1D'}}>Pharmacy </h3>
          </div>

          <h4 style={{paddingBottom: '50px'}}>
            In this website we sell products related to Pharmacy .
          </h4>

          <div className="AppDisplay">
            <ReactPlayer
              className="react-player fixed-bottom"
              url="https://www.youtube.com/watch?v=7q8EfltSi-w"
              width="250px"
              height="200px"
              controls={false}
              playing={true}
              loop={true}
            />
            <h3 style={{paddingLeft: 20, color: '#F94F1D'}}>Burger Builder </h3>
          </div>

          <h4 style={{marginBottom: '65px'}}>
            In this Web site User can make burger of his wish using burger
            ingredients .
          </h4>
        </div>
      </>
    );
}
