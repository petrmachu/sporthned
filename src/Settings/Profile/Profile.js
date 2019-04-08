import React from 'react';
import { Text, View, StyleSheet, StatusBar, Image, Platform, RefreshControl, Switch } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import styles from "./style";
import Icon from 'react-native-vector-icons/Entypo'


export default class ProfilScreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profil!</Text>
      </View>
    );
  }
}