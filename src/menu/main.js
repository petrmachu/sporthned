import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // 6.2.2
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../Home/HomeScreen'
import FriendsScreen from '../Friends/FriendsScreen'
import NotificationsScreen from '../Notifications/NotificationsScreen'
import SettingsScreen from '../Settings/SettingsScreen'
import SportScreen from '../Sport/SportScreen'


class IconWithBadge extends React.Component {
  render() {
    const { name, badgeCount, color, size } = this.props;
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Ionicons name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              position: 'absolute',
              right: -4,
              top: -1,
              backgroundColor: 'red',
              borderRadius: 6,
              width: 11,
              height: 11,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const HomeIconWithBadge = props => {
  return <IconWithBadge {...props} badgeCount={3} />;
};

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'Domů') {
    iconName = `ios-home`;
  } else if (routeName === 'Nastavení') {
    iconName = `ios-settings`;
  } else if (routeName === 'Události') {
    iconName = `ios-chatbubbles`;
    IconComponent = HomeIconWithBadge;
  } else if (routeName === 'Přátelé') {
    iconName = `ios-people`;
  } else if (routeName === 'Sportovat') {
    iconName = `ios-play-circle`;
  }
  return <IconComponent name={iconName} size={23} color={tintColor} />;
};

export default createAppContainer(
  createBottomTabNavigator(
    {
      Domů: { screen: HomeScreen },
      Události: { screen: NotificationsScreen },
      Sportovat: { screen: SportScreen},
      Přátelé: { screen: FriendsScreen},
      Nastavení: { screen: SettingsScreen },
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) =>
          getTabBarIcon(navigation, focused, tintColor),
      }),
      tabBarOptions: {
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
      },
    }
  )
);
