import React from 'react';
import { Link } from 'react-router-dom';
import './imageitem.css';

const ImageItem = ({ image }) => {
  console.log(image._id)
  return (
    <Link to={`image/${image._id}`}>
      <div className="imageitem-card">{image._id}</div>
    </Link>
  );
};

export default ImageItem;
