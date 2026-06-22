import { StyleSheet } from "react-native"
import { theme } from "../../styles/theme"

export const styles = StyleSheet.create({

    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 50,
        paddingHorizontal:10,
        paddingBottom:10,
        borderWidth: 0.5,
        backgroundColor: theme.colors.surfaceBright,
        borderBottomColor: 'rgba(255, 255, 255, 0.15)',
        alignItems: 'center',
        
       
    },
    itensesquerda:{
        flexDirection: 'row',
        alignItems: 'center',
        gap:10
        
    },

    
    titulo:{
        fontSize: 25,
        fontWeight:  'bold',
        paddingLeft: 90,
        color: theme.colors.primary
        
    },

    itensdireita:{
        flexDirection:'row',
        alignItems: 'center',
        gap:10
    },
    btnSino:{
        position: 'relative'
    },
    btnNotificacao:{
        position: 'absolute',
        top: 0,
        right: 2,             
        width: 10,
        height: 10,
        backgroundColor: theme.colors.error, 
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: 'rgba(255, 255, 255, 0.2)'
    }
})