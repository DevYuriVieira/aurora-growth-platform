import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, ActivityIndicator, Alert, Modal, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { mentoriasService } from '../../services/mentoriaService/mentoriaService';
import { Mentoria } from '../../@types/mentoria';
import { Styles } from './style';

export function PainelMentor() {
    const [mentorias, setMentorias] = useState<Mentoria[]>([]);
    const [carregando, setCarregando] = useState<boolean>(true);
    const [modalVisivel, setModalVisivel] = useState<boolean>(false);

    const [idEdicao, setIdEdicao] = useState<string | null>(null);
    const [titulo, setTitulo] = useState<string>('');
    const [nomeMentor, setNomeMentor] = useState<string>('');
    const [descricao, setDescricao] = useState<string>('');
    const [data, setData] = useState<string>('');
    const [hora, setHora] = useState<string>('');
    const [local, setLocal] = useState<string>('');

    async function carregarMentorias() {
        try {
            setCarregando(true);
            const dados = await mentoriasService.buscarTodas();
            setMentorias(dados);
        } catch (erro) {
            Alert.alert('Erro', 'Não foi possível carregar os eventos.');
        } finally {
            setCarregando(false);
        }
    }

    useEffect(() => {
        carregarMentorias();
    }, []);

    function abrirModalCriar() {
        setIdEdicao(null);
        setTitulo('');
        setNomeMentor('');
        setDescricao('');
        setData('');
        setHora('');
        setLocal('');
        setModalVisivel(true);
    }

    function abrirModalEditar(mentoria: Mentoria) {
        setIdEdicao(mentoria.id);
        setTitulo(mentoria.titulo);
        setNomeMentor(mentoria.nomeMentor);
        setDescricao(mentoria.descricao);
        setData(mentoria.data);
        setHora(mentoria.hora);
        setLocal(mentoria.local);
        setModalVisivel(true);
    }

    async function aoSalvar() {
        if (!titulo || !nomeMentor || !data || !hora || !local) {
            Alert.alert('Aviso', 'Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        const dadosEvento = { titulo, nomeMentor, descricao, data, hora, local };

        try {
            if (idEdicao) {
                await mentoriasService.atualizar(idEdicao, dadosEvento);
                Alert.alert('Sucesso', 'Evento atualizado com sucesso!');
            } else {
                await mentoriasService.criar(dadosEvento);
                Alert.alert('Sucesso', 'Novo evento criado com sucesso!');
            }
            setModalVisivel(false);
            carregarMentorias();
        } catch (erro) {
            Alert.alert('Erro', 'Não foi possível salvar o evento.');
        }
    }

    async function aoDeletar(id: string) {
        Alert.alert('Excluir Evento', 'Tem certeza que deseja apagar permanentemente este evento?', [
            { text: 'Cancelar', style: 'cancel' },
            {
                text: 'Excluir',
                style: 'destructive',
                onPress: async () => {
                    try {
                        // [DELETE] do CRUD
                        await mentoriasService.remover(id);
                        Alert.alert('Sucesso', 'Evento removido.');
                        carregarMentorias();
                    } catch (erro) {
                        Alert.alert('Erro', 'Não foi possível remover o evento.');
                    }
                },
            },
        ]);
    }

    if (carregando) {
        return (
            <View style={Styles.centro}>
                <ActivityIndicator size="large" color="#FF7E5F" />
            </View>
        );
    }

    return (
        <View style={Styles.container}>
            <Text style={Styles.cabecalho}>Gerenciamento de Eventos</Text>

            <TouchableOpacity style={Styles.botaoNovo} onPress={abrirModalCriar}>
                <Text style={Styles.textoBotaoNovo}>+ Criar Nova Mentoria</Text>
            </TouchableOpacity>

            <FlatList
                data={mentorias}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={Styles.cardAdmin}>
                        <View style={Styles.infoCard}>
                            <Text style={Styles.tituloCard}>{item.titulo}</Text>
                            <Text style={Styles.mentorCard}>Mentor: {item.nomeMentor}</Text>
                        </View>
                        <View style={Styles.acoesCard}>
                            <TouchableOpacity style={Styles.botaoEditar} onPress={() => abrirModalEditar(item)}>
                                <Text style={Styles.textoAcao}>Editar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.botaoDeletar} onPress={() => aoDeletar(item.id)}>
                                <Text style={Styles.textoAcao}>Apagar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />

            <Modal visible={modalVisivel} animationType="slide" transparent={true}>
                <View style={Styles.fundoModal}>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        style={{ width: '100%', alignItems: 'center' }}
                    >
                        <View style={[Styles.conteudoModal, { maxHeight: '85%' }]}>

                            <ScrollView showsVerticalScrollIndicator={false} style={{ width: '100%' }}>

                                <Text style={Styles.tituloModal}>{idEdicao ? 'Editar Evento' : 'Novo Evento'}</Text>

                                <TextInput style={Styles.input} placeholder="Título do Evento" placeholderTextColor="#938F99" value={titulo} onChangeText={setTitulo} />
                                <TextInput style={Styles.input} placeholder="Nome do Mentor" placeholderTextColor="#938F99" value={nomeMentor} onChangeText={setNomeMentor} />
                                <TextInput style={[Styles.input, { height: 60 }]} placeholder="Descrição" placeholderTextColor="#938F99" multiline value={descricao} onChangeText={setDescricao} />
                                <TextInput style={Styles.input} placeholder="Data (AAAA-MM-DD)" placeholderTextColor="#938F99" value={data} onChangeText={setData} />
                                <TextInput style={Styles.input} placeholder="Horário (HH:MM)" placeholderTextColor="#938F99" value={hora} onChangeText={setHora} />
                                <TextInput style={Styles.input} placeholder="Local / Link" placeholderTextColor="#938F99" value={local} onChangeText={setLocal} />

                                <View style={Styles.botoesForm}>
                                    <TouchableOpacity style={Styles.botaoCancelar} onPress={() => setModalVisivel(false)}>
                                        <Text style={Styles.textoBotao}>Cancelar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={Styles.botaoSalvar} onPress={aoSalvar}>
                                        <Text style={Styles.textoBotao}>Salvar</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </Modal>
        </View>
    );
}