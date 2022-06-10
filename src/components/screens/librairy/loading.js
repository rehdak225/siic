import { ActivityIndicator } from "react-native-paper";
import { colors } from "../../../constants/colors";

const Loading = () => {
  return <ActivityIndicator color={colors[1]} size="small" />;
};

export default Loading;
