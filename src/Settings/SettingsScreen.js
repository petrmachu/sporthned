import React from 'react';
import { Text, View, StyleSheet, StatusBar, Image, Platform, RefreshControl, Switch, KeyboardAvoidingView, ScrollView, Button } from 'react-native';
import styles from "./style.js";
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation'; 


export default class SettingsScreen extends React.Component {

  render() {

    const {navigate} = this.props.navigation;
    return (
          <ScrollView>
          <KeyboardAvoidingView style={styles.containerView} behavior="padding">
          <Text style={styles.nadpisek}>Nastavení</Text>
            
            <Button
              buttonStyle={styles.basic_buttons}
              onPress={() => navigate('Profile', {name: 'Profile'})}
              title="Profil"
              color="#1ecc00"
            />

            <Button
              buttonStyle={styles.basic_buttons}
              onPress={() => navigate('Activity', {name: 'Activity'})}
              title="Aktivita"
              color="#1ecc00"
            />

            <Button
              buttonStyle={styles.basic_buttons}
              onPress={() => navigate('SettingsAds', {name: 'SettingsAds'})}
              title="Nastavení reklam"
              color="#1ecc00"
            />

            <Button
              buttonStyle={styles.basic_buttons}
              onPress={() => navigate('AboutApp', {name: 'AboutApp'})}
              title="O aplikaci"
              color="#1ecc00"
            />

            <Button
              buttonStyle={styles.basic_buttons}
              onPress={() => navigate('SupportUs', {name: 'SupportUs'})}
              title="Podpoř nás"
              color="#1ecc00"
            />

            <Button
              buttonStyle={styles.basic_buttons}
              onPress={() => navigate('HelpSupport', {name: 'HelpSupport'})}
              title="Podpora"
              color="#1ecc00"
            />

            <Button
              buttonStyle={styles.logout}
              onPress={() => navigate('LogOut', {name: 'LogOut'})}
              title="Odhlásit se"
              color="#1ecc00"
            />

      </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}