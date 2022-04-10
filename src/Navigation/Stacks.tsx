import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Profil1 from '../Screens/Profile/profile1';
import Profil2 from '../Screens/Profile/Profile2';
import Home1 from '../Screens/Home/home1';
import Home2 from '../Screens/Home/home2';
import Friends1 from '../Screens/Friends/Friends1';
import Friends2 from '../Screens/Friends/Friends2';

const {Navigator, Screen} = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Home1" component={Home1} />
      <Screen
        name="Home2"
        component={Home2}
        options={{animation: 'slide_from_left'}}
      />
    </Navigator>
  );
};

export const ProfileStack = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Profil1" component={Profil1} />
      <Screen name="Profil2" component={Profil2} />
    </Navigator>
  );
};

export const FriendsStack = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Friends1" component={Friends1} />
      <Screen name="Friends2" component={Friends2} />
    </Navigator>
  );
};
