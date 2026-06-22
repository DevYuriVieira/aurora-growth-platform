import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../styles/theme";

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    detalhecard: {
        backgroundColor: theme.colors.surfaceBright,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 10,
        width: screenWidth - 40,
        minHeight: 80,
        borderWidth: 0.5,
        borderColor: 'rgba(255, 255, 255, 0.15)'
    },
    detalhetexto: {
        flex: 1, 
        paddingHorizontal: 15, 
    },
    titulo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.colors.onPrimary,
        marginBottom: 4
    },
    subtitulo: {
        fontSize: 13,
        color: theme.colors.onPrimaryContainer,
    },
});