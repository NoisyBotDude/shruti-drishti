import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import ReactDOM from "react-dom";
import React, { useRef, useCallback, useState, useEffect} from "react";
import Webcam from "react-webcam";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [img, setImg] = useState(null);
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [startCapturing, setStartCapturing] = useState(false);
  const [predictedText, setPredictedText] = useState("")

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc);
  }, [webcamRef]);

  const resetCamera = () => {
    setImg(null);
  }

  const handleDataAvailable = useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStartCaptureClick = useCallback(() => {
    setCapturing(true);
    setStartCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef, handleDataAvailable]);

  const handleStopCaptureClick = useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
  }, [mediaRecorderRef, setCapturing]);

  const handleDownload = useCallback(() => {
    console.log("this is working");
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/mp4",
      });
      // multipart/form-data
      const formData = new FormData();
      formData.append("file", blob);
      axios.post("http://localhost:8000/predict_text", formData, {
      }).then((res) => {
        console.log("this us response: ", res.data.predicted_text);
        setPredictedText(res.data.predicted_text);
      }).catch((err) => {
        console.log("this is error: ", err);
      })
      // const url = URL.createObjectURL(blob);
      // const a = document.createElement("a");
      // document.body.appendChild(a);
      // a.style = "display: none";
      // a.href = url;
      // a.download = "react-webcam-stream-capture.mp4";
      // a.click();
      // window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);
  // start the recording when the user clicks the button, stops the recording every 3 seconds and then downloads the video
//   useEffect(() => {
//     if (capturing) {
//       const timer = setTimeout(() => {
//         handleStopCaptureClick();
//       }, 5000);
//       return () => clearTimeout(timer);
//     } else {
//       handleDownload();
//       setTimeout(() => {
//         handleStartCaptureClick();
//       }, 15000);
//     }
//   }, [capturing, handleStopCaptureClick, handleDownload, handleStartCaptureClick]);


  
  

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
        <div className="" style={{ height: "95vh", width: "60vw" }}>
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
                className=" d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: "#d6d7c0",
                  height: "80%",
                  width: "100%",
                  borderRadius: "15px",
                  borderBottom: "4px solid black",
                }}
              >
                {img ? 
                <Image src={img} alt="img" width={100} height={100}
                  style={{ width: "77%", height: "100%"}}
                /> :
                <Webcam
                  mirrored={false}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  style={{ width: "100%", height: "100%" }}
                />
                }
              </div>
              <div className="text-warning d-flex justify-content-center">
                <p>{predictedText}</p>
              </div>
              <div
                className="w-100 d-flex align-items-center justify-content-between"
                style={{ height: "20%" }}
              >
                <button
                  className="py-2 btn"
                  style={{
                    backgroundColor: "#ff5f3b",
                    color: "white",
                    width: "100px",
                    borderRadius: "10px",
                    boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.25)",
                  }}
                  onClick={capturing ? handleStopCaptureClick : handleStartCaptureClick}
                >
                  {capturing ? "STOP" : "START"}
                </button>
                <button
                  className="py-2 btn"
                  style={{
                    backgroundColor: "#426d4a",
                    color: "white",
                    width: "100px",
                    borderRadius: "10px",
                    boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.25)",
                  }}
                  onClick={img ? resetCamera : capture}
                >
                  {img ? "RESET" : "CAPTURE"}
                </button>
                <button
                  className="py-2 btn"
                  style={{
                    backgroundColor: "#426d4a",
                    color: "white",
                    width: "100px",
                    borderRadius: "10px",
                    boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.25)",
                  }}
                  onClick={handleDownload}
                >
                  SEND
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
