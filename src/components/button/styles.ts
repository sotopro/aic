import {StyleSheet} from 'react-native';
import {THEME} from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: THEME.colors.primary,
    paddingVertical: 15,
  },
  text: {
    color: '#ffffff',
    fontWeight: '700',
    textAlign: 'center',
    justifyContent: 'center',
  },
});
