import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/theme';

export const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  track: {
    height: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    borderRadius: 6,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    backgroundColor: theme.colors.primary,
    borderRadius: 6,
  },
  label: {
    marginTop: 4,
    fontSize: 12,
    color: theme.colors.onPrimaryContainer,
    textAlign: 'right',
  },
});