const React = require("react-native");

const { StyleSheet } = React

export default {

containerView: {
  flex: 1,
},
loginScreenContainer: {
  flex: 1,
},
logoText: {
  fontSize: 40,
  fontWeight: "800",
  marginTop: 80,
  marginBottom: 30,
  textAlign: 'center',
},
loginFormView: {
  flex: 3,
},
loginFormTextInput: {
  height: 43,
  fontSize: 14,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#eaeaea',
  backgroundColor: '#fafafa',
  paddingLeft: 10,
  marginLeft: 15,
  marginRight: 15,
  marginTop: 5,
  marginBottom: 5,

},
loginButton: {
  backgroundColor: '#1ecc00',
  borderRadius: 5,
  height: 45,
  marginTop: 10,
},
fbLoginButton: {
  height: 45,
  marginTop: 10,
  backgroundColor: 'transparent',
},
whatnowButton: {
  height: 40,
  marginTop: 10,
  backgroundColor: 'transparent',
},

  // SECRET BUTTON FOR SKIPPING LOGIN WITHOUT DATABASE !!!

  skipSecretButton: {
  height: 40,
  marginTop: 10,
  backgroundColor: 'transparent',
},
};
