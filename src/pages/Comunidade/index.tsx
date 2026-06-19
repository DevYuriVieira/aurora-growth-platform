import { useEffect, useMemo, useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    FlatList,
    Modal,
    RefreshControl,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import {
    AreaComunidade,
    TipoPost,
    TiposPostComunidade,
    TiposAreaComunidade,
} from '../../@types/community';
import {
    PublicacaoComunidadeFormData,
    publicacaoComunidadeSchema,
} from '../../schemas/publicacaoComunidadeSchema';
import { PostComunidade } from '../../@types/community';
import { CardPublicacao } from '../../components/CardPublicacao';
import { FiltroArea } from '../../components/FiltroComunidade/type';
import { FiltroComunidade } from '../../components/FiltroComunidade';
import { postComunidadeMock } from '../../services/comunidadeMock';
import { styles } from './style';

const areasFormulario: AreaComunidade[] = [
    'educacao',
    'trabalho',
    'saude',
    'financas',
    'tecnologia',
    'carreira',
];

const tiposFormulario: TipoPost[] = [
    'historia',
    'duvida',
    'dica',
    'conquista',
];

export function Comunidade() {
    const [publicacoes, setPublicacoes] = useState<PostComunidade[]>([]);
    const [carregando, setCarregando] = useState(true);
    const [atualizando, setAtualizando] = useState(false);
    const [areaSelecionada, setAreaSelecionada] = useState<FiltroArea>('todas');
    const [modalVisivel, setModalVisivel] = useState(false);
    const [titulo, setTitulo] = useState('');
    const [conteudo, setConteudo] = useState('');
    const [areaFormulario, setAreaFormulario] =
        useState<AreaComunidade>('carreira');
    const [tipoFormulario, setTipoFormulario] =
        useState<TipoPost>('historia');

    function limparFormulario() {
        setTitulo('');
        setConteudo('');
        setAreaFormulario('carreira');
        setTipoFormulario('historia');
    }

    function criarPublicacao() {
        const dadosFormulario: PublicacaoComunidadeFormData = {
            titulo,
            conteudo,
            area: areaFormulario,
            tipo: tipoFormulario,
        };

        const validacao = publicacaoComunidadeSchema.safeParse(dadosFormulario);

        if (!validacao.success) {
            const primeiraMensagemErro =
                validacao.error.issues[0]?.message || 'Verifique os campos informados.';

            Alert.alert('Dados inválidos', primeiraMensagemErro);
            return;
        }

        const novaPublicacao: PostComunidade = {
            id: String(new Date().getTime()),
            usuario: 'Você',
            nivelUsuario: 1,
            titulo: validacao.data.titulo,
            conteudo: validacao.data.conteudo,
            areaPost: validacao.data.area,
            tipoPost: validacao.data.tipo,
            xpRecompensa: 50,
            dataCriacao: 'Hoje',
        };

        setPublicacoes((publicacoesAtuais) => [
            novaPublicacao,
            ...publicacoesAtuais,
        ]);

        limparFormulario();
        setModalVisivel(false);

        Alert.alert(
            'Publicação criada',
            'Seu recomeço foi compartilhado no mural.'
        );
    }

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

            <TouchableOpacity
                style={styles.botaoNovaPublicacao}
                onPress={() => setModalVisivel(true)}
            >
                <Text style={styles.textoBotaoNovaPublicacao}>
                    + Compartilhar recomeço
                </Text>
            </TouchableOpacity>

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
            <Modal
                visible={modalVisivel}
                animationType="slide"
                transparent
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalConteudo}>
                        <Text style={styles.modalTitulo}>Compartilhar recomeço</Text>

                        <Text style={styles.labelCampo}>Título</Text>
                        <TextInput
                            style={styles.input}
                            value={titulo}
                            onChangeText={setTitulo}
                            placeholder="Ex: Consegui minha primeira entrevista"
                            placeholderTextColor="#9CA3AF"
                        />

                        <Text style={styles.labelCampo}>Conteúdo</Text>
                        <TextInput
                            style={[styles.input, styles.textArea]}
                            value={conteudo}
                            onChangeText={setConteudo}
                            placeholder="Conte sua história, dúvida ou conquista..."
                            placeholderTextColor="#9CA3AF"
                            multiline
                        />
                    </View>
                    <Text style={styles.labelCampo}>Área</Text>

                    <View style={[styles.opcoesContainer, styles.caixaOpcoes]}>
                        {areasFormulario.map((area) => {
                            const estaSelecionada = areaFormulario === area;

                            return (
                                <TouchableOpacity
                                    key={area}
                                    style={[
                                        styles.botaoOpcao,
                                        estaSelecionada && styles.botaoOpcaoAtivo,
                                    ]}
                                    onPress={() => setAreaFormulario(area)}
                                >
                                    <Text
                                        style={[
                                            styles.textoOpcao,
                                            estaSelecionada && styles.textoOpcaoAtivo,
                                        ]}
                                    >
                                        {[TiposAreaComunidade[area]]}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                    <Text style={styles.labelCampo}>Tipo</Text>

                    <View style={[styles.opcoesContainer, styles.caixaOpcoes]}>
                        {tiposFormulario.map((tipo) => {
                            const estaSelecionado = tipoFormulario === tipo;

                            return (
                                <TouchableOpacity
                                    key={tipo}
                                    style={[
                                        styles.botaoOpcao,
                                        estaSelecionado && styles.botaoOpcaoAtivo,
                                    ]}
                                    onPress={() => setTipoFormulario(tipo)}
                                >
                                    <Text
                                        style={[
                                            styles.textoOpcao,
                                            estaSelecionado && styles.textoOpcaoAtivo,
                                        ]}
                                    >
                                        {TiposPostComunidade[tipo]}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                    <View style={styles.modalAcoes}>
                        <TouchableOpacity
                            style={[styles.botaoModal, styles.botaoCancelar]}
                            onPress={() => {
                                limparFormulario();
                                setModalVisivel(false);
                            }}
                        >
                            <Text style={styles.textoCancelar}>Cancelar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.botaoModal, styles.botaoSalvar]}
                            onPress={criarPublicacao}
                        >
                            <Text style={styles.textoSalvar}>Publicar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal >
        </View>
    );
}
