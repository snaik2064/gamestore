import React from 'react';

import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './components/screens/HomeScreen';
import LiveScreen from './components/screens/LiveScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import GameScreen from './components/screens/GameScreen';

const AppStack = createStackNavigator();
const TabNav = createBottomTabNavigator();

const tabBarOptions = {
  showLabel: false,
  style: {
    backgroundColor: '#343434',
    borderTopColor: '#343434',
    paddingBottom: 12,
  },
};

const TabNavScreen = () => {
  return (
    <TabNav.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;

          switch (route.name) {
            case 'HomeScreen':
              iconName = 'home';
              break;
            case 'LiveScreen':
              iconName = 'gamepad';
              break;
            case 'ProfileScreen':
              iconName = 'user';
              break;

            default:
              iconName = 'gamepad';
              break;
          }

          return (
            <TabBarIconContainer focused={focused}>
              <Icon name={iconName} size={24} color="#ffffff" />
            </TabBarIconContainer>
          );
        },
      })}>
      <TabNav.Screen name="HomeScreen" component={HomeScreen} />
      <TabNav.Screen name="LiveScreen" component={LiveScreen} />
      <TabNav.Screen name="ProfileScreen" component={ProfileScreen} />
    </TabNav.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator mode="modal" headerMode="none">
        <AppStack.Screen name="App" component={TabNavScreen} />
        <AppStack.Screen name="GameScreen" component={GameScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const TabBarIconContainer = styled.View`
  background-color: ${(props) => (props.focused ? '#819ee5' : '#343434')};
  padding: 5px 16px;
  border-radius: 32px;
`;
