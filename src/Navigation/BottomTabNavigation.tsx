import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icons} from '../Components/atoms/Icon';

import AnimatedIcon from '../Components/atoms/AnimatedIcon';

import HomeScreen from '../Screens/HomeScreen';
import GroupsScreen from '../Screens/GroupsScreen';
import CalendarScreen from '../Screens/CalendarScreen';
import OptionsScreen from '../Screens/OptionsScreen';
import AnimatedIconWithLAbel from '../Components/atoms/AnimatedIconWithLabel';

const {Navigator, Screen} = createBottomTabNavigator();

const SCREENS = [
  {
    name: 'HomeStack',
    component: HomeScreen,
    type: Icons.Ionicons,
    activeIcon: 'ios-home',
    inActiveIcon: 'ios-home-outline',
  },
  {
    name: 'GroupsStack',
    component: GroupsScreen,
    type: Icons.Ionicons,
    activeIcon: 'football',
    inActiveIcon: 'football-outline',
  },
  {
    name: 'CalendarScreen',
    component: CalendarScreen,
    type: Icons.Ionicons,
    activeIcon: 'calendar',
    inActiveIcon: 'calendar-outline',
  },
  {
    name: 'OptionsScreen',
    component: OptionsScreen,
    type: Icons.Ionicons,
    activeIcon: 'grid',
    inActiveIcon: 'grid-outline',
  },
  // {
  //   name: 'ProfileStack',
  //   component: ProfileStack,
  //   type: Icons.FontAwesome,
  //   activeIcon: 'user-circle',
  //   inActiveIcon: 'user-circle-o',
  // },
];

export default () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 50,
          position: 'absolute',
          bottom: 2,
          left: 10,
          right: 10,
          borderRadius: 7,
        },
      }}>
      {SCREENS.map((screen, index) => (
        <Screen
          key={index}
          name={screen.name}
          component={screen.component}
          options={{
            tabBarShowLabel: false,
            //tabBarStyle: {display: 'none'},
            //tabBarLabel:screen.label,
            // tabBarIcon: ({color, focused}) => (
            //   <Icon
            //     type={screen.type}
            //     name={focused ? screen.activeIcon : screen.inActiveIcon}
            //     color={color}
            //   />
            // ),
            tabBarButton: props => <AnimatedIcon {...props} item={screen} />,
          }}
        />
      ))}
    </Navigator>
  );
};
