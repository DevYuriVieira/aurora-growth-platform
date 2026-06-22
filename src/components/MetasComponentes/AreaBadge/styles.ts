import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/theme';

export const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.surfaceContainerHigh,
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
  },
});