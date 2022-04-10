import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SelectionsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>from Selections Screen</Text>
    </View>
  );
};

export default SelectionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
