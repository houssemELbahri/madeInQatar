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
      <TouchableOpacity onPress={onPress} style={{backgroundColor: 'red'}}>
        <Text>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    //backgroundColor: 'red',
    width: '100%',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    // paddingTop: 15,
    // paddingBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.BLACK,
    paddingStart: 10,
  },
});

export default memo(HorizontalItemWithText);
