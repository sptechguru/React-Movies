import React from 'react'
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const SpinnerBox = () => {
  return (

    <div className="justifiy-between">
      <Loader
        // That is Loader Type // Ball-Triangle
        // Bars // Circles// Grid // Hearts // Oval // Puff
        // Rings // TailSpin
        // ThreeDots
        type="ThreeDots"
        color="black"
        height={100}
        width={100}
        timeout={1000} //3 secs
      />
    </div>
  )
}

export default SpinnerBox;
