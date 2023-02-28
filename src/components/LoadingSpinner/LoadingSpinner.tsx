import React from "react";
import { LoadingSpinnerContainer } from "./style";
import loadingGif from "../../assets/Rolling-1s-200px.gif";

const LoadingSpinner = () => {
  return (
    <LoadingSpinnerContainer>
      <img src={loadingGif} alt="loading gif"></img>
    </LoadingSpinnerContainer>
  );
};

export default LoadingSpinner;
