import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.surface,
  },
  conteudo: {
    padding: 24,
    flexGrow: 1,
  },
  cabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
    marginTop: 16,
  },
  subtituloAdmin: {
    fontSize: 12,
    color: theme.colors.onSurfaceVariant,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  tituloAdmin: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginTop: 4,
  },
  botaoSair: {
    backgroundColor: theme.colors.primaryContainer,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: theme.colors.outline,
  },
  textoBotaoSair: {
    color: theme.colors.onPrimaryContainer,
    fontWeight: '600',
    fontSize: 14,
  },
  gradeCards: {
    gap: 16,
  },
  card: {
    backgroundColor: theme.colors.surfaceContainerHigh,
    borderWidth: 1,
    borderColor: theme.colors.outline,
    borderRadius: 12,
    padding: 20,
  },
  tituloCard: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.onSurface,
    marginBottom: 6,
  },
  descricaoCard: {
    fontSize: 14,
    color: theme.colors.onSurfaceVariant,
    lineHeight: 20,
  },
});