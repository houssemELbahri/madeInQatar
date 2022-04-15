import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const VoteScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.options}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <TouchableOpacity style={{width: '98%', height: 370}}>
            <Image
              resizeMode="contain"
              style={{width: '98%', height: 370}}
              source={{
                uri: 'https://imgmedia.libero.pe/670x396/libero/original/2022/04/01/62473784fee08773835d3b4a.webp',
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            //backgroundColor: 'yellow',
            width: 40,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: 40,
              height: 40,
              borderColor: 'black',
              //backgroundColor: 'green',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
            }}>
            <Text>VS</Text>
          </View>
        </View>
        <View
          style={{
            //backgroundColor: 'red',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity style={{width: '98%', height: 370}}>
            <Image
              resizeMode="contain"
              style={{width: '98%', height: 370}}
              source={{
                uri: 'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/04/02/1294597-ron.jpg',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.result}>
        <Text>taraji ya dawla</Text>
      </View>
    </View>
  );
};

export default VoteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirecion: 'row',
    //backgroundColor: 'red',
  },
  options: {
    flex: 2,
    width: '100%',
    //backgroundColor: 'green',
    flexDirection: 'row',
  },
  result: {
    flex: 1,
    //backgroundColor: 'yellow',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
