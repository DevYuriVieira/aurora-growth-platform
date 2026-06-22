import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.surface,
        paddingHorizontal: 18,
        paddingTop: 60,
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

    estatisticasContainer: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 18,
        marginBottom: 18,
    },

    cardEstatistica: {
        flex: 1,
        backgroundColor: theme.colors.surfaceContainerHigh,
        borderRadius: 16,
        padding: 14,
        borderWidth: 1,
        borderColor: theme.colors.surfaceContainerLow,
    },

    numeroEstatistica: {
        color: theme.colors.primary,
        fontSize: 24,
        fontWeight: '800',
    },

    textoEstatistica: {
        color: theme.colors.onSurfaceVariant,
        fontSize: 12,
        marginTop: 4,
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
});