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
});