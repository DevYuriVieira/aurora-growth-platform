import { Text, TouchableOpacity, View } from 'react-native';

import {
    TiposPostComunidade,
} from '../../@types/community';
import { EtiquetaArea } from '../../components/EtiquetaArea';
import { DetalhesPublicacaoProps } from './type';
import { styles } from './style';

export function DetalhesPublicacao({
    publicacao,
    aoVoltar,
}: DetalhesPublicacaoProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.botaoVoltar} onPress={aoVoltar}>
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
        </View>
    );
}