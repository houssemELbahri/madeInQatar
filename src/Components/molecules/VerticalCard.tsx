import React, {FC} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {COLORS} from '../../Constants/Colors';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

interface VerticalCardProps {
  title: string;
  content: string;
  url: string;
  onPress: () => void;
}

const VerticalCard: FC<VerticalCardProps> = ({
  title,
  content,
  url,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image style={{flex: 1}} source={{uri: url}} />
      </View>
      <View style={{flex: 2}}>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <Text style={{paddingStart: 10}}>{title}</Text>
        </View>
        <View style={{flex: 4, justifyContent: 'flex-start'}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'black',
              paddingStart: 10,
            }}>
            {content}
          </Text>
        </View>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <Text style={{paddingStart: 10, color: COLORS.QATAR}}>Découvrir</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default VerticalCard;

const styles = StyleSheet.create({
  container: {
    //flexDirection: 'row',
    width: SCREEN_WIDTH * 0.7,
    height: 250,
    borderRadius: 10,
    backgroundColor: 'white',
    marginVertical: 5,
    marginHorizontal: 5,
    overflow: 'hidden',
  },
  imageContainer: {
    flexDirection: 'row',
    flex: 3.5,
    height: '100%',
    width: '100%',
  },
  head: {
    flexDirection: 'row',
  },
});
