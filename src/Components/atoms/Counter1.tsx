import React, {FC, memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Counter1Props {
  counter: number;
  title: string;
}

const Counter1: FC<Counter1Props> = ({counter, title}) => {
  console.log('from counter ', title);
  return (
    <View style={styles.container}>
      <Text style={styles.container}>{title} </Text>
      <Text style={styles.container}>{counter}</Text>
    </View>
  );
};

export default memo(Counter1);

const styles = StyleSheet.create({
  conatiner: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    width: 100,
    height: 40,
  },
  text: {fontSize: 22, color: 'red'},
});
