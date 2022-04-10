import React from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';
import {Icons} from '../Components/atoms/Icon';
import IconWithLabel from '../Components/molecules/IconWithLabel';
import {COLORS} from '../Constants/Colors';

const OptionsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <IconWithLabel
        label={'Enregistrements'}
        type={Icons.Ionicons}
        name={'bookmark-outline'}
        onPress={() => {
          navigation.navigate('SavedArticlesScreen');
        }}
      />
      <IconWithLabel
        label={'Meilleur buteur'}
        type={Icons.Ionicons}
        name={'ios-medal-outline'}
        onPress={() => {
          navigation.navigate('BestStrikerScreen');
        }}
      />
      <IconWithLabel
        label={'Selections'}
        type={Icons.Ionicons}
        name={'ios-shirt-outline'}
        onPress={() => {
          navigation.navigate('SelectionsScreen');
        }}
      />
      <IconWithLabel
        label={'Entraineurs'}
        type={Icons.Ionicons}
        name={'ios-body-outline'}
        onPress={() => {
          navigation.navigate('CoachsScreen');
        }}
      />
      <IconWithLabel
        label={'Stades'}
        type={Icons.MaterialCommunityIcons}
        name={'stadium-variant'}
        onPress={() => {
          navigation.navigate('StadiumsScreen');
        }}
      />
      <IconWithLabel
        label={'Histoire'}
        type={Icons.Ionicons}
        name={'earth-outline'}
        onPress={() => {
          navigation.navigate('HistoryWorldCupScreen');
        }}
      />
      <IconWithLabel
        label={'A propos de la compétition'}
        type={Icons.Ionicons}
        name={'alert-circle-outline'}
        onPress={() => {
          navigation.navigate('AboutCompetitionScreen');
        }}
      />
    </View>
  );
};

export default OptionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: COLORS.QATAR,
    paddingBottom: 90,
  },
  text: {
    color: COLORS.WHITE,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
