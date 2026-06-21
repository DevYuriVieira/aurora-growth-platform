import { useEffect, useMemo, useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    FlatList,
    Text,
    View,
} from 'react-native';
import Toast from 'react-native-toast-message';

import { PostComunidade } from '../../@types/community';
import { CardPublicacao } from '../../components/CardPublicacao';
import {
    buscarPublicacoesSalvas,
    salvarPublicacoes,
} from '../../services/comunidadeStorageService';
import { styles } from './style';

export function AdminComunidade() {
    const [publicacoes, setPublicacoes] = useState<PostComunidade[]>([]);
    const [carregando, setCarregando] = useState(true);

    async function carregarPublicacoes() {
        try {
            setCarregando(true);

            const publicacoesSalvas = await buscarPublicacoesSalvas();

            setPublicacoes(publicacoesSalvas);
        } catch {
            Toast.show({
                type: 'error',
                text1: 'Erro ao carregar',
                text2: 'Não foi possível carregar as publicações para moderação.',
            });
        } finally {
            setCarregando(false);
        }
    }

    useEffect(() => {
        carregarPublicacoes();
    }, []);

    const totalPublicacoes = publicacoes.length;

    const totalConquistas = useMemo(() => {
        return publicacoes.filter(
            (publicacao) => publicacao.tipoPost === 'conquista'
        ).length;
    }, [publicacoes]);

    const totalDuvidas = useMemo(() => {
        return publicacoes.filter(
            (publicacao) => publicacao.tipoPost === 'duvida'
        ).length;
    }, [publicacoes]);

    function confirmarExclusao(publicacaoSelecionada: PostComunidade) {
        Alert.alert(
            'Moderar publicação',
            `Deseja remover "${publicacaoSelecionada.titulo}" do mural?`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Remover',
                    style: 'destructive',
                    onPress: () => excluirPublicacao(publicacaoSelecionada.id),
                },
            ]
        );
    }

    async function excluirPublicacao(idPublicacao: string) {
        try {
            const publicacoesAtualizadas = publicacoes.filter(
                (publicacao) => publicacao.id !== idPublicacao
            );

            setPublicacoes(publicacoesAtualizadas);
            await salvarPublicacoes(publicacoesAtualizadas);

            Toast.show({
                type: 'success',
                text1: 'Publicação removida',
                text2: 'A publicação foi removida do mural pela moderação.',
            });
        } catch {
            Toast.show({
                type: 'error',
                text1: 'Erro ao remover',
                text2: 'Não foi possível remover a publicação agora.',
            });
        }
    }

    if (carregando) {
        return (
            <View style={styles.estadoCentralizado}>
                <ActivityIndicator size="large" color="#2563EB" />
                <Text style={styles.textoEstado}>Carregando painel admin...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Painel Admin</Text>

            <Text style={styles.subtitulo}>
                Moderação das publicações do Mural dos Recomeços.
            </Text>

            <View style={styles.estatisticasContainer}>
                <View style={styles.cardEstatistica}>
                    <Text style={styles.numeroEstatistica}>{totalPublicacoes}</Text>
                    <Text style={styles.textoEstatistica}>Publicações</Text>
                </View>

                <View style={styles.cardEstatistica}>
                    <Text style={styles.numeroEstatistica}>{totalConquistas}</Text>
                    <Text style={styles.textoEstatistica}>Conquistas</Text>
                </View>

                <View style={styles.cardEstatistica}>
                    <Text style={styles.numeroEstatistica}>{totalDuvidas}</Text>
                    <Text style={styles.textoEstatistica}>Dúvidas</Text>
                </View>
            </View>

            <FlatList
                data={publicacoes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <CardPublicacao
                        publicacao={item}
                        aoExcluir={confirmarExclusao}
                    />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listaConteudo}
            />
        </View>
    );
}