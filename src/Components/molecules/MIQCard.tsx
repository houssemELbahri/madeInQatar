import React, {FC} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Alert,
  ImageBackground,
  Dimensions,
} from 'react-native';
import MIQButton from '../atoms/MIQButton';
import {COLORS} from '../../Constants/Colors';

interface MIQCardProps {
  url?: string;
  title: string;
  content: string;
  type?: string;
  label?: string;
  onPress: () => void;
}

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const MIQCard: FC<MIQCardProps> = ({uri, title, content, url, onPress}) => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageContainer} source={{uri: url}}>
        <View
          style={{
            flex: 1,
            paddingStart: 20,
            justifyContent: 'flex-end',
          }}>
          <Text
            style={{
              fontSize: 26,
              fontWeight: 'bold',
              color: 'rgba(255,255,255,0.8)',
            }}>
            {title}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            width: '68%',
            paddingStart: 20,
            //backgroundColor: 'yellow',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 16, color: 'rgba(255,255,255,0.8)'}}>
            {content}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            paddingStart: 20,
            justifyContent: 'center',
          }}>
          <MIQButton type={'small'} label={'Voter'} onPress={onPress} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default MIQCard;

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH * 0.9,
    height: 180,
    borderRadius: 20,
    marginVertical: 5,
    marginHorizontal: 5,
    overflow: 'hidden',
  },
  imageContainer: {
    flex: 1,
    //width: '100%',
    //height: '100%',
  },
});
