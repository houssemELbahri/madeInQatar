import React, {FC} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {COLORS} from '../../Constants/Colors';
import Icon from '../atoms/Icon';
import {Icons} from '../atoms/Icon';

interface MIQSearchInput {
  placeholder: string;
  value: string;
  setValue: (val: string) => void;
}

const MIQInput: FC<MIQSearchInput> = ({value, setValue, placeholder}) => {
  return (
    <View style={styles.container}>
      <Icon
        type={Icons.Ionicons}
        name={'search'}
        color={'rgba(0, 0, 0, 0.25)'}
      />
      <TextInput
        style={styles.input}
        multiLine={false}
        placeholder={placeholder}
        placeholderTextColor={'rgba(0, 0, 0, 0.25)'}
        value={value}
        onChangeText={setValue}
      />
    </View>
  );
};

export default MIQInput;

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 21,
    backgroundColor: '#dedede',
    marginVertical: 5,
    paddingStart: 20,
  },
  input: {
    paddingStart: 10,
    color: COLORS.BLACK,
  },
});
