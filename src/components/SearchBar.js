import React, { Component } from 'react'

export class SearchBar extends Component {

  onInputChange(e){
    e.preventDefault();
    console.log(e.target.value);
  }
  render() {
    return (
      <div className="ui segment ">
        <form className="ui form">
          <div className="field">
          <label htmlFor="">Image Search</label>
          <input 
          type="text"
          placeholder="Search"
          onChange={this.onInputChange}
          />
          </div>  
        </form>
      </div>
    )
  }
}

export default SearchBar;
