import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#FFF'
    },
    centro: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8
    },
    mentor: {
        fontSize: 18,
        color: '#007AEE',
        marginBottom: 16
    },
    descricao: {
        fontSize: 16,
        color: '#666',
        lineHeight: 24,
        marginBottom: 24
    },
    info: {
        fontSize: 14,
        color: '#444',
        marginBottom: 8
    },
    botaoInscricao: {
        backgroundColor: '#007AEE',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 32
    },
    textoBotao: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    },
    botaoCompartilhar: {
        borderWidth: 1,
        borderColor: '#007AEE',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 12
    },
    textoBotaoCompartilhar: {
        color: '#007AEE',
        fontWeight: 'bold',
        fontSize: 16
    },
    fundoModal: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    conteudoModal: {
        width: '80%',
        backgroundColor: '#FFF',
        padding: 24,
        borderRadius: 12,
        alignItems: 'center'
    },
    tituloModal: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12
    },
    textoModal: {
        textAlign: 'center',
        color: '#555',
        marginBottom: 24
    },
    botoesModal: {
        flexDirection: 'row',
        gap: 12
    },
    botaoModal: {
        flex: 1,
        padding: 12,
        borderRadius: 6,
        alignItems: 'center'
    },
    botaoCancelar: {
        backgroundColor: '#DDD'
    },
    botaoConfirmar: {
        backgroundColor: '#007AEE'
    },
    textoBotaoModal: {
        fontWeight: 'bold'
    },
});