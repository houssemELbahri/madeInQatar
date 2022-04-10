import {resetGlobalState} from 'mobx/dist/internal';
import React, {FC, memo} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import {COLORS} from '../../Constants/Colors';

interface MIQInputProps {
  value: string;
  setValue: (value: any) => void;
  multiLine?: boolean;
  placeholder?: string;
}
const MIQInput: FC<MIQInputProps> = ({
  value,
  setValue,
  placeholder,
  multiLine = false,
}) => {
  return (
    <>
      <TextInput
        style={styles.input}
        multiLine={multiLine}
        placeholder={placeholder}
        placeholderTextColor={COLORS.WHITE}
        value={value}
        onChangeText={setValue}
      />
    </>
  );
};

export default memo(MIQInput);

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: '90%',
    borderRadius: 15,
    //opacity: 0.25,
    backgroundColor: 'rgba(125,125,125,0.5)',
    paddingStart: 15,
  },
});
