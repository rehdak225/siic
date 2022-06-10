import React from "react";
import { Image } from "react-native";

import logo from "../../../../assets/icon.png";

const LogoSmall = ({ width, height, alignSelf, marginLeft, marginTop }) => {
  return (
    <Image
      style={{
        width: width,
        height: height,
        alignSelf: alignSelf ? alignSelf : null,
        marginLeft: marginLeft ? marginLeft : null,
        marginTop: marginTop ? marginTop : null
      }}
      source={logo}
    />
  );
};

export default LogoSmall;
