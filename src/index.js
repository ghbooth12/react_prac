import React from 'react';
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar'

// create a new component. this component should produce html.
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated html and put it in the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));
