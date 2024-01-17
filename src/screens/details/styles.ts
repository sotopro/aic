import {StyleSheet} from 'react-native';
import {THEME} from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 400,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  detailContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: THEME.colors.text,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    paddingBottom: 10,
    color: THEME.colors.text,
  },
  artistTitle: {
    fontSize: 16,
    fontWeight: '500',
    paddingBottom: 10,
    color: THEME.colors.text,
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    paddingBottom: 10,
    color: THEME.colors.text,
  },
  artworkType: {
    fontSize: 14,
    fontWeight: '300',
    paddingBottom: 10,
    color: THEME.colors.text,
  },
  copyright: {
    fontSize: 12,
    fontWeight: '300',
    paddingBottom: 10,
    color: THEME.colors.text,
  },
  timestamp: {
    fontSize: 14,
    fontWeight: '500',
    paddingBottom: 10,
    color: THEME.colors.text,
  },
});
