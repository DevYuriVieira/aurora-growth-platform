import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, ActivityIndicator, Alert, Share } from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ListaMentoriasStackParamList } from '../../routes/mentoriasRoutes/types';
import { mentoriasService } from '../../services/mentoriaService/mentoriaService';
import { Mentoria } from '../../@types/mentoria';
import Toast from 'react-native-toast-message';
import {Styles} from './style';
type RotaProp = RouteProp<ListaMentoriasStackParamList, 'DetalhesMentorias'>;
type NavegacaoProp = NativeStackNavigationProp<ListaMentoriasStackParamList, 'DetalhesMentorias'>;

export function DetalhesMentorias() {
    const rota = useRoute<RotaProp>();
    const navegacao = useNavigation<NavegacaoProp>();
    const { mentoriaId } = rota.params;

    const [carregando, setCarregando] = useState(true);
    const [inscrevendo, setInscrevendo] = useState(false);
    const [modalVisivel, setModalVisivel] = useState(false);
    const [mentoria, setMentoria] = useState<Mentoria | null>(null);

    useEffect(() => {
        async function carregarDetalhes() {
            try {
                setCarregando(true);
                const todas = await mentoriasService.buscarTodas();
                const achada = todas.find(m => m.id === mentoriaId);
                if (achada) setMentoria(achada);
            } catch (erro) {
                const mensagemErro = erro instanceof Error ? erro.message : 'Não foi possível carregar os detalhes.';

                Toast.show({
                    type: 'error',
                    text1: 'Erro',
                    text2: mensagemErro
                });
            } finally {
                setCarregando(false);
            }
        }
        carregarDetalhes();
    }, [mentoriaId]);

    async function aoCompartilhar() {
        if (!mentoria) return;
        try {
            await Share.share({
                message: `Confira a mentoria "${mentoria.titulo}" com ${mentoria.nomeMentor} no Projeto Aurora! 🚀`,
            });
        } catch (erro) {
            Toast.show({ type: 'error', text1: 'Não foi possível compartilhar.' });
        }
    }

    async function confirmarInscricao() {
        setModalVisivel(false);
        setInscrevendo(true);
        try {
            const resposta = await mentoriasService.inscreverNoEvento(mentoriaId);

            if (resposta.sucesso && mentoria) {
                Alert.alert('Inscrição Confirmada!', 'O evento foi adicionado à sua agenda.');

                navegacao.navigate('QRCodeEvento', {
                    codigoIngresso: resposta.codigoIngresso,
                    tituloEvento: mentoria.titulo
                });
            }
        } catch (erro) {
            const mensagemErro = erro instanceof Error ? erro.message : 'Falha ao realizar inscrição.';

            Toast.show({
                type: 'error',
                text1: 'Falha na inscrição',
                text2: mensagemErro
            });
        } finally {
            setInscrevendo(false);
        }
    }

    if (carregando || !mentoria) {
        return (
            <View style={Styles.centro}>
                <ActivityIndicator size="large" color="#007AEE" />
            </View>
        );
    }

    return (
        <View style={Styles.container}>
            <Text style={Styles.titulo}>{mentoria.titulo}</Text>
            <Text style={Styles.mentor}>Mentor(a): {mentoria.nomeMentor}</Text>
            <Text style={Styles.descricao}>{mentoria.descricao}</Text>
            <Text style={Styles.info}>📅 {mentoria.data} às {mentoria.hora}</Text>
            <Text style={Styles.info}>📍 {mentoria.local}</Text>

            <TouchableOpacity style={Styles.botaoInscricao} onPress={() => setModalVisivel(true)}>
                {inscrevendo ? <ActivityIndicator color="#FFF" /> : <Text style={Styles.textoBotao}>Quero me inscrever</Text>}
            </TouchableOpacity>

            <TouchableOpacity style={Styles.botaoCompartilhar} onPress={aoCompartilhar}>
                <Text style={Styles.textoBotaoCompartilhar}>Compartilhar Evento</Text>
            </TouchableOpacity>

            <Modal visible={modalVisivel} transparent animationType="fade" onRequestClose={() => setModalVisivel(false)}>
                <View style={Styles.fundoModal}>
                    <View style={Styles.conteudoModal}>
                        <Text style={Styles.tituloModal}>Confirmar Inscrição?</Text>
                        <Text style={Styles.textoModal}>Você deseja confirmar sua vaga na mentoria "{mentoria.titulo}"?</Text>

                        <View style={Styles.botoesModal}>
                            <TouchableOpacity style={[Styles.botaoModal, Styles.botaoCancelar]} onPress={() => setModalVisivel(false)}>
                                <Text style={Styles.textoBotaoModal}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[Styles.botaoModal, Styles.botaoConfirmar]} onPress={confirmarInscricao}>
                                <Text style={Styles.textoBotaoModal}>Confirmar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

