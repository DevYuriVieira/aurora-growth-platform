import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#F5F7FA',
        alignItems: 'center',
        justifyContent: 'center'
    },
    sucesso: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2E7D32',
        marginBottom: 8
    },
    instrucao: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginBottom: 24
    },
    tituloEvento: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 32,
        textAlign: 'center'
    },
    areaQRCode: {
        padding: 24,
        backgroundColor: '#FFF',
        borderRadius: 16,
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        marginBottom: 40
    },
    quadradoPlaceholder: {
        width: 180,
        height: 180,
        backgroundColor: '#EEE',
        borderWidth: 2,
        borderColor: '#CCC',
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoPlaceholder: {
        color: '#666',
        fontWeight: 'bold',
        fontSize: 12
    },
    codigoTexto: {
        color: '#999',
        fontSize: 10,
        marginTop: 8
    },
    botaoVoltar: {
        backgroundColor: '#007AEE',
        paddingHorizontal: 32,
        paddingVertical: 16,
        borderRadius: 8
    },
    textoBotao: {
        color: '#FFF',
        fontWeight: 'bold'
    },
});