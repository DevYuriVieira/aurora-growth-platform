import Toast from 'react-native-toast-message';
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
import {
    buscarPublicacoesSalvas,
    salvarPublicacoes,
} from '../../services/comunidadeStorageService';
import { PostComunidade } from '../../@types/community';
import { CardPublicacao } from '../../components/CardPublicacao';
import { FiltroArea } from '../../components/FiltroComunidade/type';
import { FiltroComunidade } from '../../components/FiltroComunidade';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParametrosRotasStack } from '../../routes/navigation';

type NavegacaoComunidadeProps =
    NativeStackNavigationProp<ParametrosRotasStack>;

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
    const [erroFormulario, setErroFormulario] = useState('');
    const navigation = useNavigation<NavegacaoComunidadeProps>();
    const [areaFormulario, setAreaFormulario] =
        useState<AreaComunidade>('carreira');
    const [tipoFormulario, setTipoFormulario] =
        useState<TipoPost>('historia');
    const [publicacaoEmEdicao, setPublicacaoEmEdicao] =
        useState<PostComunidade | null>(null);

    function abrirDetalhes(publicacao: PostComunidade) {
        navigation.navigate('StackDetalhesPublicacao', {
            idPublicacao: publicacao.id,
        });
    }

    function mostrarToastSucesso(titulo: string, mensagem: string) {
        Toast.show({
            type: 'success',
            text1: titulo,
            text2: mensagem,
            position: 'top',
        });
    }

    function mostrarToastErro(titulo: string, mensagem: string) {
        Toast.show({
            type: 'error',
            text1: titulo,
            text2: mensagem,
            position: 'top',
        });
    }

    function limparFormulario() {
        setTitulo('');
        setConteudo('');
        setAreaFormulario('carreira');
        setTipoFormulario('historia');
        setPublicacaoEmEdicao(null);
        setErroFormulario('');
    }

    function abrirEdicao(publicacao: PostComunidade) {
        setPublicacaoEmEdicao(publicacao);
        setTitulo(publicacao.titulo);
        setConteudo(publicacao.conteudo);
        setAreaFormulario(publicacao.areaPost);
        setTipoFormulario(publicacao.tipoPost);
        setModalVisivel(true);
    }

    function confirmarExclusao(publicacaoSelecionada: PostComunidade) {
        Alert.alert(
            'Excluir publicação',
            `Deseja excluir "${publicacaoSelecionada.titulo}"?`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Excluir',
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

            mostrarToastSucesso(
                'Publicação excluída',
                'A publicação foi removida do mural.'
            );
        } catch {
            mostrarToastErro(
                'Erro ao excluir',
                'Não foi possível excluir a publicação agora.'
            );
        }
    }

    async function salvarPublicacao() {

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

            setErroFormulario(primeiraMensagemErro);
            return;
        }

        setErroFormulario('');

        if (publicacaoEmEdicao) {
            const publicacoesAtualizadas = publicacoes.map((publicacao) => {
                if (publicacao.id === publicacaoEmEdicao.id) {
                    return {
                        ...publicacao,
                        titulo: validacao.data.titulo,
                        conteudo: validacao.data.conteudo,
                        areaPost: validacao.data.area,
                        tipoPost: validacao.data.tipo,
                    };
                }

                return publicacao;
            });

            setPublicacoes(publicacoesAtualizadas);
            await salvarPublicacoes(publicacoesAtualizadas);

            limparFormulario();
            setModalVisivel(false);

            mostrarToastSucesso(
                'Publicação atualizada',
                'As alterações foram salvas com sucesso.'
            );

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

        const publicacoesAtualizadas = [novaPublicacao, ...publicacoes];

        setPublicacoes(publicacoesAtualizadas);
        await salvarPublicacoes(publicacoesAtualizadas);

        limparFormulario();
        setModalVisivel(false);

        mostrarToastSucesso(
            'Publicação criada',
            'Seu recomeço foi compartilhado no mural.'
        );
    }

    async function carregarPublicacoes() {
        try {
            setCarregando(true);

            const publicacoesSalvas = await buscarPublicacoesSalvas();

            setPublicacoes(publicacoesSalvas);
        } catch {
            mostrarToastErro(
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

            const publicacoesSalvas = await buscarPublicacoesSalvas();

            setPublicacoes(publicacoesSalvas);
        } catch {
            mostrarToastErro(
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
                    <CardPublicacao
                        publicacao={item}
                        aoPressionar={abrirDetalhes}
                        aoEditar={abrirEdicao}
                        aoExcluir={confirmarExclusao}
                    />
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
                        <Text style={styles.modalTitulo}>
                            {publicacaoEmEdicao ? 'Editar publicação' : 'Compartilhar recomeço'}
                        </Text>

                        {erroFormulario !== '' && (
                            <View style={styles.caixaErroFormulario}>
                                <Text style={styles.textoErroFormulario}>{erroFormulario}</Text>
                            </View>
                        )}

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
                            onPress={salvarPublicacao}
                        >
                            <Text style={styles.textoSalvar}>
                                {publicacaoEmEdicao ? 'Salvar alterações' : 'Publicar'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal >
        </View>
    );
}
