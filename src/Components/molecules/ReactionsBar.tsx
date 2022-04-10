import React from 'react';
import {View, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import {COLORS} from '../../Constants/Colors';

import Icon, {Icons} from '../atoms/Icon';
import IconWithLabel from './IconWithLabel';

const ReactionsBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.interactionsContainer}>
        <IconWithLabel
          label={1995}
          type={Icons.Ionicons}
          name={'grid'}
          isPressed={true}
          onPress={() => {
            Alert.alert('like');
          }}
        />
        <IconWithLabel
          label={1995}
          type={Icons.Ionicons}
          name={'grid'}
          isPressed={true}
          onPress={() => {
            Alert.alert('comment');
          }}
        />
        <IconWithLabel
          label={1995}
          type={Icons.Ionicons}
          name={'grid'}
          isPressed={true}
          onPress={() => {
            Alert.alert('share');
          }}
        />
      </View>
      <TouchableOpacity>
        <Icon
          type={Icons.Ionicons}
          name={'grid'}
          color={COLORS.RED}
          size={20}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ReactionsBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    height: 40,
    backgroundColor: 'pink',
    marginVertical: 3,
    alignItems: 'center',
  },
  interactionsContainer: {
    flexDirection: 'row',
  },
});
