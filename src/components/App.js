import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';


class App extends Component {
  // to show the response we need to have state so we init below
  // we want to get images and they come in an array so we init in empty array
  state = {
    images: []
  }

  onSearchSubmit = async (term)=> {
    //return term
    // console.log(term);
    // now adding axios to get the search request
    // we are getting -1 the address 2- object 
    const res = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID HGZZbQmrfhvhBgq5VufA_HJ0rP1Fr6qyePvS8-yp_Kc'
      }
    })

    // })
    // .then((res) => {
    // console.log(res.data.results);
    // })
   
    this.setState({ images: res.data.results});

  }


  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found : {this.state.images.length} images
      </div>
    );
  }
}
export default App;
