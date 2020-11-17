import React from "react";
import Covid from "../images/covid-19.PNG";
import Expense from "../images/expense-tracker.PNG";
import Chat from "../images/chat.PNG";

const MiniProjects = () => {
  return (
    <section id='s1'>
      <div class='main-container'>
        <h3 style={{ textAlign: "center" }}>Mini Projects</h3>

        <div class='post-wrapper'>
          <div>
            <div class='post'>
              <img class='thumbnail' src={Covid} />
              <div class='post-preview'>
                <h6 class='post-title'>Covid-19 Tracker</h6>
                <p class='post-intro'>
                  Built & Deployed a Covid-19 Tracker that fetchs the live Covid
                  19 data from a daily updated API, showing then numbers and
                  visualizing the data on a Chart
                  <br />
                  <div style={{ fontWeight: "bold", marginTop: "15px" }}>
                    Using React + Material UI + Charts js
                  </div>
                </p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}>
                  <a
                    href='https://github.com/Abdelghafour-El-Ghazi/covid-19-tracker'
                    rel='noreferrer'
                    target='_blank'>
                    Github
                  </a>

                  <a
                    href='https://covid-19-tracker-2021.netlify.app/'
                    rel='noreferrer'
                    target='_blank'>
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class='post'>
              <img class='thumbnail' src={Chat} />
              <div class='post-preview'>
                <h6 class='post-title'>Chat App -Real time chat</h6>
                <p class='post-intro'>
                  Built & Deployed a chat app chere many people can join the
                  same room by only using the same name of theroom and chat in
                  real time
                  <br />
                  <div style={{ fontWeight: "bold", marginTop: "15px" }}>
                    Using React + NodeJS + Socket.io
                  </div>
                </p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}>
                  <a
                    href='https://github.com/Abdelghafour-El-Ghazi/chat-react-socket-io'
                    rel='noreferrer'
                    target='_blank'>
                    Github
                  </a>

                  <a
                    href='https://chat-app-react-socket-io-abdelghafour-elghazi.netlify.app/'
                    rel='noreferrer'
                    target='_blank'>
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class='post'>
              <img class='thumbnail' src={Expense} />
              <div class='post-preview'>
                <h6 class='post-title'>Expense Tracker</h6>
                <p class='post-intro'>
                  Built & Deployed a MERN stack expense tracker, where you can
                  add a list of your incomes and expenses and it does save it in
                  the MongoDB database for later.
                  <br />
                  <div style={{ fontWeight: "bold", marginTop: "15px" }}>
                    Using MERN stack
                  </div>
                </p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}>
                  <a
                    href='https://github.com/Abdelghafour-El-Ghazi/expense-tracker-react'
                    rel='noreferrer'
                    target='_blank'>
                    Github
                  </a>

                  <a
                    href='https://expense-tracker-abdelghafour-elghazi.netlify.app/'
                    rel='noreferrer'
                    target='_blank'>
                    Demo
                  </a>
                </div>
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiniProjects;
