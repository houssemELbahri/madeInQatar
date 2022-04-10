import React, {FC, memo} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import MIQInput from '../atoms/MIQInput';

interface InputWithTitleProps {
  title?: string;
  value?: string;
  setValue?: (value: any) => void;
  multiLine?: boolean;
  placeholder?: string;
}
const InputWithTitle: FC<InputWithTitleProps> = ({
  title,
  value,
  setValue,
  placeholder,
  multiLine = false,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <MIQInput placeholder={placeholder} />
    </View>
  );
};

export default memo(InputWithTitle);

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '90%',
    marginVertical: 8,
  },
  title: {
    fontSize: 20,
    textTransform: 'capitalize',
  },
});
