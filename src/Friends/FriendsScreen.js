import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { AppRegistry, SectionList, StyleSheet,} from 'react-native';


export default class FriendsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'A', data: ['Anna']},
            {title: 'D', data: ['David']},
            {title: 'P', data: ['Pavel','Petr']},
            {title: 'J', data: ['Jaroslav', 'Jana', 'Jitka','Josef',]},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 20, 
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})