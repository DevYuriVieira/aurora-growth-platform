import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        padding: 16,
        marginBottom: 14,
        borderWidth: 1,
        borderColor: '#E5E7EB',
    },

    cabecalho: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 12,
        gap: 12,
    },

    usuarioArea: {
        flex: 1,
    },

    usuario: {
        color: '#111827',
        fontSize: 16,
        fontWeight: '700',
    },

    nivelUsuario: {
        color: '#6B7280',
        fontSize: 13,
        marginTop: 2,
    },

    xpRecompensa: {
        color: '#F59E0B',
        fontSize: 13,
        fontWeight: '700',
    },

    titulo: {
        color: '#111827',
        fontSize: 18,
        fontWeight: '700',
        marginTop: 12,
        marginBottom: 8,
    },

    conteudo: {
        color: '#4B5563',
        fontSize: 15,
        lineHeight: 22,
    },

    rodape: {
        marginTop: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    dataCriacao: {
        color: '#9CA3AF',
        fontSize: 12,
    },

    tipo: {
        color: '#2563EB',
        fontSize: 13,
        fontWeight: '600',
    },

    botaoEditar: {
        backgroundColor: '#EEF2FF',
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 999,
    },

    textoBotaoEditar: {
        color: '#3730A3',
        fontSize: 13,
        fontWeight: '700',
    },
});