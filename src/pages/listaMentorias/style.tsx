import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const Styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: theme.colors.surface, 
  },
  centro: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: theme.colors.surface,
    gap: 12
  },
  textoLoading: {
    color: theme.colors.onSurfaceVariant,
    fontSize: 14,
    fontWeight: '500'
  },
  centroVazio: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32
  },
  textoVazio: { 
    color: theme.colors.onSurfaceVariant, 
    fontSize: 16, 
    textAlign: 'center',
    lineHeight: 22
  }
});