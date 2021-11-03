import './tabsingleimage.css';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { deleteImage, imageDetails } from '../../actions/imageActions';
import LoadingBox from '../../subComponents/loadingBox/LoadingBox';

const TabSingleImage = ({ imageId }) => {
  const history = useHistory();

  const dispatch = useDispatch();
  const singleImage = useSelector((state) => state.imageDetails);
  const { loading, error, image } = singleImage;
  console.log(singleImage);

  useEffect(() => {
    dispatch(imageDetails(imageId));
  }, [dispatch, imageId]);
  console.log(imageId);

  const deleteHandler = (id) => {
    dispatch(deleteImage(id));
    history.push('/images');
    window.location.reload();
  };

  return (
    <div className="tabsingleimage-container">
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <></>
      ) : (
        <div>
          <div className="tabsingleimage-name-container">
            <h1 className="tabsingleimage-heading">{image.imageName}</h1>
            <i className="fa-solid fa-pen-to-square"></i>
            <i
              className="fa-solid fa-trash-can"
              onClick={() => deleteHandler(image._id)}
            ></i>
          </div>
          <p className="tabsingleimage-desc">{image.desc}</p>
          <img src={image.image} alt="" className="tabsingleimage-img" />
        </div>
      )}
    </div>
  );
};

export default TabSingleImage;
