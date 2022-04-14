import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ArticlesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>from Articles Screen </Text>
    </View>
  );
};

export default ArticlesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
