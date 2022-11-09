// TODO: Render the `App` component to the DOM
import App from './components/App.js';

// const root = ReactDOM.createRoot(document.getElementById('app'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// const { useState, useEffect, useCallback } = React;

// const [data, setData] = useState([]);
// const [video, setVideo] = useState({});
// var appStarted = false;

// const search = (query) => {
//   searchYouTube(query, (videos) => {
//     setData(videos);
//     setVideo(videos[0]);
//     startApp();
//   });
// };

// var startApp = function () {

//   if (!appStarted) {

//     ReactDOM.render(<App />, document.getElementById('app'));
//     appStarted = true;
//   }

// };

// search('');

ReactDOM.render(<App />, document.getElementById('app'));