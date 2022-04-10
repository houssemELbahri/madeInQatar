import React, {useRef, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';

const AnimatedLogo = () => {
  const viewRef1 = useRef(null);
  const viewRef2 = useRef(null);
  const viewRef3 = useRef(null);
  const viewRef4 = useRef(null);
  const viewRef5 = useRef(null);

  const part1 = () => {
    viewRef1.current.animate({
      0: {scale: 0.3, rotate: '0deg'},
      1: {scale: 1.5, rotate: '360deg'},
    });
    viewRef2.current.animate({
      0: {scale: 0.3, rotate: '0deg'},
      1: {scale: 1.5, rotate: '360deg'},
    });
  };

  const part2 = () => {
    viewRef3.current.animate({
      0: {scale: 0.3, rotate: '0deg'},
      1: {scale: 1.5, rotate: '360deg'},
    });
    viewRef4.current.animate({
      0: {scale: 0.3, rotate: '0deg'},
      1: {scale: 1.5, rotate: '360deg'},
    });
  };

  useEffect(() => {
    part1();
    part2();
    viewRef5.current.animate({
      0: {scale: 0.3, rotate: '0deg'},
      1: {scale: 1.5, rotate: '360deg'},
    });
    // } else {
    //   viewRef.current.animate({
    //     0: {scale: 1.5, rotate: '360deg'},
    //     1: {scale: 1, rotate: '0deg'},
    //   });
    // }
  }, []);

  return (
    <View style={styles.container}>
      <Animatable.View style={{paddingHorizontal: 5}} ref={viewRef1}>
        <Text>Be </Text>
      </Animatable.View>
      <Animatable.View ref={viewRef2}>
        <Text> </Text>
      </Animatable.View>
      <Animatable.View style={{paddingHorizontal: 5}} ref={viewRef3}>
        <Text> In </Text>
      </Animatable.View>
      <Animatable.View ref={viewRef4}>
        <Text> </Text>
      </Animatable.View>
      <Animatable.View ref={viewRef5}>
        <Text> Qatar</Text>
      </Animatable.View>
    </View>
  );
};

export default AnimatedLogo;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    width: 150,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
