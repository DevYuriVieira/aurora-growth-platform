import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const Styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.surfaceContainerHigh,
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: theme.colors.surfaceContainerLow,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.onSurface,
    marginBottom: 4,
  },
  mentor: {
    fontSize: 14,
    color: theme.colors.primary,
    marginBottom: 12,
    fontWeight: '600',
  },
  rodape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: theme.colors.surfaceBright,
    paddingTop: 8,
  },
  info: {
    fontSize: 12,
    color: theme.colors.onSurfaceVariant,
  },
  local: {
    fontSize: 12,
    color: theme.colors.primary,
    maxWidth: '60%',
    fontWeight: '500',
  },
});