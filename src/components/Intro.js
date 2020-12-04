import React, { useEffect } from "react";
import "../App.css";
import Photo from "../images/pp.jpg";
import Github from "../images/github.png";
import { setBlue, setGreen, setLight, setPurple } from "../utils/themeSetters";

const Intro = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const setters = [setBlue, setGreen, setLight, setPurple];
      const i = Math.floor(Math.random() * 4);

      setters[i]();
    }, 20000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section id='s1'>
      <div className='main-container'>
        <div className='greeting-wrapper'>
          <h1>Hi, I'm Abdelghafour EL GHAZI</h1>
        </div>

        <div className='intro-wrapper'>
          <div className='nav-wrapper'>
            <div className='dots-wrapper'>
              <div id='dot-1' className='browser-dot'></div>
              <div id='dot-2' className='browser-dot'></div>
              <div id='dot-3' className='browser-dot'></div>
            </div>
            <a
              href='https://github.com/Abdelghafour-El-Ghazi/my-portfolio-client'
              target='_blank'
              rel='noreferrer'>
              {" "}
              <img
                src={Github}
                id='github'
                className='github'
                alt='github link'
              />{" "}
            </a>
          </div>

          <div className='left-column'>
            <img id='profile_pic' src={Photo} alt='Abdelghafour EL GHAZI' />
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
              *Click on a dot <br />
              To change the theme of the page
              <br />
              ***
              <br />* It will change Randomly every 20 second *
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
