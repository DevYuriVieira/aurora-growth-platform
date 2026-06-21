import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const Styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 24, 
    backgroundColor: theme.colors.surface, 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  sucesso: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: theme.colors.primary, 
    marginBottom: 8 
  },
  instrucao: { 
    fontSize: 14, 
    color: theme.colors.onSurfaceVariant, 
    textAlign: 'center', 
    marginBottom: 20, 
    paddingHorizontal: 10 
  },
  tituloEvento: { 
    fontSize: 16, 
    fontWeight: '600', 
    color: theme.colors.onSurface, 
    marginBottom: 24, 
    textAlign: 'center' 
  },
  areaQRCode: { 
    padding: 24, 
    backgroundColor: '#FFFFFF', 
    borderRadius: 16, 
    marginBottom: 24 
  },
  quadradoPlaceholder: { 
    width: 160, 
    height: 160, 
    backgroundColor: '#EEE', 
    borderWidth: 2, 
    borderColor: '#CCC', 
    borderStyle: 'dashed', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  textoPlaceholder: { 
    color: '#666', 
    fontWeight: 'bold', 
    fontSize: 12 
  },
  codigoTexto: { 
    color: '#999', 
    fontSize: 10, 
    marginTop: 8 
  },
  containerCopiar: { 
    width: '100%', 
    paddingHorizontal: 16, 
    marginBottom: 32 
  },
  labelCopiar: { 
    fontSize: 11, 
    fontWeight: 'bold', 
    color: theme.colors.outline, 
    marginBottom: 6 
  },
  boxCopia: { 
    flexDirection: 'row', 
    backgroundColor: theme.colors.surfaceContainerHigh, 
    borderRadius: 8, 
    borderWidth: 1, 
    borderColor: theme.colors.surfaceBright, 
    alignItems: 'center', 
    overflow: 'hidden' 
  },
  textoCodigo: { 
    flex: 1, 
    paddingHorizontal: 12, 
    fontSize: 14, 
    color: theme.colors.onSurface 
  },
  botaoCopiar: { 
    backgroundColor: theme.colors.primaryContainer, 
    paddingVertical: 14, 
    paddingHorizontal: 18, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  textoBotaoCopiar: { 
    color: theme.colors.onPrimaryContainer, 
    fontWeight: 'bold', 
    fontSize: 13 
  },
  botaoVoltar: { 
    backgroundColor: theme.colors.surfaceBright, 
    paddingHorizontal: 32, 
    paddingVertical: 16, 
    borderRadius: 8,
    borderWidth: 1,
    borderColor:theme.colors.surfaceContainerLow,
    width: '100%', 
    alignItems: 'center' 
  },
  textoBotao: { 
    color: theme.colors.onSurface, 
    fontWeight: 'bold' 
  }
});