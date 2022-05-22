import React from "react";
import "./intro.css";
import me from "../../img/san1.jpg";
const Intro = () => {
  return (
    <>
      <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className="i-intro">Hii 👋 , I am</h2>
            <h3 className="i-name">Sandeep Kumar</h3>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Web Developer</div>
                <div className="i-title-item">UI/UX Designer</div>
                <div className="i-title-item">React Developer</div>
              </div>
            </div>
            <p className="i-desc">
              I design and develop Websites and software for customers of all
              sizes, specialization in creating stylish, modern websites using
              MERN stack.
            </p>
          </div>
        </div>
        <div className="i-right">
          <div className="i-bg"></div>
          <div className="imgfor">
            <img src={me} alt="" className="i-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
