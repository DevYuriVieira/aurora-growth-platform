import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  centro: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F7FA',
  },
  textoLoading: {
    marginTop: 10,
    color: '#666',
    fontSize: 14,
  },
  centroVazio: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  textoVazio: {
    textAlign: 'center',
    color: '#999',
    fontSize: 16,
  },
});