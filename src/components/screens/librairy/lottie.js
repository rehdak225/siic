import LottieView from "lottie-react-native";
import React from "react";

const Lottie = ({ animation, width, height, loop, speed, style }) => {
  return (
    <LottieView
      source={animation}
      autoPlay={true}
      loop={loop}
      style={{
        width: width,
        height: height,
        ...style
      }}
      speed={speed}
    />
  );
};

export default Lottie;
