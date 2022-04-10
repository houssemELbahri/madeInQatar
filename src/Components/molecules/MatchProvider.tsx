import React, {FC} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {COLORS} from '../../Constants/Colors';

interface MatchProviderProps {
  team1: string;
  team2: string;
  url1: string;
  url2: string;
  date: Date;
  time: string;
  stadium: string;
}

const MatchProvider: FC<MatchProviderProps> = ({
  team1,
  team2,
  url1,
  url2,
  date,
  time,
  stadium,
}) => {
  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          //backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
          //width: '50%',
          paddingHorizontal: 10,
          //paddingVertical: 1,
        }}>
        <Text style={{color: 'white'}}>
          {date} - {time}{' '}
        </Text>
      </View>
      <View style={styles.container}>
        <View
          style={{
            //backgroundColor: 'pink',
            flex: 3,
            height: '100%',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 2,
              height: '100%',
              //backgroundColor: 'yellow',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: '#dedede',
              }}
              source={{
                uri: url1,
              }}
            />
          </View>
          <View style={{flex: 3}}>
            <Text style={{paddingStart: 10, color: COLORS.QATAR, fontSize: 18}}>
              {team1}
            </Text>
          </View>
        </View>
        <View
          style={{
            //backgroundColor: 'green',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}>
          <Image
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: '#dedede',
            }}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQREdaQcMY7OE1-ya9ExxrXZ1y-ShmCVVLDzA&usqp=CAU',
            }}
          />
        </View>
        <View
          style={{
            //backgroundColor: 'pink',
            flex: 3,
            height: '100%',
            flexDirection: 'row-reverse',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 2,
              height: '100%',
              //backgroundColor: 'yellow',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: '#dedede',
              }}
              source={{
                uri: url2,
              }}
            />
          </View>
          <View style={{flex: 3}}>
            <Text
              style={{
                textAlign: 'right',
                paddingEnd: 10,
                color: COLORS.QATAR,
                fontSize: 18,
              }}>
              {team2}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          //justifyContent: 'center',
          alignItems: 'center',
          //width: '50%',
          paddingHorizontal: 10,
          paddingVertical: 3,
          borderRadius: 5,
        }}>
        <Text style={{color: COLORS.QATAR}}>Stade {stadium}</Text>
      </View>
    </View>
  );
};

export default MatchProvider;

const styles = StyleSheet.create({
  mainContainer: {
    //backgroundColor: 'pink',
    margin: 10,
    justtifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    //height: 80,
  },
  container: {
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    width: '100%',
    borderRadius: 5,
    marginBottom: 2,
  },
});
