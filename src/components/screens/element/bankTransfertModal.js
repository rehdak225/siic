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

const BTransferModal = ({ visible, closeVisibleState }) => {
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
          <View style={{ paddingLeft: 15 }}>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                style={{
                  marginTop: 20,
                  marginRight: 10,
                  width: 30,
                  height: 30
                }}
                source={require("../../../../assets/images/AccountPage/bank-transfer.png")}
              />
              <Text style={{ fontSize: 10 }}>Bank Transfer</Text>
            </View>

            <View style={{ marginTop: 15 }}>
              <Text>Account number</Text>
              <View
                style={{
                  width: 333,
                  height: 50,
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
                  keyboardType="numeric"
                  onChangeText={() => {}}
                />
              </View>
            </View>

            <View style={{ marginTop: 15 }}>
              <Text>Amount</Text>
              <View
                style={{
                  width: 333,
                  height: 50,
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
                  keyboardType="numeric"
                  onChangeText={() => {}}
                />
              </View>
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
                myVisible = false;
              }}
            >
              <Text
                style={{
                  color: "#E5E5E5",
                  fontSize: 20
                }}
              >
                Validate
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

export default BTransferModal;
