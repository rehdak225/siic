import { Alert } from "react-native";
import { networkChecker } from "../../../functions/network";

const netDisplay = () => {
  const status = networkChecker();
  console.log("networkChecker", status);
  if (status) {
    return 1;
  } else {
    return Alert.alert("Oops", "Vous n'êtes pas connecté à internet");
  }
};

export { netDisplay };
