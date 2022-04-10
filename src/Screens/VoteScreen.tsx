import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const VoteScreen = () => {
  return (
    <View style={styles.container}>
      <Text>from Vote Screen</Text>
    </View>
  );
};

export default VoteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
