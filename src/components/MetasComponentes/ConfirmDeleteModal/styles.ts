import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/theme';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  card: {
    width: '100%',
    backgroundColor: theme.colors.surfaceBright,
    borderRadius: 16,
    padding: 20,
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.15)',
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.onPrimary,
    marginBottom: 8,
  },
  mensagem: {
    fontSize: 13,
    color: theme.colors.onPrimaryContainer,
    marginBottom: 20,
    lineHeight: 18,
  },
  acoes: {
    flexDirection: 'row',
    gap: 12,
  },
  botaoAcao: {
    flex: 1,
  },
});