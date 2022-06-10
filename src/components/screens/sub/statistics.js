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
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import RNPickerSelect from "react-native-picker-select";

const height = Math.round(Dimensions.get("window").height);
const width = Math.round(Dimensions.get("window").width);

const images = [
  "https://source.unsplash.com/1024x768/?nature",
  "https://source.unsplash.com/1024x768/?water",
  "https://source.unsplash.com/1024x768/?girl",
  "https://source.unsplash.com/1024x768/?tree"
];

class Statistics extends Component {
  render() {
    return (
      <SafeAreaView style={{ backgroundColor: "#F6F7FB", height: "100%" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              marginLeft: 10,
              justifyContent: "flex-start",
              alignItems: "center",
              marginRight: "40%"
            }}
          >
            <Tabs />
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Statistics</Text>
          </View>
          <View style={{}}>
            <View
              style={{
                backgroundColor: "#E84E1C",
                width: "100%",
                alignItems: "center",
                height: 50,
                justifyContent: "center"
              }}
            >
              <Text style={{ color: "white", fontSize: 15 }}>
                Activity this month
              </Text>
            </View>
            <Calendar
              // Collection of dates that have to be marked. Default = {}
              style={{
                color: "#E84E1C"
              }}
              markingType={"period"}
              markedDates={{
                "2022-06-22": {
                  color: "#E84E1C",
                  textColor: "black"
                }
              }}
              onDayPress={(day) => {
                console.log("selected day", day);
              }}
              theme={{
                arrowColor: "#E84E1C"
              }}
            />
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 15,
                marginLeft: 15,
                marginRight: 15,
                justifyContent: "space-between"
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  position: "relative",
                  top: 10
                }}
              >
                Expenses
              </Text>
              <TouchableOpacity
                style={{
                  width: 80,
                  height: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                  marginTop: 10,
                  borderWidth: 1,
                  borderColor: "grey"
                }}
                onPress={() => {
                  this.setModalVisible1(false);
                  navigation.navigate("Home");
                }}
              >
                <RNPickerSelect
                  onValueChange={(value) => console.log(value)}
                  placeholder={{
                    label: "Last 7 days",
                    value: null
                  }}
                  items={[
                    { label: "Last 7 days", value: "Last 7 days" },
                    { label: "Last 30 days", value: "Last 30 days" }
                  ]}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginLeft: 15,
              justifyContent: "space-between"
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                style={{ marginTop: 15, marginRight: 10 }}
                source={require("../../../../assets/images/Statistics/jumia.png")}
              />
              <View style={{ marginTop: 15 }}>
                <Text>Jumia CI</Text>
                <Text>Fev 07 - 10:09</Text>
              </View>
            </View>
            <View style={{ marginTop: 15 }}>
              <Text>35 250 FCFA</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginLeft: 15,
              justifyContent: "space-between"
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                style={{ marginTop: 15, marginRight: 10 }}
                source={require("../../../../assets/images/Statistics/netflix.png")}
              />
              <View style={{ marginTop: 15 }}>
                <Text>Netflix</Text>
                <Text>Fev 10 - 19:47</Text>
              </View>
            </View>
            <View style={{ marginTop: 15 }}>
              <Text>25 000 FCFA</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginLeft: 15,
              justifyContent: "space-between"
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                style={{ marginTop: 15, marginRight: 10 }}
                source={require("../../../../assets/images/Statistics/themeforest.png")}
              />
              <View style={{ marginTop: 15 }}>
                <Text>ThemeForest</Text>
                <Text>Fev 15 - 11:30</Text>
              </View>
            </View>
            <View style={{ marginTop: 15 }}>
              <Text>29 125 FCFA</Text>
            </View>
          </View>
        </ScrollView>
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

export default connect(mapStateToProps, mapDispatchStoreToProps)(Statistics);
