import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
    },

    listaFiltros: {
        gap: 10,
        paddingHorizontal: 4,
    },

    botaoFiltro: {
        paddingHorizontal: 16,
        paddingVertical: 9,
        borderRadius: 999,
        backgroundColor: '#F3F4F6',
    },

    botaoFiltroAtivo: {
        backgroundColor: '#111827',
    },

    textoFiltro: {
        color: '#374151',
        fontSize: 14,
        fontWeight: '500',
    },

    textoFiltroAtivo: {
        color: '#FFFFFF',
    },
});