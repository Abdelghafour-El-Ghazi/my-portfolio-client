import React from "react";
import Photo from "../images/pp.jpg";
import { setLight, setBlue, setGreen, setPurple } from "../utils/themeSetters";

import "../App.css";

const Intro = () => {
  return (
    <section id='s1'>
      <div className='main-container'>
        <div className='greeting-wrapper'>
          <h1>Hi, I'm Abdelghafour EL GHAZI</h1>
        </div>

        <div className='intro-wrapper'>
          <div className='nav-wrapper'>
            <a href='index.html'>
              <div className='dots-wrapper'>
                <div id='dot-1' className='browser-dot'></div>
                <div id='dot-2' className='browser-dot'></div>
                <div id='dot-3' className='browser-dot'></div>
              </div>
            </a>

            {/* <ul id='navigation'>
              <li>
                <a onClick={executeScroll} style={{ cursor: "pointer" }}>
                  Contact
                </a>
              </li>
            </ul> */}
          </div>

          <div className='left-column'>
            <img id='profile_pic' src={Photo} />
            <h5 style={{ textAlign: "center", lineHeight: 0 }}>
              Personalize Theme
            </h5>

            <div id='theme-options-wrapper'>
              <div
                data-mode='light'
                onClick={() => setLight()}
                id='light-mode'
                className='theme-dot'></div>
              <div
                onClick={() => setBlue()}
                data-mode='blue'
                id='blue-mode'
                className='theme-dot'></div>
              <div
                onClick={() => setGreen()}
                data-mode='green'
                id='green-mode'
                className='theme-dot'></div>
              <div
                onClick={() => setPurple()}
                data-mode='purple'
                id='purple-mode'
                className='theme-dot'></div>
            </div>

            <p id='settings-note'>
              *Theme settings will be saved for <br /> your next vist
            </p>
          </div>

          <div className='right-column'>
            <div id='preview-shadow'>
              <div id='preview'>
                <div id='corner-tl' className='corner'></div>
                <div id='corner-tr' className='corner'></div>
                <h3>What I Do</h3>
                <p>I'm a computer science student and a React web Developer</p>
                <div id='corner-br' className='corner'></div>
                <div id='corner-bl' className='corner'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
