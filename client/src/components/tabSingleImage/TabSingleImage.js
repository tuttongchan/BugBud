import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { imageDetails } from '../../actions/imageActions';
import LoadingBox from '../../subComponents/loadingBox/LoadingBox';
import './tabsingleimage.css';

const TabSingleImage = ({ imageId }) => {
  const dispatch = useDispatch();
  const singleImage = useSelector((state) => state.imageDetails);
  const { loading, error, image } = singleImage;
  console.log(singleImage);

  useEffect(() => {
    dispatch(imageDetails(imageId));
  }, [dispatch, imageId]);
  console.log(imageId);

  return (
    <div className="tabsingleimage-container">
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <></>
      ) : (
        <div>
          <h1>{image.imageName}</h1>
          <p>{image.desc}</p>
        </div>
      )}
    </div>
  );
};

export default TabSingleImage;
