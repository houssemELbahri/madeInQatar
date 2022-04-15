import React, {FC, memo} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS} from '../../Constants/Colors';

interface HorizontalItemWithTextProps {
  title: string;
  text: string;
  onPress: () => void;
}

const HorizontalItemWithText: FC<HorizontalItemWithTextProps> = ({
  title,
  text,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    //height: 40,
    alignItems: 'center',
    //backgroundColor: 'red',
    width: '100%',
    paddingStart: 10,
    paddingEnd: 15,
    justifyContent: 'space-between',
    paddingTop: 17,
    paddingBottom: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.BLACK,
    paddingStart: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.BLACK,
  },
});

export default memo(HorizontalItemWithText);
