import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create ({

    container:{
        backgroundColor: theme.colors.surfaceBright,
        alignSelf: 'center',
        borderRadius:12,        
        width: 350,
        height:160,
        borderWidth: 0.5,
        borderColor: 'rgba(255, 255, 255, 0.15)',
        padding:20,
        
    },
    texto:{
        color: theme.colors.primary,
        fontSize: 12,
        fontWeight: 'bold',
        letterSpacing: 1,
        marginBottom: 16,
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 16,
    },
    porcentagem:{
        fontSize: 22,
        fontWeight: 'bold',
        color: theme.colors.onSurface,
    },
    textoNivel:{
        fontSize:20,
        
    },
    nivel:{
        fontSize: 25,
        color: theme.colors.primary,
        fontWeight: '600',
    },    
    contBarra:{
        height: 12,
        backgroundColor: 'rgba(0, 0, 0, 0.35)', 
        borderRadius: 6,
        overflow: 'hidden', 
        marginBottom: 14,
    },
    barraProgresso:{
        height: '100%',
        backgroundColor: theme.colors.primary,
        borderRadius: 6,
    },
    body:{
        alignItems:'center',
    },
    starItem:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        
    },
    starTexto:{
        fontSize: 14,
        fontWeight: 'bold',
        color: theme.colors.onSurfaceVariant,
    },

})