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
import { SafeAreaView } from "react-native-safe-area-context";

const height = Math.round(Dimensions.get("window").height);
const width = Math.round(Dimensions.get("window").width);

const images = [
  "https://source.unsplash.com/1024x768/?nature",
  "https://source.unsplash.com/1024x768/?water",
  "https://source.unsplash.com/1024x768/?girl",
  "https://source.unsplash.com/1024x768/?tree"
];

class Landing extends Component {
  state = {};
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: colors[2] }}>
        <View
          style={{
            flexDirection: "row",
            width: width * 0.87,
            height: height * 0.1,
            alignSelf: "center",
            marginTop: height * 0.025,
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <LogoOther
            style={{
              width: 100,
              height: width * 0.1
            }}
          />
          <ButtonDisplay
            text={
              <FontAwesome name="user-circle" size={30} color={colors[0]} />
            }
            onPress={() => {
              this.props.route.params.openDrawer();
            }}
            style={{ marginRight: width * 0.01 }}
          />
        </View>
        <ScrollView>
          <View
            style={{ width: width, height: 130, marginTop: height * 0.0125 }}
          >
            <MyCarousel
              images={images}
              dotColor={colors[1]}
              resizeMethod={"resize"}
              resizeMode={"cover"}
              sliderBoxHeight={130}
              ImageComponentStyle={{
                borderRadius: 10,
                width: width * 0.87
              }}
              imageLoadingColor={colors[4]}
            />
          </View>
          <View
            style={{
              width: width * 0.87,
              height: height * 0.26,
              flexDirection: "row",
              alignSelf: "center",
              justifyContent: "space-between"
            }}
          >
            {[
              {
                text: "Commander une course",
                value: "trip",
                path: dist
              },
              {
                text: "Louer un véhicule",
                value: "rent",
                path: key
              }
            ].map((item) => (
              <ButtonDisplay
                text={
                  <View
                    style={{
                      flexDirection: "column",
                      // justifyContent: "center",
                      height: "100%"
                    }}
                  >
                    <Image
                      source={item.path}
                      style={{
                        width: width * 0.11,
                        height: width * 0.11,
                        marginTop: width * 0.06,
                        alignSelf: "center"
                      }}
                    />
                    <TextDisplay
                      text={item.text}
                      size={15}
                      weight={"400"}
                      color={colors[3]}
                      style={{
                        width: "95%",
                        alignSelf: "center",
                        height: "25%",
                        textAlign: "center",
                        marginTop: width * 0.035
                      }}
                    />

                    <Ionicons
                      name="arrow-forward-circle-outline"
                      color={colors[3]}
                      size={35}
                      style={{ alignSelf: "center", marginTop: width * 0.005 }}
                    />
                  </View>
                }
                onPress={() => {}}
                style={{
                  marginTop: height * 0.02,
                  backgroundColor: colors[4],
                  width: width * 0.42,
                  borderRadius: 10,
                  alignItems: "center"
                }}
              />
            ))}
          </View>
          <TextDisplay
            text={"ACTIONS RAPIDE"}
            size={15}
            weight={"600"}
            color={colors[0]}
            style={{
              marginLeft: width * 0.075,
              marginTop: height * 0.025
            }}
          />
          {[
            { text: "Mes courses et locations", value: "travel-historic" },
            { text: "Gérer mes adresses", value: "address" },
            { text: "Gérer mes contacts d'urgence", value: "emergency" }
          ].map((item) => (
            <ButtonDisplay
              onPress={() => this.props.navigation.navigate(item.value)}
              text={
                <View
                  style={{
                    flexDirection: "row",
                    // justifyContent: "center",
                    width: "100%",
                    height: "100%",
                    alignItems: "center"
                  }}
                >
                  <TextDisplay
                    text={item.text}
                    size={15}
                    weight={"400"}
                    color={colors[2]}
                    style={{
                      width: "85%",
                      height: "28%",
                      marginLeft: width * 0.05
                    }}
                  />
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={30}
                    color={colors[2]}
                  />
                </View>
              }
              style={{
                marginTop: height * 0.02,
                backgroundColor: colors[0],
                width: width * 0.87,
                height: 60,
                borderRadius: 10,
                alignSelf: "center"
              }}
            />
          ))}
          <View style={{ height: 50 }}></View>
        </ScrollView>
      </View>
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

export default connect(mapStateToProps, mapDispatchStoreToProps)(Landing);
