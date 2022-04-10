import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BestStrikerScreen = () => {
  return (
    <View style={styles.container}>
      <Text>from BestStrikerScreen</Text>
    </View>
  );
};

export default BestStrikerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
