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
    modalVisible4: false
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
  _renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10
        }}
      >
        <ImageBackground
          source={item.url}
          resizeMode="cover"
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
            <Text style={{ color: "white", fontSize: 15 }}>{item.type}</Text>
            <Text style={{ color: "white", fontSize: 15 }}>SIIC</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              height: "80%",
              marginLeft: 10
            }}
          >
            <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
              {item.amount} F CFA
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  };

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

              <View>
                <Text>Account number</Text>
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

              <View>
                <Text>Amount</Text>
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
                  this.setModalVisible1(false);
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
            this.setModalVisible1(false);
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

  modal2 = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible2}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          this.setModalVisible2(!this.state.modalVisible2);
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
                  source={require("../../../../assets/images/AccountPage/wallet.png")}
                />
                <Text style={{ fontSize: 10 }}>Ask Money</Text>
              </View>

              <View>
                <Text>Phone number</Text>
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

              <View>
                <Text>Amount</Text>
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
                  this.setModalVisible2(false);
                }}
              >
                <Text
                  style={{
                    color: "#E5E5E5",
                    fontSize: 20
                  }}
                >
                  Send request
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Pressable
          onPress={() => {
            this.setModalVisible2(false);
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

  modal3 = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible3}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          this.setModalVisible3(!this.state.modalVisible3);
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
            this.setModalVisible3(false);
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

  modal4 = () => {
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
                margin: 15,
                flexDirection: "row",
                backgroundColor: "#f6f7fb"
              }}
            >
              <TouchableOpacity
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
                  marginLeft: "30%",
                  fontWeight: "bold",
                  fontSize: 20
                }}
              >
                Notification
              </Text>
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
      </Modal>
    );
  };

  render() {
    return (
      <SafeAreaView style={{ backgroundColor: "#F6F7FB", height: "100%" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <this.modal1 />
          <this.modal2 />
          <this.modal3 />
          <this.modal4 />
          <View
            style={{
              flexDirection: "row",
              marginLeft: 10,
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
                style={{ marginRight: 10 }}
                source={require("../../../../assets/images/AccountPage/bell.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Carousel
              data={images}
              renderItem={this._renderItem}
              sliderWidth={350}
              itemWidth={350}
              borderRadius={10}
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
