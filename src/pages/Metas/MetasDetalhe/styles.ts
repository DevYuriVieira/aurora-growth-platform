import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.surface,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.surface,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: theme.colors.onPrimary,
    marginTop: 12,
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: theme.colors.onSurfaceVariant,
    marginBottom: 20,
    lineHeight: 20,
  },
  progressSection: {
    marginBottom: 24,
  },
  statusText: {
    marginTop: 8,
    fontSize: 13,
    color: theme.colors.outline,
  },
  stepsSection: {
    marginBottom: 24,
  },
  stepsTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: theme.colors.onSurface,
    marginBottom: 8,
  },
  noSteps: {
    fontSize: 13,
    color: theme.colors.outline,
  },
  actionButton: {
    marginBottom: 12,
  },
});