import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Drivers from './Drivers';
import Home from './Home';
import Rankings from './Rankings';

const Tab = createBottomTabNavigator();

export default function IconsBar() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home-outline';
          } else if (route.name === 'Ranking') {
            iconName = focused ? 'ios-flag' : 'ios-flag-outline';
          }
          else if (route.name === 'Drivers') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#e10600',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Ranking' component={Rankings} />
      <Tab.Screen name='Drivers' component={Drivers} />
    </Tab.Navigator>
  );
}
