import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {COLORS} from '../../Constants/Colors';
import MIQAnimatedIcon from '../atoms/MIQAnimatedIcon';
import {Icons} from '../atoms/Icon';

const ScreenHeader = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 5,
          //backgroundColor: 'green',
          paddingStart: 15,
        }}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          //backgroundColor: 'green',
        }}>
        <MIQAnimatedIcon
          type={Icons.Ionicons}
          name={'menu'}
          color={COLORS.QATAR}
          onPress={onPress}
          pressed={true}
        />
      </View>
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.QATAR,
    height: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 27,
    color: COLORS.WHITE,
    //fontWeight: 'bold',
    fontWeight: '400',
  },
});
