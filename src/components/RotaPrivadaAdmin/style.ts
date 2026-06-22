import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
    containerNegado: {
        flex: 1,
        backgroundColor: theme.colors.surface,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
    },

    tituloNegado: {
        color: theme.colors.onSurface,
        fontSize: 24,
        fontWeight: '800',
        textAlign: 'center',
        marginBottom: 12,
    },

    textoNegado: {
        color: theme.colors.onSurfaceVariant,
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
    },
});