import React from "react";
import { Image } from "react-native";

import logo from "../../../../assets/go-png.png";

const LogoOther = ({ style }) => {
  return (
    <Image
      style={{
        ...style
      }}
      source={logo}
    />
  );
};

export default LogoOther;
