import Video from "./Video";

const VideoList = (props) =>{
    
    const videos = props.videos;
    return(
        <div className="VideoList" style={{paddingTop:'17px'}}>
            {videos.map((video)=>{
                    return <Video key={video.id.videoId} video={video} onVideoSelect={props.onVideoSelect} title={video.snippet.title} channelTitle={video.snippet.channelTitle} imgUrl={video.snippet.thumbnails.high.url} />
                })}
        </div>
    )
}

export default VideoList