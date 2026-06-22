import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import QRCode from 'react-native-qrcode-svg';
import { ListaMentoriasStackParamList } from '../../routes/navigation';
import { Styles } from './style';

type RotaProp = RouteProp<ListaMentoriasStackParamList, 'QRCodeEvento'>;
type NavegacaoProp = NativeStackNavigationProp<ListaMentoriasStackParamList, 'QRCodeEvento'>;

export function QRCodeEvento() {
    const rota = useRoute<RotaProp>();
    const navegacao = useNavigation<NavegacaoProp>();
    const { codigoIngresso, tituloEvento } = rota.params;

    return (
        <View style={Styles.container}>
            <Text style={Styles.sucesso}>🎉 Inscrição Confirmada!</Text>
            <Text style={Styles.instrucao}>Apresente o QR Code abaixo na entrada do evento:</Text>
            <Text style={Styles.tituloEvento}>{tituloEvento}</Text>

            <View style={Styles.areaQRCode}>
                <QRCode value={codigoIngresso} size={180} /> 
            </View>

            <TouchableOpacity style={Styles.botaoVoltar} onPress={() => navegacao.popToTop()}>
                <Text style={Styles.textoBotao}>Voltar para Início</Text>
            </TouchableOpacity>
        </View>
    );
}

