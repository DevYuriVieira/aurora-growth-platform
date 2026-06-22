import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({

    card:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        
    
        
    },
    detalhecard:{
        backgroundColor: theme.colors.surfaceBright,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:10,
        borderRadius:10,        
        width: 345,
        height:80,
        paddingLeft: 20,
        borderWidth: 0.5,
        borderColor: 'rgba(255, 255, 255, 0.15)'
        
    },
    detalhetexto:{
        paddingRight:70
        
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