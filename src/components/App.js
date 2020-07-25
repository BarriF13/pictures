import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';


class App extends Component {


  onSearchSubmit(term) {
    //return term
    // console.log(term);
    // now adding axios to get the search request
    // we are getting -1 the address 2- object 
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID HGZZbQmrfhvhBgq5VufA_HJ0rP1Fr6qyePvS8-yp_Kc'
      }
    }).then((res) => {
      console.log(res.data.results);
    })

  }


  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}
export default App;
