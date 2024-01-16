import {StyleSheet, StatusBar} from 'react-native';
import {THEME} from '../../constants/theme';
const _spacing = 10;
const _height = 200;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
    padding: _spacing,
  },
  item: {
    backgroundColor: THEME.colors.background,
    marginBottom: _spacing,
    height: _height,
    borderRadius: 16,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  artistTitle: {
    position: 'absolute',
    bottom: _spacing,
    left: _spacing,
    fontWeight: '700',
    fontSize: 16,
    textTransform: 'uppercase',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0,1)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    maxWidth: '85%',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
});
