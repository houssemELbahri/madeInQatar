import React, {FC, memo} from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  StyleSheet,
} from 'react-native';

interface Input1Props {
  value: string;
  setValue?: (val: any) => void;
  placeholder: string;
}

const Input1: FC<Input1Props> = ({value, setValue, placeholder}) => {
  console.log('from Input 1');
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
      />
    </View>
  );
};

export default memo(Input1);

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 40,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
