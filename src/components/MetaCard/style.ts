import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    card:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    
        
    },
    detalhecard:{
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:10,
        borderRadius:10,        
        width: 350,
        height:60,
        paddingLeft: 20
        
    },
    detalhetexto:{
        
        
    },

    titulo:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1A1A1A', 
        marginBottom: 4
    }, 

    subtitulo:{
        fontSize: 13,
        color: 'gray',
    },


})