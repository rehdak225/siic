import NetInfo from "@react-native-community/netinfo";
import { Alert } from "react-native";

const networkChecker = async () => {
  let connected = false;
  await NetInfo.fetch().then((state) => {
    console.log("Connection type", state.type);
    console.log("Is connected?", state.isConnected);
    connected = state.isConnected;
    // return connected;
  });
  return connected;
};

export { networkChecker };
