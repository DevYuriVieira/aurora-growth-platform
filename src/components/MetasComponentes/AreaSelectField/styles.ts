import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/theme';

export const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: theme.colors.onSurface,
    marginBottom: 8,
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: theme.colors.surfaceContainerHigh,
    marginRight: 8,
  },
  chipSelected: {
    backgroundColor: theme.colors.primary,
  },
  chipText: {
    fontSize: 13,
    color: theme.colors.onSurfaceVariant,
    fontWeight: '600',
  },
  chipTextSelected: {
    color: theme.colors.onPrimary,
  },
  errorText: {
    marginTop: 6,
    fontSize: 12,
    color: theme.colors.error,
  },
});