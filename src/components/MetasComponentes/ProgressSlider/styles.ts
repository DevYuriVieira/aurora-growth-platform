import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/theme';

export const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: theme.colors.onSurface,
  },
  value: {
    fontSize: 13,
    fontWeight: '700',
    color: theme.colors.primary,
  },
  slider: {
    width: '100%',
    height: 40,
  },
});