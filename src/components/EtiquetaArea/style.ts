import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-start',
        backgroundColor: theme.colors.primaryContainer,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 999,
        borderWidth: 1,
        borderColor: theme.colors.primary,
    },

    texto: {
        color: theme.colors.onPrimaryContainer,
        fontSize: 13,
        fontWeight: '700',
    },
});