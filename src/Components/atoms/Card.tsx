import React, {FC, memo} from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import {COLORS} from '../../Constants/Colors';

interface CardProps {
  uri: string;
  width?: number;
  height?: number;
}

const Card: FC<CardProps> = memo(({uri, width, height}) => {
  return (
    <TouchableOpacity style={{...styles.container, width, height}}>
      <Image source={{uri}} style={styles.card} />
    </TouchableOpacity>
  );
});

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.QATAR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  card: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    resizeMode: 'contain',
  },
});
