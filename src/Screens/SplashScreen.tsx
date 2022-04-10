import React, {useRef, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

const SplashScreen = ({navigation}) => {
  const myRef = useRef(null);
  useEffect(() => {
    if (!myRef.current) {
      myRef.current.play;
    }
  }, []);
  return (
    <View style={styles.container}>
      <LottieView
        ref={myRef}
        source={require('../Constants/fiveCircles.json')}
        loop={false}
        autoPlay
        onAnimationFinish={() => (
          console.log('finished'), navigation.navigate('BottomTabNavigation')
        )}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
