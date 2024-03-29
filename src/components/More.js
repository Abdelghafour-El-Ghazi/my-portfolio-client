import React from "react";
import Photo from "../images/Capture.PNG";
import cv from "../resumes/Abdelghafour-el-ghazi.pdf";
import resume from "../resumes/Abdelghafour_EL_GHAZI.pdf";

const More = () => {
  return (
    <section id='s2'>
      <div className='main-container'>
        <div className='about-wrapper'>
          <div className='about-me'>
            <h4>More about me</h4>

            <p>
              I build new projects just to tickle my brain and love teaching
              others how they're made.
              <br />
              I'm in love with Javascript.
            </p>

            <p>
              I'm looking for a Full Time Job as a Front-End, Back-End or a
              Fullstack Web Developer
            </p>

            <hr />

            <h4>TOP EXPERTISE</h4>

            <p style={{ marginBottom: "20px" }}>
              Fullstack developer with primary focus on React + GraphQl:{" "}
              <div style={{ marginTop: "20px" }}>
                &nbsp;
                <a target='_blank' href={resume} rel="noreferrer" download>
                  Download Resume{" "}
                </a>{" "}
                (English)
              </div>
              <div style={{ margin: "20px" }}>
                <a target='_blank' href={cv} rel="noreferrer" download>
                  Télécharger mon CV
                </a>{" "}
                (French)
              </div>
            </p>

            <div id='skills'>
              <ul>
                <li>React</li>
                <li>AWS</li>
                <li>Redux</li>
                <li>JavaScript</li>
                <li>NodeJS</li>
                <li>Express JS</li>
                <li>MongoDB</li>
                <li>DynamoDB</li>
              </ul>

              <ul>
                <li>GraphQL</li>
                <li>HTML/CSS</li>
                <li>Heroku</li>
                <li>Netlify</li>
                <li>Postgres</li>
                <li>MySQL</li>
                <li>Lambda</li>
                <li>S3</li>
              </ul>
            </div>
          </div>
          <div className='social-links'>
            <img id='social_img' src={Photo} alt='Github' />
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
