import React from "react";

class VideoContainer extends React.Component {
  render() {
    let video = this.props.video;
    if (!video) {
      return (
        <center>
          <h1>Loading..!</h1>
        </center>
      );
    }
    const videoSrc = `https://youtube.com/embed/${video.id.videoId}`;
    return (
      <div className="videos">
        <div className="videos__container">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              title="video player"
              className="embed-responsive-item"
              src={videoSrc}
              allowFullScreen
            ></iframe>
          </div>
          <div style={{ margin: "10px 0", padding: "5px 0" }}>
            <h4>
              <b>{video.snippet.title}</b>
            </h4>
            <h5>{video.snippet.channelTitle}</h5>
            <h6>{video.snippet.description}</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoContainer;
