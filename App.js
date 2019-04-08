import React, {Component} from 'react';
import { Text, View, StyleSheet, Bottom } from 'react-native';
import { Constants } from 'expo';

import LoginScreen from './src/login/login'
import MainScreen from './src/menu/main'
import ProfileScreen from './src/Settings/Profile/Profile'


import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
      navigationOptions: ({navigation}) => ({
        header: null,
      })
  },
  Menu: {screen: MainScreen,
    navigationOptions: ({navigation}) => ({
        header: null,
      })
  },
  Profile: {screen: ProfileScreen,
    navigationOptions: ({navigation}) => ({
        
      })
  }
});

const App = createAppContainer(MainNavigator);

export default App;