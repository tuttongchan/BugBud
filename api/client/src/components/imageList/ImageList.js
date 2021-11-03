import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { imagesDetails } from '../../actions/imageActions';
import ImageItem from '../../subComponents/imageItem/ImageItem';
import LoadingBox from '../../subComponents/loadingBox/LoadingBox';
import './imagelist.css';

const ImageList = ({ search }) => {
  const dispatch = useDispatch();
  const allImages = useSelector((state) => state.imagesDetails);
  const { loading, error, images } = allImages;

  useEffect(() => {
    dispatch(imagesDetails());
  }, [dispatch]);

  return (
    <div className="imagelist-container">
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <></>
      ) : (
        <div className="bugitem-container">
          {images
            .filter((image) => {
              if (search === '') {
                return image;
              } else if (
                image.imageName.toLowerCase().includes(search.toLowerCase())
              ) {
                return image;
              }
            })
            .map((image) => (
              <ImageItem key={image._id} image={image} />
            ))}
          {/* {images.map((image) => (
            <ImageItem key={image._id} image={image} />
          ))} */}
        </div>
      )}
    </div>
  );
};

export default ImageList;
