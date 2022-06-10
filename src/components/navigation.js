import React, { Component, useState } from "react";
import * as EmailValidator from "email-validator";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  Dimensions,
  ActivityIndicator,
  TextInput,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableOpacity,
  FlatList,
  Modal,
  Pressable
} from "react-native";
import { Button, Title } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Axios from "axios";
import {
  createStackNavigator,
  HeaderBackButton
} from "@react-navigation/stack";
import { connect, useDispatch, useSelector } from "react-redux";
import IntlPhoneInput from "react-native-intl-phone-input";
import Tabs from "./tabs";
import { LinearGradient } from "expo-linear-gradient";

// IMAGE IMPORTATION
import logo from "../../assets/go-png.png";
//import { TouchableOpacity } from "react-native-gesture-handler";
import CountDown from "react-native-countdown-component";
import { useEffect } from "react";
import * as Crypto from "expo-crypto";
import * as Location from "expo-location";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import * as ImagePicker from "expo-image-picker";
// import { AsyncStorage } from "@react-native-community/async-storage";
import Ionicons from "react-native-vector-icons/Ionicons";
import SelectDropdown from "react-native-select-dropdown";
import { Overlay } from "react-native-elements";
import { Audio } from "expo-av";
import * as Haptics from "expo-haptics";

import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner
} from "expo-firebase-recaptcha";
// import * as firebase from "expo-firebase-core";
import * as firebase from "firebase";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { networkChecker } from "../functions/network";

import {
  POST_USER_DATA,
  POST_USER_TOKEN,
  SET_CONFIG
} from "../../store/actions";

import { service_user, service_zone } from "../constants/url";
import {
  user as userRoute,
  create_user,
  country,
  get_all_country,
  check_user,
  login_user,
  login_path_user
} from "../constants/routes";
import { colors } from "../constants/colors";
import LogoSmall from "./screens/librairy/logo";
import TextDisplay from "./screens/librairy/text";
import Lottie from "./screens/librairy/lottie";
import ButtonDisplay from "./screens/librairy/button";
import { AntDesign } from "@expo/vector-icons";
import { Aa } from "../functions/Aa";
import InputDisplay from "./screens/librairy/input";
import { MakeRequestAsync } from "../functions/axios";
import { netDisplay } from "./screens/librairy/net";
import { GET, POST } from "../constants/request-type";
import Loading from "./screens/librairy/loading";
//import { country_id } from "../constants/fixed-data";
import {
  EmailValidation,
  PasswordValidation
} from "../functions/validateEmailPassword";
import Home from "./screens/menu/home";
import CodeInput from "react-native-confirmation-code-input";
import LottieView from "lottie-react-native";
import {
  Circle,
  Text as SvgText,
  TextPath,
  TSpan,
  G,
  Svg,
  Path,
  Defs,
  ClipPath
} from "react-native-svg";

const width = Math.round(Dimensions.get("window").width);
const height = Math.round(Dimensions.get("window").height);

// try {
//   firebase.initializeApp({
//     apiKey: "AIzaSyA0Ue9PDvXWer3pjdI0fktEST3PPp4TJ64",
//     authDomain: "nkl-go.firebaseapp.com",
//     projectId: "nkl-go",
//     storageBucket: "nkl-go.appspot.com",
//     messagingSenderId: "393552600316",
//     appId: "1:393552600316:web:09da24448a8d2cb3cecb79",
//     measurementId: "G-E5NEP4W6KV"
//   });
//   console.log("done");
// } catch (err) {
//   // ignore app already initialized error in snack
//   console.log(err);
// }

const DismissKeyboard = ({ children }) => (
  <KeyboardAwareScrollView
    enableOnAndroid={true}
    // enableAutomaticScroll={Platform.OS === "ios"}
    resetScrollToCoords={{ x: 0, y: 0 }}
    contentContainerStyle={{ backgroundColor: colors[4] }}
    scrollEnabled={false}
    extraScrollHeight={Platform.OS === "ios" ? 40 : 60}
  >
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  </KeyboardAwareScrollView>
);

