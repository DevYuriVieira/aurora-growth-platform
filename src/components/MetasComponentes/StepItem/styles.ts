import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/theme';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  titulo: {
    fontSize: 14,
    color: theme.colors.onPrimary,
    flex: 1,
    marginLeft: 12,
  },
  tituloConcluido: {
    textDecorationLine: 'line-through',
    color: theme.colors.outline,
  },
});