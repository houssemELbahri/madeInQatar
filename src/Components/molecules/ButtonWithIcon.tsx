import React, {FC} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from '../atoms/Icon';

interface ButtonWithIconProps {
  label: string;
  type: string;
  name: string;
  color: string;
  size?: number;
}

const ButtonWithIcon: FC<ButtonWithIconProps> = ({
  label,
  type,
  name,
  color,
  size = 24,
}) => {
  return (
    <TouchableOpacity>
      <Text>{label}</Text>
      <Icon type={type} name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default ButtonWithIcon;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
