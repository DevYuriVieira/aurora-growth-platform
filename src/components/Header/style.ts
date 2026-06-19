import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({

    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 50,
        paddingHorizontal:10,
        paddingBottom:10,
        borderBottomWidth: 0.3,
        borderBlockColor: 'gray',
        alignItems: 'center',
       
    },
    perfil:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    nome:{
        fontSize: 25,
        fontWeight:  'bold'
    }
})