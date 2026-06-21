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
        borderWidth: 0.5,
        borderColor: 'rgba(255, 255, 255, 0.15)'
        
        
    },

    imagcard:{
        width:65,
        height:65
    },
    textos:{
        alignItems: 'center'
    },

    titulo:{
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.colors.onPrimary, 
        marginBottom: 4,
        textAlign:'center',
        paddingBottom:5
    }, 

    subtitulo:{
        fontSize: 13,
        color: theme.colors.onPrimaryContainer,
        textAlign:'center'
        
    },


})