import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SavedArticlesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>from SavedArticleScreen</Text>
    </View>
  );
};

export default SavedArticlesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
