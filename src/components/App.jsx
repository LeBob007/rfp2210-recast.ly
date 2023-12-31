import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';
//import debounce from '../../node_modules/lodash/debounce.js';
// import  from '/node_modules/lodash/lodash.js';

const { useState, useEffect, useCallback } = React;

var App = () => {

  const [data, setData] = useState([]);
  const [video, setVideo] = useState(null);

  const videoClick = (event) => {
    setVideo(event);
  };

  const search = (query) => {
    searchYouTube(query, (videos) => {
      setData(videos);
      setVideo(videos[0]);
    });
  };

  const debouncedSearch = useCallback(
    _.debounce(search, 500), []);

  // search('');
  useEffect((query) => {
    var string = query || '';
    search(string);
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><Search search={debouncedSearch}/></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><VideoPlayer video={video}/></div>
        </div>
        <div className="col-md-5">
          <div><VideoList videos={data} videoClick={videoClick}/></div>
        </div>
      </div>
    </div>
  );
};


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
