import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const VotesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>from Votes Screen </Text>
    </View>
  );
};

export default VotesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
