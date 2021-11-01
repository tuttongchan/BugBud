import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { imageDetails } from '../../actions/imageActions';
import './imageitem.css';

const ImageItem = ({ image }) => {
  console.log(image);

  return (
    <Link to={`image/${image._id}`} style={{textDecoration: 'none', color: '#000'}}>
      <div className="imageitem-card">
        <div className="image-top-containter">
          <img className="imageitem-img" src={image.image} alt="" />
        </div>
        <div className="image-bottom-containter">{image.imageName}</div>
      </div>
    </Link>
  );
};

export default ImageItem;
