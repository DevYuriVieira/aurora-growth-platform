
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    card:{

    backgroundColor: '#FFFFFF',
        alignItems: 'center', // Centraliza tudo dentro do card
        padding: 20,
        borderRadius: 16,
        gap:10,
        width:150
        
    },

    imagcard:{
        width:65,
        height:65
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