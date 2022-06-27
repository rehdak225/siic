import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
  Image,
  Pressable,
  ImageBackground,
  TextInput,
  Modal
} from "react-native";

const Card1 = ({ text, ...props }) => {
  state = {
    modal: false
  };
  return <Text>{text}</Text>;
};

export default Card1;
