import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FAFB',
        paddingHorizontal: 18,
        paddingTop: 60,
    },
    cabecalho: {
        gap: 8,
    },

    titulo: {
        color: '#111827',
        fontSize: 28,
        fontWeight: '800',
    },

    subtitulo: {
        color: '#4B5563',
        fontSize: 15,
        lineHeight: 22,
    },

    listaConteudo: {
        paddingBottom: 32,
    },

    estadoCentralizado: {
        flex: 1,
        backgroundColor: '#F9FAFB',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        paddingHorizontal: 24,
    },

    textoEstado: {
        color: '#4B5563',
        fontSize: 16,
    },

    estadoVazio: {
        marginTop: 48,
        alignItems: 'center',
        paddingHorizontal: 24,
    },

    tituloVazio: {
        color: '#111827',
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 8,
    },

    textoVazio: {
        color: '#6B7280',
        fontSize: 15,
        lineHeight: 22,
        textAlign: 'center',
    },

    botaoNovaPublicacao: {
        backgroundColor: '#111827',
        borderRadius: 14,
        paddingVertical: 14,
        alignItems: 'center',
        marginTop: 18,
    },

    textoBotaoNovaPublicacao: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '700',
    },

    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.45)',
        justifyContent: 'flex-end',
    },

    modalConteudo: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingHorizontal: 20,
        paddingTop: 24,
        paddingBottom: 32,
    },

    modalTitulo: {
        color: '#111827',
        fontSize: 22,
        fontWeight: '800',
        marginBottom: 18,
    },

    labelCampo: {
        color: '#374151',
        fontSize: 14,
        fontWeight: '700',
        marginBottom: 8,
        marginTop: 10,
    },

    input: {
        backgroundColor: '#F9FAFB',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 12,
        paddingHorizontal: 14,
        paddingVertical: 12,
        color: '#111827',
        fontSize: 15,
    },

    textArea: {
        minHeight: 90,
        textAlignVertical: 'top',
    },

    opcoesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },

    botaoOpcao: {
        backgroundColor: '#F3F4F6',
        borderRadius: 999,
        paddingHorizontal: 12,
        paddingVertical: 8,
    },

    botaoOpcaoAtivo: {
        backgroundColor: '#2563EB',
    },

    textoOpcao: {
        color: '#374151',
        fontSize: 13,
        fontWeight: '600',
    },

    textoOpcaoAtivo: {
        color: '#FFFFFF',
    },

    modalAcoes: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 24,
    },

    botaoModal: {
        flex: 1,
        height: 48,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },

    botaoCancelar: {
        backgroundColor: '#F3F4F6',
    },

    botaoSalvar: {
        backgroundColor: '#111827',
    },

    textoCancelar: {
        color: '#374151',
        fontSize: 15,
        fontWeight: '700',
    },

    textoSalvar: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '700',
    },

    caixaOpcoes: {
        backgroundColor: '#F9FAFB',
        borderRadius: 14,
        padding: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        marginBottom: 8,
    },

    caixaErroFormulario: {
        backgroundColor: '#FEE2E2',
        borderWidth: 1,
        borderColor: '#FCA5A5',
        borderRadius: 12,
        padding: 12,
        marginBottom: 14,
    },

    textoErroFormulario: {
        color: '#991B1B',
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 20,
    },
});