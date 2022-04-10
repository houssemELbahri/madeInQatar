import React, {useState, useRef} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const StadiumsScreen = () => {
  const [fullShowView, setFullShowView] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <Image
        style={{width: '100%', height: 270}}
        source={{
          uri: 'https://cloudinary.fifa.com/m/50ae994c364644ae/original/viczfsdqdoff7tb2euys-jpg.jpg?tx=c_fill,ar_1.33,x_2700,y_1519,g_xy_center,q_auto:best,w_636',
        }}
      />
      <View
        style={{
          //height: 60,
          backgroundColor: '#dedede',
          justifyContent: 'center',
          paddingHorizontal: 5,
          paddingTop: 10,
          //paddingBottom: 10,
        }}>
        <Text style={{paddingBottom: 5, fontSize: 18, fontWeight: '700'}}>
          Description
        </Text>
        <Text
          style={{textAlign: 'left', fontSize: 16, lineHeight: 22}}
          numberOfLines={fullShowView ? undefined : 3}>
          le stade 974 est consrtuit en 2002 et refacored in 2010 ,opened for
          the first time in le stade 974 est consrtuit en 2002 et refacored in
          2010 ,opened for the first time in, le stade 974 est consrtuit en 2002
          et refacored in 2010 ,opened for the first time in , le stade 974 est
          consrtuit en 2002 et refacored in 2010 ,opened for the first time in,
          le stade 974 est consrtuit en 2002 et refacored in 2010 ,opened for
          the first time in , le stade 974 est consrtuit en 2002 et refacored in
          2010 ,opened for the first time in .
        </Text>
        <TouchableOpacity
          onPress={() => {
            setFullShowView(p => !p);
          }}
          style={{
            //backgroundColor: 'red',
            alignSelf: 'flex-end',
            paddingVertical: 5,
            paddingHorizontal: 7,
          }}>
          <Text style={{textAlign: 'center', fontSize: 18, fontWeight: '700'}}>
            {fullShowView ? 'less' : 'more'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StadiumsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
  },
});
