import Icon from '@expo/vector-icons/Ionicons';
import { ScrollView, View, Text, TouchableOpacity, FlatList } from "react-native"
import { styles } from './style';
import { MetaCard } from '../../components/MetaCard/Index';
import { ConquistaCard } from '../../components/ConquistaCard';
import { theme } from '../../styles/theme';
import { XpCard } from '../../components/XpCard';
import { gerarConquistas } from '../../data/conquistas';
import { useProgress } from '../../contexts/ProgressContext';

export const Home = () => {

    const minhasMetas = [
        { id: '1', titulo: 'Ler 20 Páginas', subtitulo: 'Rotina Diária', icone: 'book' },
        { id: '2', titulo: 'Treino de Força', subtitulo: 'Hoje às 18:00', icone: 'barbell' },
        { id: '3', titulo: 'Beber 2L de Água', subtitulo: 'Saúde', icone: 'water' },
        { id: '4', titulo: 'Estudar Programação', subtitulo: '2 horas', icone: 'code-slash' },
    ];

    const { xpTotal, nivel, addXp, resetProgress } = useProgress(); 


    const catalogo = gerarConquistas(minhasMetas.length, nivel);

    const minhasConquistasDesbloqueadas = catalogo.filter(
        (conquista) => conquista.desbloqueada === true
    );

    const agruparEmColunas = (lista: typeof minhasMetas, tamanho: number) => {
        const colunas = [];
        for (let i = 0; i < lista.length; i += tamanho) {
            colunas.push(lista.slice(i, i + tamanho));
        }
        return colunas;
    };

    const metasAgrupadas = agruparEmColunas(minhasMetas, 3);

    const saudacao = () => {
        const horaAtual = new Date().getHours();
        if (horaAtual >= 5 && horaAtual < 12) return 'Bom dia';
        else if (horaAtual >= 12 && horaAtual < 18) return 'Boa tarde';
        else return 'Boa noite';
    };

    return (
            <View style={{ flex: 1 }} >
                <ScrollView style={styles.container} >
                    <View>
                        <View style={styles.contMensagem}>
                            <Text style={styles.contTitulo}>{saudacao()}, Thon.</Text>
                            <Text style={styles.contSubtitulo}>Cada passo na sua jornada conta.</Text>
                        </View>

                        <View style={styles.contBox}>
                            <XpCard 
                                 xpTotal={xpTotal} 
                            />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 15, marginVertical: 15 }}>
                            <TouchableOpacity 
                                style={{ backgroundColor: '#4CAF50', padding: 12, borderRadius: 8 }}
                                
                                onPress={() => addXp(50)} 
                            >
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>Ganhar +50 XP</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                 style={{ backgroundColor: '#F44336', padding: 12, borderRadius: 8 }}
                                 
                                 onPress={() => resetProgress()} 
                             >
                                 <Text style={{ color: 'white', fontWeight: 'bold' }}>Zerar Progresso</Text>
                             </TouchableOpacity>

                        </View>

                        <View style={styles.contMetas}>
                            <Text style={styles.contSubtitulo}>Próximas metas</Text>

                            <FlatList
                                data={metasAgrupadas}          
                                keyExtractor={(_, index) => index.toString()}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{ gap: 16, paddingRight: 20 }}
                                renderItem={({ item: coluna }) => (
                                    <View style={{ flexDirection: 'column', gap: 15, paddingBottom: 2 }}>
                                        {coluna.map((meta) => (
                                            <MetaCard
                                                key={meta.id}
                                                titulo={meta.titulo}
                                                subtitulo={meta.subtitulo}
                                                nomeIcon={meta.icone as any}
                                            />
                                        ))}
                                    </View>
                                )}
                            />
                        </View>

                        <View style={styles.contMetas}>
                            <Text style={styles.contSubtitulo}>Conquistas desbloqueadas</Text>
                            <FlatList
                                data={minhasConquistasDesbloqueadas}
                                keyExtractor={(item) => item.id}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{ gap: 16, paddingRight: 20 }} 
                                renderItem={({ item }) => (
                                    <View style={styles.cardconquista}> 
                                        <ConquistaCard 
                                            titulo={item.titulo} 
                                            subtitulo={item.subtitulo} 
                                            imagem={item.imagem}
                                        />
                                    </View>
                                )}
                            />
                        </View>
                    </View>
                </ScrollView>
                <TouchableOpacity>
                    <View style={styles.btnMeta}>
                        <Icon name='add-outline' size={25} color= {theme.colors.primaryContainer}  />
                    </View>
                </TouchableOpacity>
            </View>
    );
};