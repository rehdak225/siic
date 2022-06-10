import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
  Image
} from "react-native";
// import Modal from "react-native-modal";
// import BottomSheet from "reanimated-bottom-sheet";
import RBSheet from "react-native-raw-bottom-sheet";
import {
  createStackNavigator,
  HeaderBackButton
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Rating, AirbnbRating } from "react-native-elements";
import {
  Searchbar,
  IconButton,
  Colors,
  Button,
  Title,
  Avatar,
  Card,
  Paragraph,
  ProgressBar
} from "react-native-paper";
import { connect } from "react-redux";
import { colors } from "../../../constants/colors";
import TextDisplay from "../librairy/text";
import LogoOther from "../librairy/logo-other";
import ButtonDisplay from "../librairy/button";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Carousel from "react-native-snap-carousel";
import MyCarousel from "../element/carousel";
import key from "../../../../assets/key.png";
import dist from "../../../../assets/dist.png";
import Tabs from "../../tabs";
import { SafeAreaView } from "react-native-safe-area-context";

const height = Math.round(Dimensions.get("window").height);
const width = Math.round(Dimensions.get("window").width);

const images = [
  "https://source.unsplash.com/1024x768/?nature",
  "https://source.unsplash.com/1024x768/?water",
  "https://source.unsplash.com/1024x768/?girl",
  "https://source.unsplash.com/1024x768/?tree"
];

class Help extends Component {
  render() {
    return (
      <SafeAreaView>
        <View
          style={{
            flexDirection: "row",
            marginLeft: 10,
            justifyContent: "space-between"
          }}
        >
          <Tabs />
          <Text>Hey</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    token: state.token
  };
};

const mapDispatchStoreToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchStoreToProps)(Help);
