import React, { useEffect, useState } from "react";
import Navbaar from "../components/Navbaar";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import YouTube from "react-youtube";

export default function SearchResults() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const [player, setPlayer] = useState(null);
  const [selectVideo, setSelectVideo] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState("");

  const [correct, setCorrect] = useState(false);
  const [incorrect, setIncorrect] = useState(false);
  const [neutral, setNeutral] = useState(true);

  useEffect(() => {
    const videoItems = JSON.parse(localStorage.getItem("videoItems"));
    setSearchResults(videoItems);

    // Load YouTube IFrame Player API script
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    getYoutubeWindow();

    // Clean up function
    return () => {
      // Remove the global event listener and the player instance
      delete window.onYouTubeIframeAPIReady;
      player && player.destroy();
    };
  }, [player]);

  function onPlayerReady(event) {
    // Player is ready to play video
  }

  // Define onPlayerStateChange function
  function onPlayerStateChange(event) {
    // Player state has changed
  }

  const getYoutubeWindow = () => {
    window.onYouTubeIframeAPIReady = () => {
      setPlayer(
        new window.YT.Player("player", {
          videoId: "VIDEO_ID",
          events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
          },
        })
      );
    };
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleResponseData = (data) => {
    let videoItems = data.items.filter((item) => {
      if (item.id.kind === "youtube#video") {
        return item;
      }
    });

    videoItems = videoItems.slice(0, 3);

    localStorage.setItem("videoItems", JSON.stringify(videoItems));
    setSearchResults(videoItems);
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    axios
      .post("http://localhost:8000/user/search", {
        query: search,
        max_results: 15,
      })
      .then((res) => {
        // console.log(res.data)
        handleResponseData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleYoutubePlayerStart = () => {
    setSelectVideo(true);
  };

  const [question, setQuestion] = useState([]);
  const [answers, setAnswers] = useState([]);

  const handleGetQuiz = (videoId) => {
    axios
      .post("http://localhost:8000/get_questions", {
        text: videoId,
      })
      .then((res) => {
        console.log(res.data.answers_list);
        const questions = res.data.question_list[0].split("\n");
        const filteredQuestions = questions.filter((question) => {
          if (question !== "") {
            return question;
          }
        });
        console.log(filteredQuestions);
        setQuestion(filteredQuestions[0]);
        setAnswers(filteredQuestions.splice(1, 4));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  answers.map((answer) => {
    console.log("this is answer", answer);
  });

  //   console.log(selectVideo)

  return (
    <div style={{ backgroundColor: "#9cd1cb" }}>
      {loading ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <>
          <Navbaar />

          <div className="col-md-9 mt-4 d-flex flex-column align-items-center justify-content-center mt-3">
            <p style={{ fontSize: "large" }}>
              <b>What Are You Interested In Today?</b>
            </p>
            <div className="w-50 d-flex flex-row align-items-center">
              <input
                type="search"
                placeholder="Search"
                className="col-md-12"
                style={{
                  borderRadius: "20px",
                  border: "none",
                  padding: "10px",
                  backgroundColor: "#f6f2d2",
                }}
                onChange={handleSearch}
              />
              <button
                className="ps-3 pe-3 pt-2 pb-2 ms-3"
                style={{
                  backgroundColor: "#f68349",
                  color: "white",
                  borderRadius: "20px",
                }}
                onClick={handleSubmit}
              >
                Search
              </button>
            </div>
          </div>
          <div className="col-md-12 d-flex flex-row mt-4">
            <div className="col-md-9">
              <div className="container col-md-12 d-flex flex-row align-items-center justify-content-around">
                <button
                  className="card col-md-2 rounded"
                  style={{ backgroundColor: "#7aad8c", color: "white" }}
                >
                  <div className="card-body ps-1 pe-1 py-1">
                    <p className="m-0 p-0">
                      <small>Lorem Ipsum is simply dummy text.. </small>{" "}
                    </p>
                  </div>
                </button>

                <button
                  className="card col-md-2 rounded"
                  style={{ backgroundColor: "#7aad8c", color: "white" }}
                >
                  <div className="card-body ps-1 pe-1 py-1">
                    <p className="m-0 p-0">
                      <small>Lorem Ipsum is simply dummy text.. </small>{" "}
                    </p>
                  </div>
                </button>

                <button
                  className="card col-md-2 rounded"
                  style={{ backgroundColor: "#7aad8c", color: "white" }}
                >
                  <div className="card-body ps-1 pe-1 py-1">
                    <p className="m-0 p-0">
                      <small>Lorem Ipsum is simply dummy text.. </small>{" "}
                    </p>
                  </div>
                </button>
                <button
                  className="card col-md-2 rounded"
                  style={{ backgroundColor: "#7aad8c", color: "white" }}
                >
                  <div className="card-body ps-1 pe-1 py-1">
                    <p className="m-0 p-0">
                      <small>Lorem Ipsum is simply dummy text.. </small>{" "}
                    </p>
                  </div>
                </button>
              </div>

              {/* VIDEOS */}
              <div
                className="container mt-5 d-flex flex-row justify-content-around"
                style={{ columnGap: "10px" }}
              >
                {!selectVideo ? (
                  searchResults.map((item, index) => {
                    const videoEmbedLink =
                      "https://www.youtube.com/embed/" + item.id.videoId;

                    return (
                      <>
                        <div style={{ width: "300px" }}>
                          <div
                            className="card mb-2 w-100 rounded"
                            style={{ width: "180px" }}
                          >
                            <iframe
                              src={videoEmbedLink}
                              className="rounded"
                              title="test"
                              allowFullScreen
                              onPlay={handleYoutubePlayerStart}
                              onPlayerStateChange={handleYoutubePlayerStart}
                              onClick={handleYoutubePlayerStart}
                              //   onPlay={}
                            ></iframe>
                            {/* <div id="player"></div> */}
                            {/* <YouTube videoId={item.id.videoId} style={{width: "180px"}}/> */}
                          </div>
                          <p
                            className=""
                            style={{ fontFamily: "Verdana", fontSize: "14px" }}
                          >
                            {item.snippet.title}
                          </p>
                          <button
                            className="btn btn-primary"
                            onClick={() => handleGetQuiz(item.id.videoId)}
                          >
                            Generate Quiz
                          </button>
                        </div>
                      </>
                    );
                  })
                ) : (
                  <div
                    className="py-5 d-flex align-items-center justify-content-center"
                    style={{ height: "100vh" }}
                  >
                    <div
                      className="card border w-75"
                      style={{ height: "100%" }}
                    >
                      <div className="card-body">
                        <iframe
                          src={""}
                          className="rounded"
                          title="test"
                          allowFullScreen
                          //   onPlay={}
                        ></iframe>
                      </div>
                    </div>
                  </div>
                )}
                {/* <div style={{ width: "300px" }}>
                            <div className='card mb-2 w-100 rounded' style={{ width: "180px" }}>
                                <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" className='rounded' title='test'>
                                </iframe>
                            </div>
                            <p className='' style={{ fontFamily: "Verdana", fontSize: "14px" }}>Bohemian Rhapsody||Queen || Concert</p>
                        </div>
                        <div style={{ width: "300px" }}>
                            <div className='card mb-2 w-100 rounded' style={{ width: "180px" }}>
                                <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" className='rounded' title='test'>
                                </iframe>
                            </div>
                            <p className='' style={{ fontFamily: "Verdana", fontSize: "14px" }}>Bohemian Rhapsody||Queen || Concert</p>
                        </div> */}
              </div>
            </div>

            <div className="col-md-3 pe-2 ps-1">
              <div
                className="card"
                style={{ backgroundColor: "#7aad8c", color: "white" }}
              >
                <div className="card-body">
                  <div className="d-flex justify-content-center w-100 mb-4">
                    <h3 style={{ color: "gold" }}>LeaderBoard</h3>
                  </div>
                  <div>
                    <table class="table">
                      <thead>
                        <tr style={{ color: "black" }}>
                          <th scope="col">Rank</th>
                          <th scope="col">Student Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{ color: "white" }}>
                          <th scope="row">
                            <img
                              src="https://png.pngtree.com/element_pic/17/09/02/edd30932d1c6075b4c0e302476b03e13.png"
                              width={20}
                            />{" "}
                          </th>
                          <th scope="row">Rajdeep</th>
                        </tr>
                        <tr style={{ color: "white" }}>
                          <th scope="row">
                            <img
                              src="https://i.pinimg.com/originals/98/ec/c8/98ecc83568ecd89f20fa4e5e47f7fbd4.png"
                              width={20}
                            />{" "}
                          </th>
                          <th scope="row">Ashish</th>
                        </tr>
                        <tr style={{ color: "white" }}>
                          <th scope="row">
                            <img
                              src="https://w7.pngwing.com/pngs/919/532/png-transparent-bronze-medal-bronze-medal-gold-medal-medal-medal-gold-material-thumbnail.png"
                              width={20}
                            />{" "}
                          </th>
                          <th scope="row">Pranjal</th>
                        </tr>
                        <tr style={{ color: "white" }}>
                          <th scope="row">4</th>
                          <th scope="row">Samunder</th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* FULL SCREEN VIDEO */}
          <div className="col-md-12 d-flex flex-row align-items-center justify-content-around mt-3">
            <div className="col-md-4">
              <p style={{ fontSize: "large" }}>{question}</p>
              {answers.map((item, index) => {
                <div
                  className="p-3 border rounded"
                  style={{
                    backgroundColor: correct
                      ? "lightgreen"
                      : incorrect
                      ? "red"
                      : "white",
                  }}
                >
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                    style={{ height: "22px", width: "22px" }}
                  />
                  <label for="vehicle1">
                    <p className="mb-0 ms-5" style={{ fontSize: "large" }}>
                      {item}
                    </p>{" "}
                  </label>
                </div>;
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
