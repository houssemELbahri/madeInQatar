import React, {FC} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {COLORS} from '../../Constants/Colors';

interface MIQButtonProps {
  label: string;
  type?: 'small' | 'big';
  onPress: () => void;
}

const MIQButton: FC<MIQButtonProps> = ({label, onPress, type = 'big'}) => {
  return (
    <TouchableOpacity
      style={{...styles.container, width: type == 'small' ? 100 : '95%'}}
      onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default MIQButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: 40,
    borderRadius: 16,
    backgroundColor: COLORS.BLACK,
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
    color: COLORS.WHITE,
    //lineHeight: 18,
  },
});
