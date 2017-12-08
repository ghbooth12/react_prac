import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyAQWwQB2gg13bzsaIWvTRaHqoc8yvE_RFM';

// create a new component. this component should produce html.
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
      this.setState({ videos }); // same as this.setState({ videos: videos });
    });
  }

  render() {
    // passing data like this == passing 'props' called videos
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's generated html and put it in the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));
