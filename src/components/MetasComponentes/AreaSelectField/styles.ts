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
    marginBottom: 8,
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: theme.colors.surfaceBright,
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.15)',
    marginRight: 8,
  },
  chipSelecionado: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  chipTexto: {
    fontSize: 13,
    color: theme.colors.onPrimaryContainer,
    fontWeight: '600',
  },
  chipTextoSelecionado: {
    color: theme.colors.onPrimary,
  },
  errorText: {
    marginTop: 6,
    fontSize: 12,
    color: theme.colors.error,
  },
});