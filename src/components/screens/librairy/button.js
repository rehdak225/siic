import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import * as Haptics from "expo-haptics";

const ButtonDisplay = ({ text, onPress, style, textStyle, disabled }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        Haptics.selectionAsync();
        onPress();
      }}
      style={style}
      disabled={disabled ? disabled : false}
    >
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonDisplay;
