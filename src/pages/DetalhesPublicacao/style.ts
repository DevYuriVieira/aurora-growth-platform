import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FAFB',
        paddingHorizontal: 20,
        paddingTop: 60,
    },

    botaoVoltar: {
        alignSelf: 'flex-start',
        backgroundColor: '#E5E7EB',
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 999,
        marginBottom: 24,
    },

    textoBotaoVoltar: {
        color: '#111827',
        fontSize: 14,
        fontWeight: '700',
    },

    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 22,
        padding: 20,
        borderWidth: 1,
        borderColor: '#E5E7EB',
    },

    titulo: {
        color: '#111827',
        fontSize: 26,
        fontWeight: '800',
        lineHeight: 32,
        marginTop: 16,
    },

    conteudo: {
        color: '#374151',
        fontSize: 16,
        lineHeight: 25,
        marginTop: 18,
    },

    autor: {
        color: '#111827',
        fontSize: 16,
        fontWeight: '700',
    },

    nivel: {
        color: '#6B7280',
        fontSize: 14,
        marginTop: 4,
    },

    linhaInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
    },

    xp: {
        color: '#F59E0B',
        fontSize: 14,
        fontWeight: '800',
    },

    data: {
        color: '#9CA3AF',
        fontSize: 13,
    },
});