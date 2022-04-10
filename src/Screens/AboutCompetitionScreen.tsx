import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AboutCompetitionScreen = () => {
  return (
    <View style={styles.container}>
      <Text>from AboutCompetitionScreen</Text>
    </View>
  );
};

export default AboutCompetitionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
