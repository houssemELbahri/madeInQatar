import React, {FC, memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Title1Props {
  title: string;
}

const Title1: FC<Title1Props> = ({title}) => {
  console.log('from title');
  return (
    <View style={styles.container}>
      <Text style={styles.container}>{title}</Text>
    </View>
  );
};

export default memo(Title1);

const styles = StyleSheet.create({
  conatiner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {fontSize: 22, color: 'red'},
});
