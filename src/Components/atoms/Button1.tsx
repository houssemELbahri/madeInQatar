import React, {FC, memo} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

interface Button1Props {
  title: string;
  onPress?: () => void;
}

const Button1: FC<Button1Props> = ({title, onPress}) => {
  console.log('from button 1', title);
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(Button1);

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 40,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
