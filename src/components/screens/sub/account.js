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
  Pressable,
  ImageBackground,
  TextInput,
  Modal
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
import BankTransfer from "../svg/bank-transfert";
import AskMoney from "../svg/ask-money";
import Card1 from "../element/modalCard1";
import BTransferModal from "../element/bankTransfertModal";
import AskMoneyModal from "../element/askMoneyModal";
import BlockModal from "../element/blockModal";
import CardModal from "../element/cardModal";

const height = Math.round(Dimensions.get("window").height);
const width = Math.round(Dimensions.get("window").width);

const images = [
  {
    url: require("../../../../assets/images/AccountPage/Card1.png"),
    type: "Current Account",
    amount: "216 250"
  },
  {
    url: require("../../../../assets/images/AccountPage/Card2.png"),
    type: "Savings Account",
    amount: "80 000"
  },
  {
    url: require("../../../../assets/images/AccountPage/Card3.png"),
    type: "Credit Account",
    amount: "114 700"
  }
];

class Account extends Component {
  state = {
    modalVisible1: false,
    modalVisible2: false,
    modalVisible3: false,
    modalVisible4: false,
    cardModalVisible: false,
    amountCard: 0
  };

  setModalVisible1 = (visible) => {
    this.setState({ modalVisible1: visible });
  };

  setModalVisible2 = (visible) => {
    this.setState({ modalVisible2: visible });
  };

  setModalVisible3 = (visible) => {
    this.setState({ modalVisible3: visible });
  };

  setModalVisible4 = (visible) => {
    this.setState({ modalVisible4: visible });
  };
  setCardModalVisible = (visible) => {
    this.setState({ cardModalVisible: visible });
  };
  _renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <ImageBackground
          source={item.url}
          resizeMode="cover"
          style={{
            width: "100%",
            height: 200
          }}
          borderRadius={10}
        >
          <Pressable
            onPress={() => {
              this.setCardModalVisible(true);
              this.setState({ amountCard: item.amount });
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
              <Text style={{ color: "white", fontSize: 15 }}>{item.type}</Text>
              <Text style={{ color: "white", fontSize: 15 }}>SIIC</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                height: "80%",
                marginLeft: 10,
                borderRadius: 10
              }}
            >
              <Text
                style={{ color: "white", fontSize: 25, fontWeight: "bold" }}
              >
                {item.amount} F CFA
              </Text>
            </View>
          </Pressable>
        </ImageBackground>
      </View>
    );
  };

  modalNotification = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible4}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          this.setModalVisible3(!this.state.modalVisible4);
        }}
      >
        <SafeAreaView>
          <View
            style={{
              height: "100%",
              marginTop: "auto"
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "#f6f7fb",
                marginTop: 20,
                borderTopRightRadius: 30,
                borderTopLeftRadius: 30
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  backgroundColor: "#f6f7fb"
                }}
              >
                <TouchableOpacity
                  style={{ marginLeft: 15 }}
                  onPress={() => {
                    this.setModalVisible4(false);
                  }}
                >
                  <Image
                    style={{ marginRight: 10 }}
                    source={require("../../../../assets/images/SignUpPage/BackArrow.png")}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20
                  }}
                >
                  Notification
                </Text>
                <Text style={{ color: "#f6f7fb" }}>Hey</Text>
              </View>
              <View
                style={{
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Image
                  style={{ height: 200 }}
                  source={require("../../../../assets/images/galaxies.gif")}
                />
                <Text>No new notification</Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    );
  };

  render() {
    return (
      <SafeAreaView style={{ backgroundColor: "#F6F7FB", height: "100%" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <BTransferModal
            visible={this.state.modalVisible1}
            closeVisibleState={() => this.setModalVisible1(false)}
          />
          <AskMoneyModal
            visible={this.state.modalVisible2}
            closeVisibleState={() => this.setModalVisible2(false)}
          />
          <BlockModal
            visible={this.state.modalVisible3}
            closeVisibleState={() => this.setModalVisible3(false)}
          />

          <CardModal
            amount={this.state.amountCard}
            visible={this.state.cardModalVisible}
            closeVisibleState={() => this.setCardModalVisible(false)}
          />
          <this.modalNotification />

          <View
            style={{
              flexDirection: "row",
              marginLeft: (width - 350) / 2,
              marginRight: (width - 350) / 2,
              marginTop: 15,
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <Tabs />
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>SIIC</Text>
            <TouchableOpacity
              onPress={() => {
                this.setModalVisible4(true);
              }}
            >
              <Image
                style={{ marginRight: 10, height: 30, width: 30 }}
                source={require("../../../../assets/images/AccountPage/bell.png")}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10
            }}
          >
            <Carousel
              data={images}
              renderItem={this._renderItem}
              sliderWidth={350}
              itemWidth={350}
              borderRadius={10}
              marginTop={10}
            />
          </View>
          <View style={{ marginLeft: 20, marginTop: 10 }}>
            <Text>Quick actions</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 20
              }}
            >
              <TouchableOpacity
                style={{ alignItems: "center" }}
                onPress={() => {
                  this.setModalVisible1(true);
                }}
              >
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
              </TouchableOpacity>

              <TouchableOpacity
                style={{ alignItems: "center" }}
                onPress={() => {
                  this.setModalVisible2(true);
                }}
              >
                <Image
                  style={{
                    marginTop: 20,
                    marginRight: 10,
                    width: 30,
                    height: 30
                  }}
                  source={require("../../../../assets/images/AccountPage/wallet.png")}
                />
                <Text style={{ fontSize: 10 }}>Ask Money</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ alignItems: "center" }}
                onPress={() => {}}
              >
                <Image
                  style={{
                    marginTop: 20,
                    marginRight: 10,
                    width: 30,
                    height: 30
                  }}
                  source={require("../../../../assets/images/AccountPage/credit-card.png")}
                />
                <Text style={{ fontSize: 10 }}>Reload</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ alignItems: "center" }}
                onPress={() => {
                  this.setModalVisible3(true);
                }}
              >
                <Image
                  style={{
                    marginTop: 20,
                    marginRight: 10,
                    width: 30,
                    height: 30
                  }}
                  source={require("../../../../assets/images/AccountPage/padlock.png")}
                />
                <Text style={{ fontSize: 10 }}>Block</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginLeft: 20 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                Useful{"\n"}Informations
              </Text>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  position: "relative",
                  bottom: 20
                }}
                source={require("../../../../assets/images/astronaut-computer.gif")}
              />
            </View>
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
              <View style={{ marginRight: 10 }}>
                <Image
                  style={{ width: 30, height: 30 }}
                  source={require("../../../../assets/images/AccountPage/warning.png")}
                />
              </View>
              <View>
                <Text style={{ fontWeight: "bold" }}>Refills</Text>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", marginBottom: 10 }}>
              <View style={{ marginRight: 10 }}>
                <Image
                  style={{ width: 30, height: 30 }}
                  source={require("../../../../assets/images/AccountPage/documents.png")}
                />
              </View>
              <View>
                <Text style={{ fontWeight: "bold" }}>
                  Terms and conditions update
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </Text>
              </View>
            </View>
            <View style={{ marginTop: 10, marginLeft: 20 }}>
              <Text style={{ color: "grey", fontWeight: "bold" }}>
                Transactions
              </Text>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "grey"
                  }}
                >
                  You need to make a first{"\n"} Transaction to see your last
                  {"\n"}
                  transactions
                </Text>
              </View>
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

export default connect(mapStateToProps, mapDispatchStoreToProps)(Account);
