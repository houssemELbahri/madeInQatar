import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ArticleScreen = () => {
  return (
    <View style={styles.container}>
      <Text>from Article Screen</Text>
    </View>
  );
};

export default ArticleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
