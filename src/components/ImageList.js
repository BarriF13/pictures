import React from 'react'
import'./imageList.css';

const ImageList = (props) => {
 // console.log(props.images);
// const images =  props.images.map(( image) => {
//     return <img alt={image.description} key={image.id} src={image.urls.regular}/>
//   })
const images =  props.images.map(( {description, id, urls}) => {
  return <img alt={description} key={id} src={urls.regular}/>
})
  return  <div  className="image-list">
        {images}
    </div>
  
}

export default ImageList;
