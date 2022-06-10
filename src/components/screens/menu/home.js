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
import {
  createStackNavigator,
  HeaderBackButton
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { connect } from "react-redux";
import Landing from "../sub/landing";
import AccountTab from "../tabs/accountTab";
import CardsTab from "../tabs/cardsTab";
import HelpTab from "../tabs/helpTab";
import StatisticsTab from "../tabs/statisticsTab";
//import EmergencyScreen from "../sub/emergency";
//import AddressScreen from "../sub/address";
//import TravelHistoric from "../sub/travel-historic";

const height = Math.round(Dimensions.get("window").height);
const width = Math.round(Dimensions.get("window").width);

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

class Home extends Component {
  state = {};

  drawerOpen = () => {
    return this.props.navigation.openDrawer();
  };

  render() {
    const tabBarOptions = {
      activeTintColor: "#E84E1C",
      inactiveTintColor: "black",
      indicatorStyle: { backgroundColor: "red", height: "100%" },
      pressOpacity: 1,
      pressColor: "#9BC9E2",
      style: {
        backgroundColor: "#ffffff",
        borderRadius: 36,
        margin: 24,
        height: 76,
        width: "90%"
      }
    };

    return (
      <NavigationContainer independent={true}>
        <Tab.Navigator tabBarOptions={tabBarOptions}>
          <Tab.Screen
            name="accountTab"
            component={AccountTab}
            options={{
              tabBarIcon: ({ color }) => (
                <Image
                  source={require("../../../../assets/images/Tabs/Account.png")}
                />
              ),
              tabBarLabel: "Home",
              headerShown: null,
              headerStyle: {
                backgroundColor: "#F6F7FB"
              }
            }}
          />
          <Tab.Screen
            name="statisticsTab"
            component={StatisticsTab}
            options={{
              tabBarIcon: ({ color }) => (
                <Image
                  source={require("../../../../assets/images/Tabs/Stat.png")}
                />
              ),
              tabBarLabel: "Statistics",
              headerShown: null,
              headerStyle: {
                backgroundColor: "#F6F7FB"
              }
            }}
          />
          <Tab.Screen
            name="cardsTab"
            component={CardsTab}
            options={{
              tabBarIcon: ({ color }) => (
                <Image
                  source={require("../../../../assets/images/Tabs/Cards.png")}
                />
              ),
              tabBarLabel: "Cards",
              headerShown: null,
              headerStyle: {
                backgroundColor: "#F6F7FB"
              }
            }}
          />
          <Tab.Screen
            name="helpTab"
            component={HelpTab}
            options={{
              tabBarIcon: ({ color }) => (
                <Image
                  source={require("../../../../assets/images/Tabs/help.png")}
                />
              ),
              tabBarLabel: "Help",
              headerShown: null,
              headerStyle: {
                backgroundColor: "#F6F7FB"
              }
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    tok: state.token
  };
};

const mapDispatchStoreToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchStoreToProps)(Home);
