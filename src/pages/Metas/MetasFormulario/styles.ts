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
  textArea: {
    height: 100,
    textAlignVertical: 'top',
    paddingTop: 12,
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: theme.colors.onPrimary,
    marginBottom: 16,
  },
  saveButton: {
    marginBottom: 12,
  },
});