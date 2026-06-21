import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const Styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 24, 
    backgroundColor: theme.colors.surface 
  },
  centro: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: theme.colors.surface 
  },
  titulo: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: theme.colors.onSurface, 
    marginBottom: 8 
  },
  mentor: { 
    fontSize: 18, 
    color: theme.colors.primary, 
    marginBottom: 16, 
    fontWeight: '600' 
  },
  descricao: { 
    fontSize: 16, 
    color: theme.colors.onSurfaceVariant, 
    lineHeight: 24, 
    marginBottom: 24 
  },
  info: { 
    fontSize: 14, 
    color: theme.colors.onSurfaceVariant, 
    marginBottom: 8 
  },
  botaoInscricao: { 
    backgroundColor: theme.colors.primary, 
    padding: 16, 
    borderRadius: 8, 
    alignItems: 'center', 
    marginTop: 32 
  },
  textoBotao: { 
    color: theme.colors.onPrimary, 
    fontWeight: 'bold', 
    fontSize: 16 
  },
  botaoCompartilhar: { 
    borderWidth: 1, 
    borderColor: theme.colors.outline, 
    padding: 16, 
    borderRadius: 8, 
    alignItems: 'center', 
    marginTop: 12 
  },
  textoBotaoCompartilhar: { 
    color: theme.colors.onSurface, 
    fontWeight: 'bold', 
    fontSize: 16 
  },
  fundoModal: { 
    flex: 1, 
    backgroundColor: 'rgba(0,0,0,0.7)', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  conteudoModal: { 
    width: '85%', 
    backgroundColor: theme.colors.surfaceContainerHigh, 
    padding: 24, 
    borderRadius: 16, 
    alignItems: 'center', 
    borderWidth: 1, 
    borderColor: theme.colors.surfaceBright 
  },
  tituloModal: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    color: theme.colors.onSurface, 
    marginBottom: 12 
  },
  textoModal: { 
    textAlign: 'center', 
    color: theme.colors.onSurfaceVariant, 
    marginBottom: 24, 
    lineHeight: 20 
  },
  botoesModal: { 
    flexDirection: 'row', 
    gap: 12 
  },
  botaoModal: { 
    flex: 1, 
    padding: 14, 
    borderRadius: 8, 
    alignItems: 'center' 
  },
  botaoCancelar: { 
    backgroundColor: theme.colors.surfaceBright 
  },
  botaoConfirmar: { 
    backgroundColor: theme.colors.primary 
  },
  textoBotaoModal: { 
    fontWeight: 'bold', 
    color: theme.colors.onPrimary 
  }
});