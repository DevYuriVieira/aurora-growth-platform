import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const Styles = StyleSheet.create({

    safe: {
        flex: 1,
        backgroundColor: theme.colors.surface
    },
    tituloContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnVoltar: {
        marginRight: 12,
        paddingVertical: 4
    },
    container: {
        flex: 1,
        backgroundColor: theme.colors.surface,
        paddingHorizontal: 20,
        paddingTop: 10
    },
    cabecalho: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: theme.colors.onSurface
    },
    limpar: {
        color: theme.colors.primary,
        fontWeight: 'bold'
    },
    card: {
        flexDirection: 'row',
        backgroundColor: theme.colors.surfaceContainerHigh,
        padding: 15, borderRadius: 12,
        marginBottom: 12
    },
    iconeContainer: {
        marginRight: 15,
        justifyContent: 'center'
    },
    textos: {
        flex: 1
    },
    cardTitulo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.colors.onSurface,
        marginBottom: 4
    },
    cardMensagem: {
        fontSize: 14,
        color: theme.colors.onSurfaceVariant,
        marginBottom: 8
    },
    cardData: {
        fontSize: 12,
        color: theme.colors.outline,
        alignSelf: 'flex-end'
    },
    vazio: {
        alignItems: 'center',
        marginTop: 100
    },
    textoVazio: {
        marginTop: 10,
        color: theme.colors.outline,
        fontSize: 16
    }
});