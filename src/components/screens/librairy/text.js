import React from "react";
import { Text } from "react-native";

const TextDisplay = ({
  text,
  size,
  weight,
  align,
  color,
  marginLeft,
  style
}) => {
  return (
    <Text
      style={{
        fontSize: size,
        alignSelf: align ? align : null,
        fontWeight: weight,
        color: color,
        marginLeft: marginLeft,
        ...style
      }}
    >
      {text}
    </Text>
  );
};

export default TextDisplay;
