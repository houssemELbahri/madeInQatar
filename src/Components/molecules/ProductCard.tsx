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

interface ProductCardProps {
  title: string;
  price: number;
  content?: string;
  url: string;
  onPress: () => void;
}

const ProductCard: FC<ProductCardProps> = ({
  title,
  price,
  content,
  url,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image
          style={{
            flex: 1,
            //resizeMode: 'center',
            height: '100%',
            width: '100%',
          }}
          source={{uri: url}}
        />
      </View>
      <View style={{flex: 3}}>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'black',
              paddingStart: 10,
            }}>
            {title}
          </Text>
        </View>
        <View style={{flex: 4, justifyContent: 'flex-start'}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'black',
              paddingStart: 10,
            }}>
            {price} $
          </Text>
        </View>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <Text style={{paddingStart: 10, color: COLORS.QATAR}}>Acheter</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: SCREEN_WIDTH * 0.8,
    height: 150,
    borderRadius: 10,
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 5,
    overflow: 'hidden',
  },
  imageContainer: {
    flexDirection: 'row',
    flex: 2,
    height: '100%',
    width: '100%',
  },
  head: {
    flexDirection: 'row',
  },
});
