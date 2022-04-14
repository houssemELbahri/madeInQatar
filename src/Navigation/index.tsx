import React, {
  useState,
  useEffect,
  useCallback,
  createRef,
  useMemo,
  createContext,
  useRef,
} from 'react';
import {Platform, View, Dimensions, StatusBar} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTabNavigation from './BottomTabNavigation';
import VoteScreen from '../Screens/VoteScreen';
import ArticleScreen from '../Screens/ArticleScreen';
import MatchDetailsScreen from '../Screens/MatchDetailsScreen';
import GroupeDetailsScreen from '../Screens/GroupeDetailsScreen';
import {COLORS} from '../Constants/Colors';
import SavedArticlesScreen from '../Screens/SavedArticlesScreen';
import BestStrikerScreen from '../Screens/BestStrikerScreen';
import SelectionsScreen from '../Screens/SelectionsScreen';
import CoachsScreen from '../Screens/CoachsScreen';
import StadiumsScreen from '../Screens/StadiumsScreen';
import HistoryWorldCupScreen from '../Screens/HistoryWorldCupScreen';
import AboutCompetitionScreen from '../Screens/AboutCompetitionScreen';
import ProductScreen from '../Screens/ProductScreen';

const SafeView = Platform.OS === 'ios' ? SafeAreaView : View;
const {height} = Dimensions.get('window');

enableScreens();

export const rootNavigator = createRef();
export const LoaderContext = createContext<{
  loadingMessage: string | undefined;
  setLoadingMessage: Function;
}>({loadingMessage: undefined, setLoadingMessage: () => {}});

export const navigateWithRootNavigator = (
  screenName: ScreenName,
  params: any = {},
  callback: Function = () => {},
) => {
  if (rootNavigator.current?.navigate) {
    rootNavigator.current.navigate(screenName, params);
    callback();
  }
};

const {Navigator, Screen} = createNativeStackNavigator();

const SCREENS = [
  {
    name: 'BottomTabNavigation',
    component: BottomTabNavigation,
    options: {options: {headerShown: false}},
  },
  {
    name: 'VoteScreen',
    component: VoteScreen,
    options: {options: {headerShown: false}},
  },
  {
    name: 'ArticleScreen',
    component: ArticleScreen,
    options: {options: {headerShown: false, animation: 'slide_from_left'}},
  },
  {
    name: 'ProductScreen',
    component: ProductScreen,
    options: {options: {headerShown: false, animation: 'slide_from_left'}},
  },
  {
    name: 'GroupeDetailsScreen',
    component: GroupeDetailsScreen,
    options: {options: {headerShown: false}},
  },
  {
    name: 'MatchDetailsScreen',
    component: MatchDetailsScreen,
    options: {options: {headerShown: false, animation: 'slide_from_left'}},
  },
  {
    name: 'SavedArticlesScreen',
    component: SavedArticlesScreen,
    options: {options: {headerShown: false}},
  },
  {
    name: 'BestStrikerScreen',
    component: BestStrikerScreen,
    options: {options: {headerShown: false}},
  },
  {
    name: 'SelectionsScreen',
    component: SelectionsScreen,
    options: {options: {headerShown: false, animation: 'slide_from_left'}},
  },
  {
    name: 'CoachsScreen',
    component: CoachsScreen,
    options: {options: {headerShown: false}},
  },
  {
    name: 'StadiumsScreen',
    component: StadiumsScreen,
    options: {options: {headerShown: false}},
  },
  {
    name: 'HistoryWorldCupScreen',
    component: HistoryWorldCupScreen,
    options: {options: {headerShown: false, animation: 'slide_from_left'}},
  },
  {
    name: 'AboutCompetitionScreen',
    component: AboutCompetitionScreen,
    options: {options: {headerShown: false, animation: 'slide_from_left'}},
  },
];

export default () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeView style={{flex: 1}}>
        <StatusBar
          animated={true}
          backgroundColor={COLORS.QATAR}
          //barStyle={statusBarStyle}
          //showHideTransition={statusBarTransition}
          //hidden={hidden}
        />
        <View style={{flex: 1}}>
          <NavigationContainer>
            <Navigator initialRouteName={'SplashScreen'}>
              {SCREENS.map((screen, index) => (
                <Screen
                  key={index}
                  name={screen.name}
                  component={screen.component}
                  {...screen?.options}
                />
              ))}
            </Navigator>
          </NavigationContainer>
        </View>
      </SafeView>
    </SafeAreaProvider>
  );
};
