import React from "react";
import youtube from "./api/youtube";
import Header from './components/Header';
import SideBar from "./components/SideBar";
import VideoContainer from "./components/VideoContainer";
import VideoList from "./components/VideoList";

class App extends React.Component {

  state = {videos:[],selectedvideo:null}

  componentDidMount(){
    this.onTermSubmit('chennai super kings');
  }


  onTermSubmit = async (term) => {
    const response = await youtube.get('/search',{
      params:{
        q:term
      }
    })
    console.log(response.data.items)
    this.setState({
      videos:response.data.items,
      selectedvideo: response.data.items[0]
    })
  } 

  onVideoSelect = (vid) =>{
    this.setState({selectedvideo:vid})
  }


  render(){
    return (
      <div>
        <Header onFormSubmit={this.onTermSubmit}/>
        <div className="mainBody">
          <SideBar/>
          <VideoContainer video={this.state.selectedvideo} />
          <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
        </div>
      </div>
    );
  }
}

export default App;
