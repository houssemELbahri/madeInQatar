import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CoachsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>from CoachsScreen</Text>
    </View>
  );
};

export default CoachsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
