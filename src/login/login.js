import React, { Component } from "react";
import { createStackNavigator } from 'react-navigation';
import styles from "./style";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';



const appId = "595086434279380"



export default class LoginScreen extends Component {

  render() {

    const {navigate} = this.props.navigation;
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>  
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
          <Text style={styles.logoText}>SportHned</Text>
            <TextInput placeholder="Jméno" placeholderColor="#8b8e93" style={styles.loginFormTextInput} />
            <TextInput placeholder="Heslo" placeholderColor="#8b8e93" style={styles.loginFormTextInput} secureTextEntry={true}/>
            
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => Alert.alert('Funkce zatím není dostupná, zkuste jinou.')}
              title="Přihlásit se"
              
            />
            <Button
              buttonStyle={styles.fbLoginButton}
              onPress={() => this.onFbLoginPress()}
              title="Přihlásit přes Facebook"
              color="#1ecc00"
            />
            <Button
              buttonStyle={styles.whatnowButton}
              onPress={() => Alert.alert('Funkce zatím není dostupná, zkuste jinou.')}
              title="Máte problém s přihlášením?"
              color="#1ecc00"
            />

            <Button
              buttonStyle={styles.skipSecretButton}
              onPress={() => navigate('Menu', {name: 'Menu'})}
              title="SKIP LOGIN"
              color="#1ecc00"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }


  componentDidMount() {
  }

  componentWillUnmount() {
  }

  onLoginPress() {

  }



  async onFbLoginPress() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(appId, {
      permissions: ['public_profile', 'email'],
    });
    if (type === 'success') {
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`);
      Alert.alert(
        'Přihlášen !',
        `Vítej ${(await response.json()).name}!`,
      );
    }
  }
}

