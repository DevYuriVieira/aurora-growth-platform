import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/theme';

export const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 13,
    fontWeight: 'bold',
    color: theme.colors.onPrimary,
  },
  valor: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#fff',
  },
  slider: {
    width: '100%',
    height: 40,
  },
});