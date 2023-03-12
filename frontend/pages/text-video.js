import Head from "next/head";
import Image from "next/image";
import ReactDOM from "react-dom";
import React, { useState } from "react";
import Webcam from "react-webcam";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TextToVideo() {

  const [text, setText] = useState("");
  const [video, setVideo] = useState("https://www.w3schools.com/html/mov_bbb.mp4");

  const getVideo = () => {
    axios
      .post("http://localhost:8000/convert_text_to_video", {
        "text": text,
        })
      .then((res) => {
        console.log(res);
        setVideo(res.data.file_path);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(video);

  return (
    <>
      <div
        className="main-body d-flex flex-row align-items-center justify-content-center"
        style={{
          backgroundColor: "#dec98c",
          height: "100vh",
          fontFamily: "verdana",
        }}
      >
        <div className="" style={{ height: "95vh", width: "40vw" }}>
          <div
            className="w-100 pt-4 pb-5 ps-5 pe-5"
            style={{
              backgroundColor: "#fac666",
              height: "100%",
              border: "2px solid white",
              borderRadius: "25px",
              boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div
              className="w-100 p-3"
              style={{
                backgroundColor: "#32553a",
                height: "100%",
                borderRadius: "15px",
                boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.5)",
                borderBottom: "6px solid black",
              }}
            >
              <div
                className="w-100 d-flex align-items-center justify-content-between"
                style={{ height: "20%" }}
              >
                <input
                  type={"text"}
                  className="form-control p-2"
                  style={{
                    width: "70%",
                    backgroundColor: "#d6d7c0",
                    borderRadius: "10px",
                    boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.25)",
                  }}
                  placeholder="Enter your text"
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                />
                <button
                  className="py-2 btn"
                  style={{
                    backgroundColor: "#426d4a",
                    color: "white",
                    width: "100px",
                    borderRadius: "10px",
                    boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.25)",
                  }}
                  onClick={getVideo}
                >
                  Convert
                </button>
              </div>
              <div
                className=" d-flex align-items-center"
                style={{
                  backgroundColor: "#d6d7c0",
                  height: "80%",
                  width: "100%",
                  borderRadius: "15px",
                  borderBottom: "4px solid black",
                }}
              >
                {/* <Webcam mirrored={true} style={{ width: "100%", height: "100%" }} /> */}
                <video width="100%" height="100%" controls>
                  <source
                    src="./output.mp4"
                    type="video/mp4"
                  />
                  {/* <source
                    src="https://www.w3schools.com/html/mov_bbb.ogg"
                    type="video/ogg"
                  /> */}
                  Your browser does not support HTML video.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TextToVideo;
