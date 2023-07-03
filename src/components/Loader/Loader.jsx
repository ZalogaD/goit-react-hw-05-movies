import React from 'react';
import { BallTriangle } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className={styled.overlay}>
      <BallTriangle color="#00BFFF" height="50" width="50" radius="9" />
    </div>
  );
};

export default Loader;
