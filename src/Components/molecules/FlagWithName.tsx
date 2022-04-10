import React, {FC} from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';
import {COLORS} from '../../Constants/Colors';
import Icon, {Icons} from '../atoms/Icon';
import MIQAnimatedIcon from '../atoms/MIQAnimatedIcon';

interface FlagWithNameProps {
  label: number;
  url: string;
}

const FlagWithName: FC<FlagWithNameProps> = ({label, url}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        //justifyContent: 'space-around',
        //backgroundColor: 'yellow',
        marginVertical: 1,
        paddingVertical: 1,
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          //backgroundColor: 'green',
        }}>
        <Image
          //resizeMode="cover"
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            borderWidth: 0.5,
            borderColor: '#dedede',
            overflow: 'hidden',
          }}
          // source={{uri: url}}
          source={require('../../../android/app/src/main/res/drawable/tunisa.png')}
        />
      </View>
      <View style={{flex: 3}}>
        <Text style={{fontSize: 17, textAlign: 'left', color: COLORS.QATAR}}>
          {label}
        </Text>
      </View>
    </View>
  );
};

export default FlagWithName;
