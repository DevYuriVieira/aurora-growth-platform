import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/theme';

export const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    fontWeight: 'bold',
    color: theme.colors.onPrimary,
    marginBottom: 6,
  },
  input: {
    height: 48,
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 10,
    paddingHorizontal: 14,
    fontSize: 14,
    color: theme.colors.onPrimary,
    backgroundColor: theme.colors.surfaceBright,
  },
  inputError: {
    borderColor: theme.colors.error,
  },
  errorText: {
    marginTop: 4,
    fontSize: 12,
    color: theme.colors.error,
  },
});