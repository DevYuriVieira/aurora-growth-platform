import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor:'#f6f6ff'

    },

    contMensagem:{
        paddingHorizontal: 20,
        paddingVertical:20,
        gap:5
    },

    contTitulo:{
        fontSize: 30,
        fontWeight: 'bold'  
    },

    contBox:{
        backgroundColor: '#FFF',
        alignSelf: 'center',
        borderRadius:12,        
        width: 350,
        height:150,
        shadowColor: '#000000'
    },

    contSubtitulo:{
        width:250,
        fontSize:16,
        color: 'gray'
    },

    contMetas:{
    paddingHorizontal: 20,
    marginVertical:20,
    gap:15
    },

    cardconquista:{
        flexDirection: 'row', 
        justifyContent: 'space-around',
        marginTop: 10, 
        gap:30
        
    },

    btnMeta:{
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius:12,
        padding:20,
        marginTop: 15,
        backgroundColor:'#A53B22',
        width:300
        
    },
    btnMetaText:{
        color:'#fff',
        paddingHorizontal:10
    }


})