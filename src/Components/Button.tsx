import React, {memo, FC} from 'react';
import {StyleSheet, Text, Dimensions, TouchableOpacity} from 'react-native';
import {COLORS} from '../Constants/Colors';

const {height, width} = Dimensions.get('window');

interface ButtonProps {
  label: string;
  onPress: () => void;
}

export const Button: FC<ButtonProps> = memo(({label, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.9}
      onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 50,
    borderRadius: 10,
    backgroundColor: COLORS.QATAR,
    alignSelf: 'center',
    margin: height * 0.01,
    padding: height * 0.01,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: 'white',
    borderWidth: 1,
  },
  label: {
    color: 'white',
    //fontWeight: 'bold',
    fontSize: 24,
  },
});
