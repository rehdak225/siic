import React, { Component, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import "react-native-gesture-handler";
//reducer importation

//Redux implemnentation
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import { createLogger } from "redux-logger";
import createSecureStore from "redux-persist-expo-securestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PersistGate } from "redux-persist/es/integration/react";
import { Provider as PaperProvider } from "react-native-paper";
import storage from "redux-persist/lib/storage";
import { reducer } from "./store/reducers";

// import Tabs from "./components/tabs";
import Navigation from "./src/components/navigation";
import Icon from "react-native-vector-icons/MaterialIcons";

import * as Font from "expo-font";
// const storage = createSecureStore();
// AsyncStorage.clear();

const persistConfig = {
  key: "root",
  storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, applyMiddleware(createLogger()));

const persistedStore = persistStore(store);

class App extends Component {
  state = {
    fontsLoaded: false
  };

  async loadFonts() {
    await Font.loadAsync({
      // Load a font `Montserrat` from a static resource
      Pacifico: require("./assets/fonts/Pacifico.ttf")
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <Provider store={store}>
          <PersistGate persistor={persistedStore} loading={null}>
            <PaperProvider>
              <Navigation />
            </PaperProvider>
          </PersistGate>
        </Provider>
      );
    } else {
      return null;
    }
  }
}

export default App;
