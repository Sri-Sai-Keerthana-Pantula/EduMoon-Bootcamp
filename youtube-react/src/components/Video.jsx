function Video(props) {
  return (
    <div className="video" onClick={()=>props.onVideoSelect(props.video)}>
      <div className="video__thumbnail">
        <img
          src={props.imgUrl}
          alt="thumbnail"
        />
      </div>
      <div className="video__details">
        {/* <div className="author">
          <img
            src="https://yt3.ggpht.com/ytc/AAUvwnjs39FzjzREzTGZS6kP0YEWRHsNVnAjQ2tYRoGung=s68-c-k-c0x00ffffff-no-rj"
            alt="thumbnail"
          />
        </div> */}
        <div className="title">
          <h3>{props.title}</h3>
          {/* <a
            href="https://www.youtube.com/channel/UCmo0ZANU_oN_hWy77Hjuuxg"
            target="_blank"
            rel="noreferrer"
          > */}
            {props.channelTitle}
          {/* </a> */}
          {/* <span>8.4 M Views &#8226; 1 Month Ago </span> */}
        </div>
      </div>
    </div>
  );
}

export default Video;
