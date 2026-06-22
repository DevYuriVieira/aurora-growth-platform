import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

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
        backgroundColor: theme.colors.surfaceContainerHigh,
        borderWidth: 1,
        borderColor: theme.colors.surfaceContainerLow,
    },

    botaoFiltroAtivo: {
        backgroundColor: theme.colors.primary,
        borderColor: theme.colors.primary,
    },

    textoFiltro: {
        color: theme.colors.onSurfaceVariant,
        fontSize: 14,
        fontWeight: '600',
    },

    textoFiltroAtivo: {
        color: theme.colors.onPrimary,
    },
});