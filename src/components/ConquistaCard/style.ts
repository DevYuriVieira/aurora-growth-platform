import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({

    card:{

    backgroundColor: theme.colors.surfaceBright,
        alignItems: 'center',
        padding: 20,
        borderRadius: 16,
        gap:10,
        width:150,
        boxShadow:'1px 1px 1px 1px rgba(0, 0, 0, 0.1)'
        
    },

    imagcard:{
        width:65,
        height:65
    },
    titulo:{
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.colors.onPrimary, 
        marginBottom: 4
    }, 

    subtitulo:{
        fontSize: 13,
        color: theme.colors.onPrimaryContainer,
    },


})