function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: "#F6F7FB",
          justifyContent: "space-around",
          height: "100%"
        }}
      >
        <View
          style={{
            alignItems: "center"
          }}
        >
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View
              style={{
                height: "60%",
                marginTop: "auto"
              }}
            >
              <View
                style={{
                  flex: 1,
                  backgroundColor: "white",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  zIndex: 10,
                  borderTopRightRadius: 30,
                  borderTopLeftRadius: 30
                }}
              >
                <View style={{ paddingLeft: 15 }}>
                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <Image
                      source={require("../../assets/images/SignUpPage/BackArrow.png")}
                    />
                  </TouchableOpacity>

                  <Text
                    style={{
                      fontSize: 25,
                      marginTop: 20,
                      marginBottom: 20,
                      fontWeight: "bold"
                    }}
                  >
                    Sign In
                  </Text>

                  <View
                    style={{
                      width: 333,
                      height: 56,
                      backgroundColor: "#F2F2F2",
                      borderRadius: 5,
                      justifyContent: "center",
                      flexDirection: "row",
                      marginTop: 19
                    }}
                  >
                    <Image
                      style={{ marginTop: 15, marginRight: 10 }}
                      source={require("../../assets/images/SignUpPage/Avatar.png")}
                    />
                    <TextInput
                      style={{
                        flex: 1,
                        paddingTop: 10,
                        paddingRight: 10,
                        paddingBottom: 10,
                        paddingLeft: 0,
                        backgroundColor: "#F2F2F2",
                        color: "#424242",
                        fontSize: 17
                      }}
                      placeholderTextColor="#000"
                      placeholder="Phone number"
                      keyboardType="numeric"
                      onChangeText={() => {}}
                    />
                  </View>

                  <TouchableOpacity
                    style={{
                      width: 334,
                      height: 62,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#E84E1C",
                      borderRadius: 8,
                      marginTop: 10
                    }}
                    onPress={() => {
                      setModalVisible(false);
                      navigation.navigate("Home");
                    }}
                  >
                    <Text
                      style={{
                        color: "#E5E5E5",
                        fontSize: 30
                      }}
                    >
                      Login
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <Pressable
              onPress={() => {
                setModalVisible(false);
              }}
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "40%",
                backgroundColor: "rgba(52, 52, 52, 0)"
              }}
            ></Pressable>
          </Modal>
          <Image source={require("../../assets/images/logo.png")} />
        </View>
        <View
          style={{
            alignItems: "center",
            marginTop: 10
          }}
        >
          <Svg
            position="absolute"
            height="300"
            width="300"
            viewBox="0 0 300 300"
          >
            <G id="circle">
              <Circle
                r={200}
                x={150}
                y={250}
                fill="none"
                stroke="none"
                strokeWidth={14}
                transform="rotate(-130)"
              />
            </G>
            <SvgText fill="#000" fontSize="25">
              <TextPath href="#circle">
                <TSpan dx="0" dy={-20}>
                  Welcome to SIIC universe
                </TSpan>
              </TextPath>
            </SvgText>
          </Svg>

          <View style={{ marginTop: 70 }}>
            <LottieView
              style={{ width: 200, height: 200 }}
              source={require("../../assets/lottie/space.json")}
              autoPlay
              loop={true}
            />
          </View>

          <View>
            <TouchableOpacity
              style={{
                width: 334,
                height: 62,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#E84E1C",
                borderRadius: 8,
                marginTop: 10
              }}
              onPress={() => setModalVisible(true)}
            >
              <Text
                style={{
                  color: "#E5E5E5",
                  fontSize: 30
                }}
              >
                Sign in
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 334,
                height: 62,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#1D1D1B",
                borderRadius: 8,
                marginTop: 10
              }}
              onPress={() => {
                navigation.navigate("SignUpScreen");
              }}
            >
              <Text style={{ color: "#E5E5E5", fontSize: 30 }}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

