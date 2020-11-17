import React from "react";
import Photo from "../images/Capture.PNG";

const More = () => {
  return (
    <section id='s2'>
      <div class='main-container'>
        <div class='about-wrapper'>
          <div class='about-me'>
            <h4>More about me</h4>

            <p>
              I build new projects just to tickle my brain and love teaching
              others how they're made.
              <br />
              For Now, I'm in love with the MERN stack and especially React.
            </p>

            <p>
              I'm looking for an internship as a Front-End, Back-End or a
              Fullstack Web Developer
            </p>

            <hr />

            <h4>TOP EXPERTISE</h4>

            <p style={{ marginBottom: "20px" }}>
              Fullstack developer with primary focus on React + GraphQl:{" "}
              <div style={{ marginTop: "20px" }}>
                &nbsp;
                <a target='_blank' href='/'>
                  Download Resume
                </a>
              </div>
              <div style={{ margin: "20px" }}>
                <a target='_blank' href='/'>
                  Télécharger mon CV
                </a>
              </div>
            </p>

            <div id='skills'>
              <ul>
                <li>React</li>
                <li>Redux</li>
                <li>JavaScript</li>
                <li>NodeJS</li>
                <li>Express JS</li>
                <li>MongoDB</li>
              </ul>

              <ul>
                <li>GraphQL</li>
                <li>HTML/CSS</li>
                <li>Heroku</li>
                <li>Netlify</li>
                <li>Postgres</li>
                <li>MySQL</li>
              </ul>
            </div>
          </div>
          <div class='social-links'>
            <img id='social_img' src={Photo} />
            <h3>Find me on Github</h3>

            <a
              target='_blank'
              rel='noreferrer'
              href='https://github.com/Abdelghafour-El-Ghazi'>
              Github : Abdelghafour EL GHAZI
            </a>
            <br />
          </div>
        </div>
      </div>
    </section>
  );
};

export default More;
