import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.surfaceContainerHigh,
        borderRadius: 18,
        padding: 16,
        marginBottom: 14,
        borderWidth: 1,
        borderColor: theme.colors.surfaceContainerLow,
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
        color: theme.colors.onSurface,
        fontSize: 16,
        fontWeight: '700',
    },

    nivelUsuario: {
        color: theme.colors.onSurfaceVariant,
        fontSize: 13,
        marginTop: 2,
    },

    xpRecompensa: {
        color: theme.colors.primary,
        fontSize: 13,
        fontWeight: '700',
    },

    titulo: {
        color: theme.colors.onSurface,
        fontSize: 18,
        fontWeight: '700',
        marginTop: 12,
        marginBottom: 8,
    },

    conteudo: {
        color: theme.colors.onSurfaceVariant,
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
        color: theme.colors.outline,
        fontSize: 12,
    },

    tipo: {
        color: theme.colors.primary,
        fontSize: 13,
        fontWeight: '600',
    },

    botaoEditar: {
        backgroundColor: theme.colors.primaryContainer,
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 999,
    },

    textoBotaoEditar: {
        color: theme.colors.onPrimaryContainer,
        fontSize: 13,
        fontWeight: '700',
    },

    acoes: {
        flexDirection: 'row',
        gap: 8,
    },

    botaoExcluir: {
        backgroundColor: 'rgba(255, 59, 48, 0.15)',
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 999,
    },

    textoBotaoExcluir: {
        color: theme.colors.error,
        fontSize: 13,
        fontWeight: '700',
    },
});