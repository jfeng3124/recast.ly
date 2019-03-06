import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import exampleVideoData from '../data/exampleVideoData.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import searchYoutube from '../lib/searchYoutube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      videos: exampleVideoData
    };
  }

  componentDidMount () {
    searchYoutube({max: 5, key: YOUTUBE_API_KEY, query: ''}, this.changeVideo.bind(this));
  }

  videoClick (video) {
    this.setState({currentVideo: video});
  }

  changeVideo (data) {
    this.setState({currentVideo: data[0], videos: data});
  }

  searchClick (searchTerm) {
    console.log(searchTerm);
    var searchObject = {
      query: searchTerm,
      max: 5,
      key: YOUTUBE_API_KEY
    };
    searchYoutube(searchObject, this.changeVideo.bind(this));
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h1>Recast.ly<Search searchClick={this.searchClick.bind(this)}/></h1></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.currentVideo} /></div>
          </div>
          <div className="col-md-5">
            <div>Related Videos<VideoList videos={this.state.videos} click={this.videoClick.bind(this)}/></div>
          </div>
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
