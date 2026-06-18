import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { TiposAreaComunidade } from '../../@types/community';
import { FiltroArea, FiltroComunidadeProps } from './type';
import { styles } from './style';

const filtros: FiltroArea[] = [
    'todas',
    'educacao',
    'trabalho',
    'saude',
    'financas',
    'tecnologia',
    'carreira',
];

export function FiltroComunidade({
    areaSelecionada,
    aoSelecionarArea,
}: FiltroComunidadeProps) {
    return (
        <View style={styles.container}>
            <FlatList
                data={filtros}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.listaFiltros}
                keyExtractor={(item) => item}
                renderItem={({ item }) => {
                    const estaAtivo = item === areaSelecionada;
                    const textoFiltro =
                        item === 'todas' ? 'Todas' : TiposAreaComunidade[item];

                    return (
                        <TouchableOpacity
                            style={[
                                styles.botaoFiltro,
                                estaAtivo && styles.botaoFiltroAtivo,
                            ]}
                            onPress={() => aoSelecionarArea(item)}
                        >
                            <Text
                                style={[
                                    styles.textoFiltro,
                                    estaAtivo && styles.textoFiltroAtivo,
                                ]}
                            >
                                {textoFiltro}
                            </Text>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}