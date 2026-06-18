import { useEffect, useMemo, useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    FlatList,
    RefreshControl,
    Text,
    View,
} from 'react-native';
import { PostComunidade } from '../../@types/community';
import { CardPublicacao } from '../../components/CardPublicacao';
import { FiltroArea } from '../../components/FiltroComunidade/type';
import { FiltroComunidade } from '../../components/FiltroComunidade';
import { postComunidadeMock } from '../../services/comunidadeMock';
import { styles } from './style';

export function Comunidade() {
    const [publicacoes, setPublicacoes] = useState<PostComunidade[]>([]);
    const [carregando, setCarregando] = useState(true);
    const [atualizando, setAtualizando] = useState(false);
    const [areaSelecionada, setAreaSelecionada] = useState<FiltroArea>('todas');

    async function carregarPublicacoes() {
        try {
            setCarregando(true);

            await new Promise((resolve) => setTimeout(resolve, 700));

            setPublicacoes(postComunidadeMock);
        } catch {
            Alert.alert(
                'Erro ao carregar',
                'Não foi possível carregar as publicações da comunidade.'
            );
        } finally {
            setCarregando(false);
        }
    }

    useEffect(() => {
        carregarPublicacoes();
    }, []);

    async function atualizarPublicacoes() {
        try {
            setAtualizando(true);

            await new Promise((resolve) => setTimeout(resolve, 700));

            setPublicacoes(postComunidadeMock);
        } catch {
            Alert.alert(
                'Erro ao atualizar',
                'Não foi possível atualizar o mural agora.'
            );
        } finally {
            setAtualizando(false);
        }
    }

    const publicacoesFiltradas = useMemo(() => {
        if (areaSelecionada === 'todas') {
            return publicacoes;
        }

        return publicacoes.filter(
            (publicacao) => publicacao.areaPost === areaSelecionada
        );
    }, [areaSelecionada, publicacoes]);

    if (carregando) {
        return (
            <View style={styles.estadoCentralizado}>
                <ActivityIndicator size="large" color="#2563EB" />
                <Text style={styles.textoEstado}>Carregando mural...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <Text style={styles.titulo}>Mural dos Recomeços</Text>

                <Text style={styles.subtitulo}>
                    Histórias, dúvidas e conquistas de pessoas que decidiram transformar
                    a própria jornada.
                </Text>
            </View>

            <FiltroComunidade
                areaSelecionada={areaSelecionada}
                aoSelecionarArea={setAreaSelecionada}
            />

            <FlatList
                data={publicacoesFiltradas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <CardPublicacao publicacao={item} />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listaConteudo}
                refreshControl={
                    <RefreshControl
                        refreshing={atualizando}
                        onRefresh={atualizarPublicacoes}
                    />
                }
                ListEmptyComponent={
                    <View style={styles.estadoVazio}>
                        <Text style={styles.tituloVazio}>
                            Nenhuma publicação encontrada
                        </Text>

                        <Text style={styles.textoVazio}>
                            Ainda não existem histórias nessa área. Seja a primeira pessoa a
                            compartilhar um recomeço.
                        </Text>
                    </View>
                }
            />
        </View>
    );
}
