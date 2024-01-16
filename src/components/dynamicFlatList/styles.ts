import {StyleSheet, StatusBar} from 'react-native';
import {THEME} from '../../constants/theme';
const _spacing = 10;
const _height = 270;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
    padding: _spacing,
  },
  item: {
    backgroundColor: THEME.colors.primary,
    marginBottom: _spacing,
    height: _height,
    padding: _spacing,
    borderRadius: 16,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  artistTitle: {
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
