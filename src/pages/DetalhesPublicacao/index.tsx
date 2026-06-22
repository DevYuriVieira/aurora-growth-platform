import { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { PostComunidade, TiposPostComunidade } from '../../@types/community';
import { EtiquetaArea } from '../../components/EtiquetaArea';
import { buscarPublicacoesSalvas } from '../../services/comunidadeStorageService';
import { ParametrosRotasStack } from '../../routes/navigation';
import { styles } from './style';

type DetalhesPublicacaoRouteProp = RouteProp<
    ParametrosRotasStack,
    'StackDetalhesPublicacao'
>;

export function DetalhesPublicacao() {
    const navigation = useNavigation();
    const route = useRoute<DetalhesPublicacaoRouteProp>();

    const [publicacao, setPublicacao] = useState<PostComunidade | null>(null);
    const [carregando, setCarregando] = useState(true);

    const { idPublicacao } = route.params;

    async function carregarPublicacao() {
        try {
            setCarregando(true);

            const publicacoesSalvas = await buscarPublicacoesSalvas();

            const publicacaoEncontrada = publicacoesSalvas.find(
                (item) => item.id === idPublicacao
            );

            setPublicacao(publicacaoEncontrada || null);
        } finally {
            setCarregando(false);
        }
    }

    useEffect(() => {
        carregarPublicacao();
    }, []);

    if (carregando) {
        return (
            <View style={styles.estadoCentralizado}>
                <ActivityIndicator size="large" color="#2563EB" />
                <Text style={styles.textoEstado}>Carregando publicação...</Text>
            </View>
        );
    }

    if (!publicacao) {
        return (
            <View style={styles.estadoCentralizado}>
                <Text style={styles.tituloNaoEncontrada}>
                    Publicação não encontrada
                </Text>

                <Text style={styles.textoEstado}>
                    Essa publicação pode ter sido removida do mural.
                </Text>

                <TouchableOpacity
                    style={styles.botaoVoltar}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.textoBotaoVoltar}>← Voltar</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.scrollConteudo}
            showsVerticalScrollIndicator={false}
        >
            <TouchableOpacity
                style={styles.botaoVoltar}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.textoBotaoVoltar}>← Voltar</Text>
            </TouchableOpacity>

            <View style={styles.card}>
                <Text style={styles.autor}>{publicacao.usuario}</Text>

                <Text style={styles.nivel}>
                    Nível {publicacao.nivelUsuario} na Jornada Aurora
                </Text>

                <View style={{ marginTop: 16 }}>
                    <EtiquetaArea area={publicacao.areaPost} />
                </View>

                <Text style={styles.titulo}>{publicacao.titulo}</Text>

                <Text style={styles.conteudo}>{publicacao.conteudo}</Text>

                <View style={styles.linhaInfo}>
                    <Text style={styles.xp}>+{publicacao.xpRecompensa} XP</Text>

                    <Text style={styles.data}>{publicacao.dataCriacao}</Text>
                </View>

                <Text style={[styles.data, { marginTop: 10 }]}>
                    Tipo: {TiposPostComunidade[publicacao.tipoPost]}
                </Text>
            </View>
        </ScrollView>
    );
}