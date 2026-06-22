import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FAFB',
        paddingHorizontal: 18,
        paddingTop: 60,
    },

    titulo: {
        color: '#111827',
        fontSize: 28,
        fontWeight: '800',
    },

    subtitulo: {
        color: '#6B7280',
        fontSize: 15,
        lineHeight: 22,
        marginTop: 8,
    },

    estatisticasContainer: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 18,
        marginBottom: 18,
    },

    cardEstatistica: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 14,
        borderWidth: 1,
        borderColor: '#E5E7EB',
    },

    numeroEstatistica: {
        color: '#111827',
        fontSize: 24,
        fontWeight: '800',
    },

    textoEstatistica: {
        color: '#6B7280',
        fontSize: 12,
        marginTop: 4,
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
    },

    textoEstado: {
        color: '#6B7280',
        fontSize: 16,
    },
});