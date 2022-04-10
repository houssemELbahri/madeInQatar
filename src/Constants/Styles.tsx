import {StyleSheet} from 'react-native';
import {COLORS} from './Colors';

const STYLES = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.QATAR,
  },
  header: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    width: '100%',
    zIndex: 100,
  },
});

export default STYLES;
