import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.surface,
        paddingHorizontal: 18,
        paddingTop: 32,
    },

    cabecalho: {
        marginBottom: 4,
    },

    titulo: {
        color: theme.colors.onSurface,
        fontSize: 28,
        fontWeight: '800',
    },

    subtitulo: {
        color: theme.colors.onSurfaceVariant,
        fontSize: 15,
        lineHeight: 22,
        marginTop: 8,
    },

    listaConteudo: {
        paddingBottom: 32,
    },

    estadoCentralizado: {
        flex: 1,
        backgroundColor: theme.colors.surface,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
    },

    textoEstado: {
        color: theme.colors.onSurfaceVariant,
        fontSize: 16,
    },

    estadoVazio: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 48,
        paddingHorizontal: 20,
    },

    tituloVazio: {
        color: theme.colors.onSurface,
        fontSize: 20,
        fontWeight: '800',
        textAlign: 'center',
    },

    textoVazio: {
        color: theme.colors.onSurfaceVariant,
        fontSize: 15,
        lineHeight: 22,
        textAlign: 'center',
        marginTop: 8,
    },

    botaoNovaPublicacao: {
        backgroundColor: theme.colors.primary,
        borderRadius: 14,
        paddingVertical: 14,
        alignItems: 'center',
        marginTop: 18,
    },

    textoBotaoNovaPublicacao: {
        color: theme.colors.onPrimary,
        fontSize: 15,
        fontWeight: '700',
    },

    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.65)',
        justifyContent: 'flex-end',
    },

    modalConteudo: {
        backgroundColor: theme.colors.surfaceContainerHigh,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingHorizontal: 20,
        paddingTop: 24,
        paddingBottom: 32,
        borderWidth: 1,
        borderColor: theme.colors.surfaceContainerLow,
        maxHeight: '90%',
    },

    modalTitulo: {
        color: theme.colors.onSurface,
        fontSize: 22,
        fontWeight: '800',
        marginBottom: 18,
    },

    labelCampo: {
        color: theme.colors.onSurface,
        fontSize: 14,
        fontWeight: '700',
        marginBottom: 8,
        marginTop: 12,
    },

    input: {
        backgroundColor: theme.colors.surfaceBright,
        color: theme.colors.onSurface,
        borderWidth: 1,
        borderColor: theme.colors.surfaceContainerLow,
        borderRadius: 14,
        paddingHorizontal: 14,
        paddingVertical: 12,
        fontSize: 15,
    },

    textArea: {
        minHeight: 100,
        textAlignVertical: 'top',
    },

    opcoesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },

    caixaOpcoes: {
        backgroundColor: theme.colors.surfaceBright,
        borderRadius: 14,
        padding: 12,
        borderWidth: 1,
        borderColor: theme.colors.surfaceContainerLow,
        marginBottom: 8,
    },

    botaoOpcao: {
        backgroundColor: theme.colors.surfaceContainerHigh,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 999,
        borderWidth: 1,
        borderColor: theme.colors.surfaceContainerLow,
    },

    botaoOpcaoAtivo: {
        backgroundColor: theme.colors.primary,
        borderColor: theme.colors.primary,
    },

    textoOpcao: {
        color: theme.colors.onSurfaceVariant,
        fontSize: 13,
        fontWeight: '600',
    },

    textoOpcaoAtivo: {
        color: theme.colors.onPrimary,
    },

    modalAcoes: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 18,
    },

    botaoModal: {
        flex: 1,
        paddingVertical: 14,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },

    botaoCancelar: {
        backgroundColor: theme.colors.surfaceBright,
        borderWidth: 1,
        borderColor: theme.colors.surfaceContainerLow,
    },

    botaoSalvar: {
        backgroundColor: theme.colors.primary,
    },

    textoCancelar: {
        color: theme.colors.onSurface,
        fontSize: 15,
        fontWeight: '700',
    },

    textoSalvar: {
        color: theme.colors.onPrimary,
        fontSize: 15,
        fontWeight: '700',
    },

    caixaErroFormulario: {
        backgroundColor: theme.colors.primaryContainer,
        borderWidth: 1,
        borderColor: theme.colors.error,
        borderRadius: 12,
        padding: 12,
        marginBottom: 14,
    },

    textoErroFormulario: {
        color: theme.colors.onPrimaryContainer,
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 20,
    },
});