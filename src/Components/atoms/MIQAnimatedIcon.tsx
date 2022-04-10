import React, {useEffect, useRef} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {COLORS} from '../../Constants/Colors';
import Icon from './Icon';

const MIQAnimatedIcon = ({pressed, name, type, color, onPress}) => {
  const viewRef = useRef(null);

  useEffect(() => {
    if (pressed) {
      viewRef.current.animate({
        0: {scale: 0.3, rotate: '0deg'},
        1: {scale: 1.5, rotate: '360deg'},
      });
    } else {
      viewRef.current.animate({
        0: {scale: 1.5, rotate: '360deg'},
        1: {scale: 1, rotate: '0deg'},
      });
    }
  }, []);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View
        ref={viewRef}
        duration={1000}
        style={styles.animatedContainer}>
        <Icon type={type} name={name} color={color} />
      </Animatable.View>
    </TouchableOpacity>
  );
};

export default MIQAnimatedIcon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
