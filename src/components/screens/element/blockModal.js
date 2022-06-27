import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
  Image,
  Pressable,
  ImageBackground,
  TextInput,
  Modal
} from "react-native";

const BlockModal = ({ visible, closeVisibleState }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
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

            <TouchableOpacity
              style={{
                width: 334,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#E84E1C",
                borderRadius: 8,
                marginTop: 10
              }}
              onPress={() => {
                this.setModalVisible3(false);
              }}
            >
              <Text
                style={{
                  color: "#E5E5E5",
                  fontSize: 20
                }}
              >
                Block the card
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Pressable
        onPress={() => {
          closeVisibleState();
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
  );
};

export default BlockModal;