function SignUpScreen({ navigation }) {
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: "#F6F7FB",
          justifyContent: "space-around",
          height: "100%"
        }}
      >
        <View style={{ paddingLeft: 15 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("HomeScreen");
            }}
          >
            <Image
              source={require("../../assets/images/SignUpPage/BackArrow.png")}
            />
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 25,
              marginTop: 20,
              marginBottom: 20,
              fontWeight: "bold"
            }}
          >
            Create an account
          </Text>

          <View
            style={{
              width: 333,
              height: 56,
              backgroundColor: "#F2F2F2",
              borderRadius: 5,
              justifyContent: "center",
              flexDirection: "row",
              marginTop: 19
            }}
          >
            <Image
              style={{ marginTop: 15, marginRight: 10 }}
              source={require("../../assets/images/SignUpPage/Avatar.png")}
            />
            <TextInput
              style={{
                flex: 1,
                paddingTop: 10,
                paddingRight: 10,
                paddingBottom: 10,
                paddingLeft: 0,
                backgroundColor: "#F2F2F2",
                color: "#424242",
                fontSize: 17
              }}
              placeholderTextColor="#000"
              placeholder="Full Name"
              onChangeText={() => {}}
            />
          </View>
          <View style={{ flexDirection: "row", marginTop: 19 }}>
            <View
              style={{
                width: 108,
                height: 56,
                backgroundColor: "#F2F2F2",
                borderRadius: 5,
                justifyContent: "center",
                flexDirection: "row"
              }}
            >
              <TextInput
                style={{
                  flex: 1,
                  paddingTop: 10,
                  paddingRight: 10,
                  paddingBottom: 10,
                  paddingLeft: 0,
                  backgroundColor: "#F2F2F2",
                  color: "#424242",
                  fontSize: 17
                }}
                placeholderTextColor="#000"
                placeholder="+225"
                value={`+225`}
                onChangeText={() => {}}
              />
              <Image
                style={{ marginTop: 15, marginRight: 10 }}
                source={require("../../assets/images/SignUpPage/flag.png")}
              />
            </View>
            <View
              style={{
                width: 210,
                height: 56,
                backgroundColor: "#F2F2F2",
                borderRadius: 5,
                justifyContent: "center",
                flexDirection: "row",
                marginLeft: 14
              }}
            >
              <TextInput
                style={{
                  flex: 1,
                  paddingTop: 10,
                  paddingRight: 10,
                  paddingBottom: 10,
                  paddingLeft: 0,
                  backgroundColor: "#F2F2F2",
                  color: "#424242",
                  fontSize: 17
                }}
                placeholderTextColor="#000"
                placeholder="Phone number"
                keyboardType="numeric"
                onChangeText={() => {}}
              />
            </View>
          </View>

          <View
            style={{
              width: 333,
              height: 56,
              backgroundColor: "#F2F2F2",
              borderRadius: 5,
              justifyContent: "center",
              flexDirection: "row",
              marginTop: 19
            }}
          >
            <Image
              style={{ marginTop: 15, marginRight: 10 }}
              source={require("../../assets/images/SignUpPage/Avatar.png")}
            />
            <TextInput
              style={{
                flex: 1,
                paddingTop: 10,
                paddingRight: 10,
                paddingBottom: 10,
                paddingLeft: 0,
                backgroundColor: "#F2F2F2",
                color: "#424242",
                fontSize: 17
              }}
              placeholderTextColor="#000"
              placeholder="Email"
              onChangeText={() => {}}
            />
          </View>
          <View
            style={{
              width: 333,
              height: 56,
              backgroundColor: "#F2F2F2",
              borderRadius: 5,
              justifyContent: "center",
              flexDirection: "row",
              marginTop: 19
            }}
          >
            <Image
              style={{ marginTop: 20, marginRight: 10 }}
              source={require("../../assets/images/SignUpPage/Globe.png")}
            />
            <TextInput
              style={{
                flex: 1,
                paddingTop: 10,
                paddingRight: 10,
                paddingBottom: 10,
                paddingLeft: 0,
                backgroundColor: "#F2F2F2",
                color: "#424242",
                fontSize: 17
              }}
              placeholderTextColor="#000"
              placeholder="Country of residence"
              onChangeText={() => {}}
            />
          </View>
          <View
            style={{
              width: 333,
              height: 56,
              backgroundColor: "#F2F2F2",
              borderRadius: 5,
              justifyContent: "center",
              flexDirection: "row",
              marginTop: 19
            }}
          >
            <Image
              style={{ marginTop: 20, marginRight: 10 }}
              source={require("../../assets/images/SignUpPage/Address.png")}
            />
            <TextInput
              style={{
                flex: 1,
                paddingTop: 10,
                paddingRight: 10,
                paddingBottom: 10,
                paddingLeft: 0,
                backgroundColor: "#F2F2F2",
                color: "#424242",
                fontSize: 17
              }}
              placeholderTextColor="#000"
              placeholder="Address"
              onChangeText={() => {}}
            />
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={{
              width: 334,
              height: 62,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#E84E1C",
              borderRadius: 8,
              marginTop: 10
            }}
            onPress={() => {
              navigation.navigate("VerificationScreen");
            }}
          >
            <Text style={{ color: "#E5E5E5", fontSize: 30 }}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

