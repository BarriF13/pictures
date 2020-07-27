import React, { Component } from 'react'

export class ImageCard extends Component {
constructor(props){
  super(props);

  this.state = { spans: 0 };

  this.imageRef = React.createRef();
}
// for accessing image ref we need to use component did mount
componentDidMount(){
  // console.log(this.imageRef.current.clientHeight);
  this.imageRef.current.addEventListener('load', this.setSpans);
}
setSpans=()=>{
 // console.log(this.imageRef.current.clientHeight);
 const height = this.imageRef.current.clientHeight;

 const spans =Math.ceil(  height / 10 );

 this.setState({spans : spans});
}
  render() {
    const{ description, urls} = this.props.image;
    return (
      <div style={{ gridRowEnd: ` span ${this.state.spans}` }}>
        {/* img is jsx not Dom element */}
        <img
        ref={this.imageRef}
         alt={description}
        src={urls.regular}/>
      </div>
    )
  }
}

export default ImageCard;
