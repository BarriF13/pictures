import React, { Component } from 'react';
import unsplash from '../api/unsplash';

import SearchBar from './SearchBar';
import ImageList from './ImageList'


class App extends Component {
  // to show the response we need to have state so we init below
  // we want to get images and they come in an array so we init in empty array
  state = {images: [] };

  onSearchSubmit = async (term)=> {
    //return term
    // console.log(term);
    // now adding axios to get the search request
    // we are getting -1 the address 2- object 
    const res = await unsplash.get('/search/photos', {
      params: { query: term },
    
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

        <ImageList images={this.state.images} />
        {/* Found : {this.state.images.length} images */}
      </div>
    );
  }
}
export default App;
