import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.surface,
  },
  evitarTeclado: {
    flex: 1,
  },
  scrollConteudo: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 40,
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
  linkLogin: {
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