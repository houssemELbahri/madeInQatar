import React from 'react';
import {View, Text, Image} from 'react-native';
import {COLORS} from '../../Constants/Colors';

interface HistoryCardProps {
  winner: string;
  year: number;
  url: string;
  host: string;
}

const HistoryCard = ({host, winner, year, url}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 90,
        width: '95%',
        borderRadius: 5,
        backgroundColor: COLORS.QATAR,
        paddingVertical: 5,
        marginVertical: 3,
      }}>
      <View style={{flex: 1}}>
        <Image
          style={{
            flex: 1,
            //width: '100%',
            //height: '100%',
            //borderRadius: 50,
            //backgroundColor: 'red',
            overflow: 'hidden',
          }}
          source={{
            uri: url,
          }}
        />
      </View>
      <View style={{flex: 3, paddingStart: 20}}>
        <Text style={{fontSize: 18, fontWeight: '600', color: COLORS.WHITE}}>
          FIFA WORLD CUP {host} {year}
        </Text>
        <Text style={{color: COLORS.WHITE}}>Winner : {winner}</Text>
      </View>
    </View>
  );
};

export default HistoryCard;
