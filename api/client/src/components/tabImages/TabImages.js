import { useState } from 'react';
import './tabimages.css';
import Modal from 'react-modal';
import ImageList from '../imageList/ImageList';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import storage from '../../firebase';
import { useDispatch } from 'react-redux';
import { createImage } from '../../actions/imageActions';

const TabImages = () => {
  const [search, setSearch] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);

  const [imageForm, setImageForm] = useState(null);
  const [image, setImage] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleChange = (e) => {
    const value = e.target.value;
    setImageForm({ ...imageForm, [e.target.name]: value });
  };

  const upload = () => {
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, `/items/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setImageForm((prev) => {
            return { ...prev, image: url };
          });
        });
      }
    );
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload();
    setTimeout(() => setUploadStatus(true), 2000);
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createImage(imageForm));
    window.location.reload();
  };

  return (
    <div className="tabimages-container">
      <div className="tabimages-top-container">
        <h4 className="tabimages-heading">Images</h4>
        <div className="tabbugs-top-right-container">
          <input
            type="text"
            placeholder="Search..."
            className="tabbugs-input"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="search-button">
            <i className="fas fa-search"></i>
          </div>
          <div className="addbug-button" onClick={openModal}>
            <i className="fas fa-plus"></i>
            add image
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Modal"
      >
        <div className="modal-container">
          <form>
            {image && (
              <img
                className="writeImg"
                src={URL.createObjectURL(image)}
                alt=""
                // alt="form image"
              />
            )}
            <div className="writeFormGroup">
              <label htmlFor="fileInput">
                <i className="writeIcon fas fa-plus"></i>
              </label>
              <input
                type="file"
                id="fileInput"
                style={{ display: 'none' }}
                name="photo"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <div className="images-modal-input-container">
              <div className="images-modal-title-container">
                <h4>Title:</h4>
                <input type="text" name="imageName" onChange={handleChange} />
              </div>
              <div className="images-modal-desc-container">
                <h4>Desc:</h4>
                <input type="text" name="desc" onChange={handleChange} />
              </div>
            </div>
            <div className="images-modal-button-container">
              <button
                type="submit"
                className="modal-submit-button upload-image-button"
                onClick={handleUpload}
              >
                Upload Image
                {/* {uploadStatus ? 'Loading...' : 'Upload Image'} */}
              </button>
              {uploadStatus ? (
                <>
                  <div className="arrow-down-container">
                    <i className="fa-solid fa-arrow-down"></i>
                  </div>
                  <button
                    type="submit"
                    className="modal-submit-button"
                    onClick={handleSubmit}
                  >
                    Post Image
                  </button>
                </>
              ) : null}
            </div>
          </form>
        </div>
      </Modal>
      <ImageList search={search} />
    </div>
  );
};

export default TabImages;
