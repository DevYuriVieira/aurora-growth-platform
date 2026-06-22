import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/theme';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.surfaceBright,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.15)',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  deleteText: {
    color: theme.colors.error,
    fontSize: 13,
    fontWeight: '600',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.onSurface,
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    color: theme.colors.onSurfaceVariant,
    marginBottom: 12,
  },
  status: {
    marginTop: 6,
    fontSize: 12,
    color: theme.colors.outline,
  },
});