function VerificationScreen({ navigation }) {
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: "#F6F7FB",
          justifyContent: "flex-start",
          height: "100%"
        }}
      >
        <View style={{ paddingLeft: 15 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignUpScreen");
            }}
          >
            <Image
              source={require("../../assets/images/SignUpPage/BackArrow.png")}
            />
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 25,
              marginTop: 20,
              marginBottom: 20,
              fontWeight: "bold"
            }}
          >
            Verification
          </Text>
          <Text
            style={{
              fontSize: 19,
              marginTop: 20,
              marginBottom: 20,
              marginRight: 50
            }}
          >
            Please enter the Verification code sent to +225 07 55 12 13 14
          </Text>
          <CodeInput
            keyboardType="numeric"
            codeLength={4}
            className="border-circle"
            compareWithCode="12345"
            cellBorderWidth={1}
            borderColor={"#E4E4E4"}
            autoFocus={false}
            size={80}
            activeColor={"black"}
            codeInputStyle={{ fontWeight: "800" }}
            onFulfill={() => {
              navigation.navigate("SignUpScreen");
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

class Navigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {this.props.token !== null ? (
            <>
              <Stack.Screen
                name="Menu"
                component={Tabs}
                options={{
                  title: "",
                  headerStyle: {
                    backgroundColor: "#fff"
                  },
                  headerTintColor: "#fff",
                  headerTitleStyle: {
                    fontWeight: "bold"
                  },
                  // headerBar: null,
                  headerShown: null
                }}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                  headerTintColor: "#fff",
                  headerTitleStyle: {
                    fontWeight: "bold"
                  },
                  headerBar: null,
                  headerShown: null
                }}
              />
              <Stack.Screen
                name="SignUpScreen"
                component={SignUpScreen}
                options={{
                  headerTintColor: "#fff",
                  headerTitleStyle: {
                    fontWeight: "bold"
                  },
                  headerBar: null,
                  headerShown: null
                }}
              />
              <Stack.Screen
                name="VerificationScreen"
                component={VerificationScreen}
                options={{
                  // title: "Welcome",
                  // headerStyle: {
                  //   backgroundColor: "#f44336",
                  // },
                  headerTintColor: "#fff",
                  headerTitleStyle: {
                    fontWeight: "bold"
                  },
                  headerBar: null,
                  headerShown: null
                }}
              />
              <Stack.Screen
                name="Home"
                component={Home}
                options={{
                  headerTintColor: "#fff",
                  headerTitleStyle: {
                    fontWeight: "bold"
                  },
                  headerBar: null,
                  headerShown: null
                }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const setSetting = (data) => ({
  type: SET_CONFIG,
  data: data
});

const post_user_data = (data) => ({
  type: POST_USER_DATA,
  data: data
});

const post_user_token = (data) => ({
  type: POST_USER_TOKEN,
  data: data
});

const mapStateToProps = (state) => {
  return { token: state.token };
};

const mapDispatchStoreToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchStoreToProps)(Navigation);
