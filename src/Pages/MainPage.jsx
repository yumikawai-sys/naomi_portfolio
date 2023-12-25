/* eslint-disable */
import React, { useState } from 'react';
import './MainPage.css'; // Import your component-specific styles
import laptopImage from './images/laptop.png';
import arrowImage from './images/arrow.png';
import { Typewriter } from "react-simple-typewriter";

const MainPage = () => {
  const [rotateValue, setRotateValue] = useState(''); // State to manage rotation

  const rotateClockwise = () => {
    // Rotate clockwise by 90 degrees
    const newRotateValue = `${rotateValue} rotate(-90deg)`;
    setRotateValue(newRotateValue);
  };

  const rotateCounterClockwise = () => {
    // Rotate counterclockwise by 90 degrees
    const newRotateValue = `${rotateValue} rotate(90deg)`;
    setRotateValue(newRotateValue);
  };

  return (
    <div className="main">
      <div className="information">
        <div className="overlay"></div>
        <div className="typewriter">
          <h2
            style={{ fontFamily: "Morganite Bold, sans-serif" }}
            className="message text-7xl bg-primary-600 p-2 rounded-xl text-grayscale-200 text-center rounded-br-[0%] relative "
          >
            <Typewriter words={["Hi, I'm Naomi! Welcome to my portfolio."]} loop={true} />
            &nbsp;
          </h2>
        </div>
        <img src={laptopImage} className="mobile" alt="PC" />
        <div id="circle" style={{ transform: rotateValue }}>
          <div className="feature one">
            {/* <img src="./images/camera.png" alt="Camera" /> */}
            <div>
              <h1>Frontend - React, Vue</h1>
              {/* <p>React, Vue, HTML, CSS</p> */}
            </div>
          </div>
          <div className="feature two">
            {/* <img src="./images/processor.png" alt="Processor" /> */}
            <div>
              <h1>Backend - Express, Node.js</h1>
              {/* <p>Express, Node.js, PHP</p> */}
            </div>
          </div>
          <div className="feature three">
            {/* <img src="./images/display.png" alt="Display" /> */}
            <div>
              <h1>Database - SQL, non-SQL</h1>
              {/* <p>SQL, non-SQL</p> */}
            </div>
          </div>
          <div className="feature four">
            {/* <img src="./images/battery.png" alt="Battery" /> */}
            <div>
              <h1>Machine Leaning - Python</h1>
              {/* <p>Python</p> */}
            </div>
          </div>
        </div>
      </div>

      <div className="control">
        <img
          src={arrowImage}
          id="upBtn"
          alt="Up Button"
          onClick={rotateClockwise}
        />
        <h3>My expertise</h3>
        <img
          src={arrowImage}
          id="downBtn"
          alt="Down Button"
          onClick={rotateCounterClockwise}
        />
      </div>
    </div>
  );
};

export default MainPage;
