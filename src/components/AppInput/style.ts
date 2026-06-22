import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,
  },
  rotulo: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors.onSurface,
    marginBottom: 6,
  },
  entrada: {
    height: 50,
    borderWidth: 1,
    borderColor: theme.colors.outline,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: theme.colors.onSurface,
    backgroundColor: theme.colors.surfaceContainerLow,
  },
  entradaComErro: {
    borderColor: theme.colors.error,
  },
  textoErro: {
    fontSize: 12,
    color: theme.colors.error,
    marginTop: 4,
  },
});