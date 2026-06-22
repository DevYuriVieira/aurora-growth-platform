import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.surface,
        paddingHorizontal: 20,
        paddingTop: 60,
    },

    scrollConteudo: {
        paddingBottom: 40,
    },

    botaoVoltar: {
        alignSelf: 'flex-start',
        backgroundColor: theme.colors.surfaceBright,
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 999,
        marginBottom: 24,
        borderWidth: 1,
        borderColor: theme.colors.surfaceContainerLow,
    },

    textoBotaoVoltar: {
        color: theme.colors.onSurface,
        fontSize: 14,
        fontWeight: '700',
    },

    card: {
        backgroundColor: theme.colors.surfaceContainerHigh,
        borderRadius: 22,
        padding: 20,
        borderWidth: 1,
        borderColor: theme.colors.surfaceContainerLow,
    },

    titulo: {
        color: theme.colors.onSurface,
        fontSize: 26,
        fontWeight: '800',
        lineHeight: 32,
        marginTop: 16,
    },

    conteudo: {
        color: theme.colors.onSurfaceVariant,
        fontSize: 16,
        lineHeight: 25,
        marginTop: 18,
    },

    usuario: {
        color: theme.colors.onSurface,
        fontSize: 16,
        fontWeight: '700',
    },

    nivelUsuario: {
        color: theme.colors.onSurfaceVariant,
        fontSize: 14,
        marginTop: 4,
    },

    linhaInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
    },

    xpRecompensa: {
        color: theme.colors.primary,
        fontSize: 14,
        fontWeight: '800',
    },

    dataCriacao: {
        color: theme.colors.outline,
        fontSize: 13,
    },

    estadoCentralizado: {
        flex: 1,
        backgroundColor: theme.colors.surface,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
        gap: 12,
    },

    textoEstado: {
        color: theme.colors.onSurfaceVariant,
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 24,
    },

    tituloNaoEncontrada: {
        color: theme.colors.onSurface,
        fontSize: 24,
        fontWeight: '800',
        textAlign: 'center',
    },
});