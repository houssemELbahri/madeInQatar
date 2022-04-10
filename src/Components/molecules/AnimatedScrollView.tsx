import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  ImageBackground,
  Text,
  StyleSheet,
} from 'react-native';

const AnimatedScrollView = ({dailyProgram}) => {
  const isFocused = useIsFocused();
  const [currentImage, setCurrentImage] = useState<number>(1);

  console.log('from animated scrollview');

  useEffect(() => {
    const loopInterval = setInterval(() => {
      setCurrentImage(p => (p == 4 ? 1 : p + 1));
    }, 3500);
    return () => {
      clearInterval(loopInterval);
    };
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
        source={{
          uri: dailyProgram[currentImage - 1],
        }}>
        <View
          style={{
            flexDirection: 'row',
            //marginVertical: 3,
            paddingVertical: 2,
            //backgroundColor: 'rgba(125,125,125,0.5)',
            height: 20,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={currentImage == 1 ? styles.activeIcon : styles.inactiveIcon}
          />
          <View
            style={currentImage == 2 ? styles.activeIcon : styles.inactiveIcon}
          />
          <View
            style={currentImage == 3 ? styles.activeIcon : styles.inactiveIcon}
          />
          <View
            style={currentImage == 4 ? styles.activeIcon : styles.inactiveIcon}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default AnimatedScrollView;

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '95%',
    //backgroundColor: 'red',
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 5,
  },
  activeIcon: {
    backgroundColor: 'rgba(255,255,255,1)',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 2,
  },
  inactiveIcon: {
    backgroundColor: 'rgba(30,30,30,0.8)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
    //borderWidth: 1,
    //borderColor: 'black',
  },
});
