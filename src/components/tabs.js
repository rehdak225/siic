import React, { Component, useState } from "react";
import * as EmailValidator from "email-validator";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  Modal,
  Pressable,
  ImageBackground
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

import { connect } from "react-redux";
import Axios from "axios";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "./screens/menu/home";
import socketIOClient from "socket.io-client";
import { colors } from "../constants/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const width = Math.round(Dimensions.get("window").width);
const height = Math.round(Dimensions.get("window").height);

class Tabs extends Component {
  // constructor() {cette classe me sert à faire des requêtes ajax
  //   super();

  // }

  /*

  */

  state = {
    modalVisible: false,
    modalVisible1: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  setModalVisible1 = (visible) => {
    this.setState({ modalVisible1: visible });
  };

  componentDidMount() {}

  modal1 = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible1}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          this.setModalVisible1(!this.state.modalVisible1);
        }}
      >
        <View
          style={{
            height: "100%",
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
            <View
              style={{
                marginTop: 15,
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Pressable
                style={{ marginTop: 10, marginLeft: 15 }}
                onPress={() => {
                  this.setModalVisible1(false);
                }}
              >
                <Image
                  style={{ marginRight: 10 }}
                  source={require("../../assets/images/SignUpPage/BackArrow.png")}
                />
              </Pressable>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                Mon Profil
              </Text>
              <Text style={{ color: "white" }}>Hey</Text>
            </View>
            <View style={{ marginTop: 15, marginLeft: 15 }}>
              <Text style={{ fontWeight: "bold", fontSize: 15, color: "red" }}>
                Personal informations
              </Text>
              <View style={{ flexDirection: "row", marginTop: 25 }}>
                <Image
                  style={{ marginRight: 10 }}
                  source={require("../../assets/images/Profil/avatar.png")}
                />
                <Text>User name</Text>
              </View>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: "#D7D4D4",
                  marginBottom: 10
                }}
              >
                <Text style={{ fontSize: 20 }}>Brou Pacome</Text>
              </View>

              <View style={{ flexDirection: "row", marginTop: 25 }}>
                <Image
                  style={{ marginRight: 10 }}
                  source={require("../../assets/images/Profil/phone.png")}
                />
                <Text>Phone number</Text>
              </View>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: "#D7D4D4",
                  marginBottom: 10
                }}
              >
                <Text style={{ fontSize: 20 }}>+225 07 55 12 13 14</Text>
              </View>

              <View style={{ flexDirection: "row", marginTop: 25 }}>
                <Image
                  style={{ marginRight: 10 }}
                  source={require("../../assets/images/Profil/map.png")}
                />
                <Text>Address</Text>
              </View>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: "#D7D4D4",
                  marginBottom: 10
                }}
              >
                <Text style={{ fontSize: 20 }}>Riviera Golf, Abidjan</Text>
              </View>

              <View style={{ flexDirection: "row", marginTop: 25 }}>
                <Image
                  style={{ marginRight: 10 }}
                  source={require("../../assets/images/Profil/world.png")}
                />
                <Text>Pays de résidence</Text>
              </View>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: "#D7D4D4",
                  marginBottom: 10
                }}
              >
                <Text style={{ fontSize: 20 }}>Côte d'Ivoire</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Image source={require("../../assets/images/eva_menu-fill.png")} />
        </TouchableOpacity>

        <this.modal1 />
        <Modal
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={{ alignItems: "flex-start" }}>
            <View
              style={{
                height: "100%",
                width: "80%",
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
                <View
                  style={{
                    wdith: "100%",
                    height: "30%"
                  }}
                >
                  <ImageBackground
                    source={require("../../assets/images/Drawer/space.png")}
                    resizeMode="cover"
                    style={{
                      width: "100%",
                      height: "100%",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <Image
                      source={require("../../assets/images/Drawer/Ellipse.png")}
                    />
                    <View style={{ marginLeft: 10 }}>
                      <Pressable
                        onPress={() => {
                          this.setModalVisible(false);
                          this.setModalVisible1(true);
                        }}
                      >
                        <Text style={{ color: "white", fontSize: 20 }}>
                          Brou Pacome
                        </Text>
                        <Text style={{ color: "white" }}>
                          +225 07 55 12 13 14
                        </Text>
                      </Pressable>
                    </View>
                  </ImageBackground>
                </View>
                <View
                  style={{
                    height: "70%",
                    justifyContent: "space-between"
                  }}
                >
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 24,
                        marginLeft: 20
                      }}
                    >
                      <Image
                        source={require("../../assets/images/Drawer/List.png")}
                      />
                      <Text style={{ fontSize: 15, marginLeft: 20 }}>
                        Princing plan
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 24,
                        marginBottom: 24,
                        marginLeft: 20
                      }}
                    >
                      <Image
                        source={require("../../assets/images/Drawer/settings.png")}
                      />
                      <Text style={{ fontSize: 15, marginLeft: 20 }}>
                        Settings
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 24,
                        marginLeft: 20
                      }}
                    >
                      <Image
                        source={require("../../assets/images/Drawer/user-add.png")}
                      />
                      <Text style={{ fontSize: 15, marginLeft: 20 }}>
                        Invite friends
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 24,
                        marginLeft: 20
                      }}
                    >
                      <Image
                        source={require("../../assets/images/Drawer/faq.png")}
                      />
                      <Text style={{ fontSize: 15, marginLeft: 20 }}>FAQ</Text>
                    </View>
                  </View>
                  <View style={{ marginLeft: 20 }}>
                    <Text style={{ margin: 10 }}>Our partners</Text>
                    <Image
                      source={require("../../assets/images/Drawer/bank-of-africa.png")}
                    />
                  </View>
                </View>
              </View>
            </View>

            <Pressable
              onPress={() => {
                this.setModalVisible(false);
              }}
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                width: "20%",
                height: "100%",
                backgroundColor: "rgba(52, 52, 52, 0)"
              }}
            ></Pressable>
          </View>
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // Id: state.user.Id
    token: state.token
  };
};

const mapDispatchStoreToProps = (dispatch) => {
  return {};
};

const tabs = new Tabs();
export default connect(mapStateToProps, mapDispatchStoreToProps)(Tabs);
