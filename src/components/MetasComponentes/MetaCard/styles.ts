import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/theme';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.surfaceBright,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.15)',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.onPrimary,
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 13,
    color: theme.colors.onPrimaryContainer,
    marginBottom: 12,
  },
  status: {
    marginTop: 6,
    fontSize: 12,
    color: theme.colors.outline,
  },
});