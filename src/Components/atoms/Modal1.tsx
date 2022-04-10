import React, {
  FC,
  memo,
  useState,
  useImperativeHandle,
  forwardRef,
} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

interface Modal1Props {
  title: string;
  ref: any;
}

const Modal1: FC<Modal1Props> = forwardRef(({title}, ref) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  console.log('from button 1', title);

  useImperativeHandle(ref, () => ({
    openModal: val => {
      setShowModal(val);
    },
  }));

  if (!showModal) {
    return null;
  }
  return (
    <View>
      <Text>{title}</Text>
      <Text>{title}</Text>
      <Text>{title}</Text>
      <Text>{title}</Text>
      <Text>{title}</Text>
      <TouchableOpacity onPress={() => setShowModal(false)}>
        <Text>close modal</Text>
      </TouchableOpacity>
    </View>
  );
});

export default memo(Modal1);

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 40,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
