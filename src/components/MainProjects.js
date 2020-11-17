import React from "react";
import Social from "../images/social2.PNG";
import Memories from "../images/memories.PNG";
import Reddit from "../images/reddit.PNG";

const MainProjects = () => {
  return (
    <section id='s1'>
      <div class='main-container'>
        <h3 style={{ textAlign: "center" }}>Latest Projects </h3>

        <div class='post-wrapper'>
          <div>
            <div class='post'>
              <img class='thumbnail' src={Social} />
              <div class='post-preview'>
                <h6 class='post-title'>Social Media App</h6>
                <p class='post-intro'>
                  Built & Deployed a social media app where you can register +
                  login + create + fetch + update and delete posts + comment +
                  like posts.
                  <br />
                  <div style={{ fontWeight: "bold", marginTop: "15px" }}>
                    Using MERN stack + GraphQL + Semantic-UI
                  </div>
                </p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}>
                  <a
                    href='https://github.com/Abdelghafour-El-Ghazi/social-media-mern-graphql'
                    target='_blank'
                    rel='noreferrer'>
                    Github
                  </a>

                  <a
                    target='_blank'
                    href='https://social-media-abdelghafour-elghazi.netlify.app/'
                    rel='noreferrer'>
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class='post'>
              <img class='thumbnail' src={Memories} />
              <div class='post-preview'>
                <h6 class='post-title'>Memories App - CRUD</h6>
                <p class='post-intro'>
                  Built & Deployed a CRUD App to create + save + fetch + update
                  and delete Memories with their pictures.
                  <br />
                  <div style={{ fontWeight: "bold", marginTop: "15px" }}>
                    Using MERN stack + Redux + Material UI
                  </div>
                </p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}>
                  <a
                    href='https://github.com/Abdelghafour-El-Ghazi/mern-memories-app'
                    target='_blank'
                    rel='noreferrer'>
                    Github
                  </a>

                  <a
                    href='https://mern-memories-abdelghafour-elghazi.netlify.app/'
                    target='_blank'
                    rel='noreferrer'>
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class='post'>
              <img class='thumbnail' src={Reddit} />
              <div class='post-preview'>
                <h6 class='post-title'>a Reddit App clone</h6>
                <p class='post-intro'>
                  Built & Deployed a reddit clone, where you can register +
                  login + create + fetch + update + delete posts + upvote +
                  downvote posts.
                  <br />
                  <div style={{ fontWeight: "bold", marginTop: "15px" }}>
                    Using React + Typescript + GraphQL + URQL + Node.js +
                    PostgreSQL + MikroORM + Redis + Next.js + TypeGraphQL +
                    Chakra
                  </div>
                </p>
                <a
                  href='https://github.com/Abdelghafour-El-Ghazi/reddit-clone'
                  target='_blank'
                  rel='noreferrer'>
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainProjects;
