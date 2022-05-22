import React, { useContext, useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer } from "react-toastify";
import { ThemeContext } from "../../context";
import { success, failure } from "../services/CommonService";

if (typeof window !== "undefined") {
  injectStyle();
}

const Contact = () => {
  const formRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_a6h8cye",
        "template_vk2c5c5",
        formRef.current,
        "WdGgb69uLixnbVxNf"
      )
      .then(
        (result) => {
          showSuccess();
          formRef.current.reset();
        },
        (error) => {
          showFailure();
        }
      );
  };

  function showSuccess() {
    success("Details submitted successfully 😄,you will be in touch soon ");
  }
  function showFailure() {
    failure("Something went wrong 😞,please try after sometime");
  }

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
          <div className="c-left">
            <h5 className="c-title">Contact Me</h5>
            <div className="c-info">
              <div className="c-info-item">
                <i className="fa-solid fa-phone contact_icon"></i>
                <a href="tel:+917011756011" className="contact_text">
                  {" "}
                  8318888422
                </a>
              </div>
              <div className="c-info-item">
                <i className="fa-solid fa-envelope contact_icon"></i>
                <a
                  className="contact_text"
                  href="mailto:sandeepk2198@gmail.com"
                >
                  sandeepk2198@gmail.com
                </a>
              </div>
              <div className="c-info-item">
                <i className="fa-solid fa-location-dot contact_icon"></i>
                <span className="contact_text_address">
                  Tower D, 4th Floor, IBC Knowledge Park 4/1, Bannerghatta Road,
                  Bangalore- 560 029{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="c-right">
            <p className="c-desc">
              <b>Want to hire me or</b> do you have any query please feel free
              to write.
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                style={{ backgroundColor: darkMode && "#333" }}
                type="text"
                placeholder="Name"
                name="user_name"
                autoComplete="off"
              />
              <input
                style={{ backgroundColor: darkMode && "#333" }}
                type="text"
                placeholder="Subject"
                name="user_subject"
                autoComplete="off"
              />
              <input
                style={{ backgroundColor: darkMode && "#333" }}
                type="text"
                placeholder="Email"
                name="user_email"
                autoComplete="off"
              />
              <textarea
                style={{ backgroundColor: darkMode && "#333" }}
                cols="30"
                rows="5"
                placeholder="Message"
                name="message"
              ></textarea>
              <button className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Contact;
