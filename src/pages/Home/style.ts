import { StyleSheet } from "react-native"
import { theme } from "../../styles/theme"

export const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor:theme.colors.surface

    },

    contMensagem:{
        paddingHorizontal: 20,
        paddingVertical:20,
        gap:5
    },

    contTitulo:{
        fontSize: 30,
        color: theme.colors.onPrimary,
        fontWeight: 'bold'  
    },

    contBox:{
        backgroundColor: theme.colors.surfaceBright,
        alignSelf: 'center',
        borderRadius:12,        
        width: 350,
        height:150,
        borderWidth: 0.5,
        borderColor: 'rgba(255, 255, 255, 0.15)',
        marginBottom:18
    },

    contSubtitulo:{
        width:250,
        fontSize:16,
        color: theme.colors.onPrimaryContainer
    },

    contMetas:{
    paddingHorizontal: 20,
    marginVertical:7,
    gap:15
    },

    cardconquista:{
        flexDirection: 'row', 
        justifyContent: 'space-around',
        paddingBottom: 5,
        marginTop: 10, 
        gap:30,
        width:160
        
    },

    btnMeta:{
    position: 'absolute',
    bottom: 24,       
    right: 20,         
    width: 56,
    height: 56,
    borderRadius: 28,  
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.2)'
    
    },



})