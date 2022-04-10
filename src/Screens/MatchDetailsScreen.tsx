import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MatchDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>from MatchDetailsScreen</Text>
    </View>
  );
};

export default MatchDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
