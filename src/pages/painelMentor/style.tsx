import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const Styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: theme.colors.surface, 
    padding: 16 
  },
  centro: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: theme.colors.surface 
  },
  cabecalho: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: theme.colors.onSurface, 
    marginBottom: 16, 
    textAlign: 'center' 
  },
  botaoNovo: { 
    backgroundColor: theme.colors.primary, 
    padding: 14, 
    borderRadius: 8, 
    alignItems: 'center', 
    marginBottom: 20 
  },
  textoBotaoNovo: { 
    color: theme.colors.onPrimary, 
    fontWeight: 'bold', 
    fontSize: 16 
  },
  cardAdmin: { 
    backgroundColor: theme.colors.surfaceContainerHigh, 
    padding: 16, 
    borderRadius: 8, 
    marginBottom: 12, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.surfaceContainerLow
  },
  infoCard: { 
    flex: 1, 
    marginRight: 8 
  },
  tituloCard: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: theme.colors.onSurface 
  },
  mentorCard: { 
    fontSize: 13, 
    color: theme.colors.primary, 
    marginTop: 2 
  },
  acoesCard: { 
    flexDirection: 'row', 
    gap: 8 
  },
  botaoEditar: { 
    backgroundColor: theme.colors.surfaceBright, 
    paddingVertical: 8, 
    paddingHorizontal: 12, 
    borderRadius: 6 
  },
  botaoDeletar: { 
    backgroundColor: theme.colors.error, 
    paddingVertical: 8, 
    paddingHorizontal: 12, 
    borderRadius: 6 
  },
  textoAcao: { 
    color: '#FFF', 
    fontSize: 12, 
    fontWeight: 'bold' 
  },
  fundoModal: { 
    flex: 1, 
    backgroundColor: 'rgba(0,0,0,0.7)', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  conteudoModal: { 
    width: '90%', 
    backgroundColor: theme.colors.surfaceContainerHigh, 
    borderRadius: 12, 
    padding: 20, 
    borderWidth: 1, 
    borderColor: theme.colors.surfaceBright 
  },
  tituloModal: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: theme.colors.onSurface, 
    marginBottom: 16, 
    textAlign: 'center' 
  },
  input: { 
    backgroundColor: theme.colors.surface, 
    color: theme.colors.onSurface, 
    padding: 12, 
    borderRadius: 6, 
    marginBottom: 12, 
    borderWidth: 1, 
    borderColor: theme.colors.surfaceBright 
  },
  botoesForm: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    gap: 12, 
    marginTop: 8 
  },
  botaoCancelar: { 
    flex: 1, 
    backgroundColor: theme.colors.surfaceBright, 
    padding: 12, 
    borderRadius: 6, 
    alignItems: 'center' 
  },
  botaoSalvar: { 
    flex: 1, 
    backgroundColor: theme.colors.primary, 
    padding: 12, 
    borderRadius: 6, 
    alignItems: 'center' 
  },
  textoBotao: { 
    color: '#FFF', 
    fontWeight: 'bold' 
  }
});