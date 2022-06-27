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

const CardModal = ({ amount, visible, closeVisibleState }) => {
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
          <View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text style={{ marginBottom: 15 }}>_____________</Text>
              <Text>Current Account</Text>
              <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                {amount} F CFCA
              </Text>
            </View>
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

export default CardModal;
