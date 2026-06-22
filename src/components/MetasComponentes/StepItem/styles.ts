import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/theme';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: theme.colors.outline,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  checkboxDone: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  checkmark: {
    color: theme.colors.onPrimary,
    fontSize: 13,
    fontWeight: '700',
  },
  title: {
    fontSize: 14,
    color: theme.colors.onSurface,
    flex: 1,
  },
  titleDone: {
    textDecorationLine: 'line-through',
    color: theme.colors.outline,
  },
});