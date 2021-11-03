import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
          <h1 className='tabsingleimage-heading'>{image.imageName}</h1>
          <p className='tabsingleimage-desc'>{image.desc}</p>
          <img src={image.image} alt="" className='tabsingleimage-img' />
        </div>
      )}
    </div>
  );
};

export default TabSingleImage;
