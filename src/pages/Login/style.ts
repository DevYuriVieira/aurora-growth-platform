import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.surface,
  },
  conteudo: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: theme.colors.primary,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 16,
    color: theme.colors.onSurfaceVariant,
    textAlign: 'center',
    marginBottom: 32,
  },
  botaoGoogle: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: theme.colors.surfaceContainerHigh,
    borderWidth: 1,
    borderColor: theme.colors.outline,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 12,
  },
  textoGoogle: {
    color: theme.colors.onSurface,
    fontSize: 16,
    fontWeight: '600',
  },
  linkCadastro: {
    marginTop: 24,
    alignItems: 'center',
  },
  textoLink: {
    fontSize: 14,
    color: theme.colors.onSurfaceVariant,
  },
  textoLinkDestaque: {
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
});