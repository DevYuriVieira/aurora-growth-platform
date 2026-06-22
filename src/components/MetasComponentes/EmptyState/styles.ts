import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
    paddingHorizontal: 32,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.onPrimary,
    textAlign: 'center',
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 13,
    color: theme.colors.onPrimaryContainer,
    textAlign: 'center',
  },
});