import React, { Component } from 'react'

export class SearchBar extends Component {
  //controlled element
  state ={  term: ''  };
  /* ** uncontrolled element :
  onInputChange(e){
    e.preventDefault();
    console.log(e.target.value);
  }
  */
 //2- changing function to arrow function do the binding  this.sate.term = this.state.bind(this);
  onFormSubmit=(e)=>{
    e.preventDefault();
    console.log(this.state.term);
  }
  //3- third way of binding this.state.term -- 
  // onFormSubmit(e){
  //   e.preventDefault();
  //   console.log(this.state.term);
  // }
  render() {
   
    return (
      <div className="ui segment ">
        {/* <form onSubmit={ (e)=>this.onFormSubmit(e)}  className="ui form"> this is for line third way */}
        <form onSubmit={ this.onFormSubmit}  className="ui form">
          <div className="field">
          <label htmlFor="">Image Search</label>
          <input 
          type="text"
          placeholder="Search"
          //input already know the value but we put it down again
          value={this.state.term}
          // ** 1- onChange={this.onInputChange} 2- e will call 3- data will pass tp value on the line up because it keep changing the state by setState method
          onChange={ e => this.setState({ term: e.target.value.toUpperCase() })}
          />
       
          </div>  
        </form>
      </div>
    )
  }
}

export default SearchBar;
