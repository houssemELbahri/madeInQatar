import React, {FC} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {COLORS} from '../../Constants/Colors';
import Icon from '../atoms/Icon';

interface IconWithLabelProps {
  label: string;
  type: string;
  name: string;
  color?: string;
  onPress: () => void;
}

const IconWithLabel: FC<IconWithLabelProps> = ({
  label,
  type,
  name,
  color = 'white',
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View
        style={{
          width: 40,
          //backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon type={type} name={name} color={color} size={25} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default IconWithLabel;

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    //backgroundColor: 'red',
    marginVertical: 5,
  },
  label: {
    color: COLORS.WHITE,
    paddingStart: 5,
    fontSize: 19,
    fontWeight: '500',
    //fontWeight: 'bold',
  },
});
