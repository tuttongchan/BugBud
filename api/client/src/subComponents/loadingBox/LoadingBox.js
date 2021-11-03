import React from 'react';
import Spinner from '../../images/Spin-1s-200px.gif';

const LoadingBox = () => {
  return (
    <div>
      <img src={Spinner} alt="loading" />
    </div>
  );
};

export default LoadingBox;
