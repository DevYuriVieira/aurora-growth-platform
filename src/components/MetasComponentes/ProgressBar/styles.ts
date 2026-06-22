import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/theme';

export const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  track: {
    width: '100%',
    backgroundColor: theme.colors.surfaceBright,
    borderRadius: 999,
    overflow: 'hidden',
  },
  fill: {
    borderRadius: 999,
    backgroundColor: theme.colors.primary,
  },
  label: {
    marginTop: 4,
    fontSize: 12,
    color: theme.colors.onSurfaceVariant,
    textAlign: 'right',
  },
});