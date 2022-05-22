import React, { useState } from "react";
import "./resume.css";
import downloadIcon from "../../img/download_icon.png";
import { Button, Modal } from "react-bootstrap";
import resume from "../../img/sandeep_resume.jpg";
import { success, failure } from "../services/CommonService";
const Resume = () => {
  const [show, setShow] = useState(false);

  const ViewResume = () => {
    setShow(true);
  };
  const downloadResume = () => {
    downloadResource(resume, "sandeep_resume.jpeg");
    setShow(false);
  };

  const downloadResource = (url, fileName) => {
    if (url) {
      if (!fileName) fileName = url.split("/").pop();
      fetch(url, {
        headers: new Headers({
          Origin: window.location.origin,
        }),
        mode: "cors",
      })
        .then((response) => response.blob())
        .then((blob) => {
          let blobUrl = window.URL.createObjectURL(blob);
          downloadBlob(blobUrl, fileName);
          success("Sandeep's resume has been downloaded to your machine 😍");
        })
        .catch((e) => {
          alert("Something went wrong");
          failure("Unable to download, anyHow you can view here");
        });
    }
  };

  const downloadBlob = (blob, fileName) => {
    var a = document.createElement("a");
    a.download = fileName;
    a.href = blob;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <>
      <div className="Resume_container resumeView" onClick={ViewResume}>
        See Resume
      </div>
      <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        animation="true"
        backdrop="static"
        className="resume_modal"
        style={{}}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            <Button variant="white" onClick={downloadResume}>
              <img
                src={downloadIcon}
                alt="download"
                className="download_icon"
              />
            </Button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ overflowY: "scroll", height: "500px" }}>
          <p>
            <img src={resume} alt="resume" style={{ width: "100%" }} />
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Resume;
