import { Text, TouchableOpacity, View } from 'react-native';
import { PostComunidade, TiposPostComunidade } from '../../@types/community';
import { EtiquetaArea } from '../EtiquetaArea';
import { CardPublicacaoProps } from './type';
import { styles } from './style';

export function CardPublicacao({
    publicacao,
    aoPressionar,
    aoEditar,
}: CardPublicacaoProps) {
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.85}
            onPress={() => aoPressionar?.(publicacao)}
        >
            <View style={styles.cabecalho}>
                <View style={styles.usuarioArea}>
                    <Text style={styles.usuario}>{publicacao.usuario}</Text>
                    <Text style={styles.nivelUsuario}>
                        Nível {publicacao.nivelUsuario} na Jornada
                    </Text>
                </View>

                <Text style={styles.xpRecompensa}>+{publicacao.xpRecompensa} XP</Text>
            </View>

            <EtiquetaArea area={publicacao.areaPost} />

            <Text style={styles.titulo}>{publicacao.titulo}</Text>

            <Text style={styles.conteudo} numberOfLines={3}>
                {publicacao.conteudo}
            </Text>

            <View style={styles.rodape}>
                <View>
                    <Text style={styles.tipo}>
                        {TiposPostComunidade[publicacao.tipoPost]}
                    </Text>

                    <Text style={styles.dataCriacao}>{publicacao.dataCriacao}</Text>
                </View>

                <TouchableOpacity
                    style={styles.botaoEditar}
                    onPress={() => aoEditar?.(publicacao)}
                >
                    <Text style={styles.textoBotaoEditar}>Editar</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}