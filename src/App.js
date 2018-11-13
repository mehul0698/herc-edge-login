/*Copyright (c) 2018 HERC SEZC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import React, { Component } from "react";
import MainNavigation from "./navigation/MainNavigation";
import { Provider } from "react-redux";
const Web3 = require('web3');
import store from "./store";
import { Platform, StyleSheet, Text, View, Button, YellowBox } from "react-native";
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader', 'Setting a timer for a long period of time']);


export default class App extends Component {

  componentWillMount() {
    const web3 = new Web3(
      new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/92ffd0e0fb6e484198387a5fabf31954')
    )
    web3.eth.getBlock('latest')
      .then(res => {
        console.log(res, "chance latest block")
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <Provider store={store}>
        <MainNavigation />
      </Provider>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
