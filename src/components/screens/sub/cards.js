import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
  Image,
  ImageBackground
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

class Cards extends Component {
  render() {
    return (
      <SafeAreaView style={{ backgroundColor: "#F6F7FB", height: "100%" }}>
        <View
          style={{
            flexDirection: "row",
            marginLeft: 10,
            justifyContent: "space-between",
            alignItems: "center",
            marginRight: "45%"
          }}
        >
          <Tabs />
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Cards</Text>
        </View>

        <View style={{ margin: 15 }}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <ImageBackground
              source={require("../../../../assets/images/AccountPage/Card1.png")}
              resizeMode="cover"
              borderRadius={10}
              style={{
                width: "100%",
                height: 200,
                borderRadius: 10
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  margin: 10
                }}
              >
                <Text style={{ color: "white", fontSize: 15 }}>
                  Current Account
                </Text>
                <Text style={{ color: "white", fontSize: 15 }}>SIIC</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  height: "50%",
                  marginLeft: 10
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 25,
                    fontWeight: "bold"
                  }}
                >
                  **** **** **** 2118
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <View style={{ marginLeft: 15 }}>
                    <Text style={{ color: "white" }}>Exp date</Text>
                    <Text style={{ color: "white" }}>12/25</Text>
                  </View>
                  <View style={{ marginLeft: 15 }}>
                    <Text style={{ color: "white" }}>CVV</Text>
                    <Text style={{ color: "white" }}>***</Text>
                  </View>
                </View>
                <View>
                  <Image
                    style={{ marginTop: 15, marginRight: 10 }}
                    source={require("../../../../assets/images/AccountPage/visa.png")}
                  />
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
        <View style={{ marginLeft: 15 }}>
          <Text style={{ fontSize: 15 }}>Check your balance</Text>
          <Text style={{ fontSize: 15, marginTop: 15, fontWeight: "bold" }}>
            Funding
          </Text>
          <Text>Lorem ipsum dolor sit amet, consectetur </Text>
          <TouchableOpacity
            style={{
              width: 150,
              height: 30,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#E84E1C",
              borderRadius: 8,
              marginTop: 10
            }}
            onPress={() => {}}
          >
            <Text
              style={{
                color: "#E5E5E5",
                fontSize: 15
              }}
            >
              Apply For Funding
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginLeft: 15, flexDirection: "row", marginTop: 30 }}>
          <Image
            style={{ marginTop: 15, marginRight: 10 }}
            source={require("../../../../assets/images/Cards/Vector.png")}
          />
          <Text style={{ position: "relative", top: 15 }}>
            Block the card for a period
          </Text>
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

export default connect(mapStateToProps, mapDispatchStoreToProps)(Cards);
