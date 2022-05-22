import React from "react";
import "./about.css";
import about_img from "../../img/pic2.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={about_img} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I'm a Front-end Developer 👨🏽‍💼 Worked as full time intern as a Frontend
          developer in a Verzeo Company for 6 months (Nov 2021 - Apr 2022).
          building new and delectable projects with the team, for the client.
        </p>
        <p className="a-desc">
          I have good knowledge of <strong>FrontEnd development</strong> . I am
          experienced in design and development on technologies like React.js,
          Redux, JavaScript, material UI, Bootstrap,SCSS, jQuery and hands on
          experience in Responsive Design.
        </p>
        <div className="a-award">
          <img
            src="https://img.icons8.com/ios-filled/344/github.png"
            alt=""
            className="a-award-img"
          />
          <div className="a-award-texts">
            <h4 className="a-awrad-title">Have a glance at my GitHub</h4>
            <a href="https://github.com/Sandeep4ever" className="git_link">
              https://github.com/Sandeep4ever
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
