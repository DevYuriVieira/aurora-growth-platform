import { ScrollView, View, Text, TouchableOpacity, FlatList } from "react-native"
import { styles } from './style';
import { MetaCard } from '../../components/MetaCard/Index';
import { ConquistaCard } from '../../components/ConquistaCard';
import { XpCard } from '../../components/XpCard';
import { gerarConquistas } from '../../data/conquistas';
import { useProgress } from '../../contexts/ProgressContext';
import { useAuth } from '../../hooks/useAuth';
import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { getMetas } from '../../services/metasService';
import { Meta, AREA_ICONS, AREA_LABELS } from '../../@types/meta';

export const Home = () => {

    const { usuario } = useAuth();
    const { xpTotal, nivel, addXp, resetProgress } = useProgress(); 
    const [metas, setMetas] = useState<Meta[]>([]);

    useFocusEffect(
        useCallback(() => {
            if (!usuario) return;
            getMetas(usuario.id).then(setMetas).catch(() => {});
        }, [usuario?.id])
    );

    const minhasMetas = metas.map((meta) => ({
      id: meta.id,
      titulo: meta.title,
      subtitulo: AREA_LABELS[meta.area],
      icone: AREA_ICONS[meta.area],
    }));

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

    const primeiroNome = usuario?.nome ? usuario.nome.split(' ')[0] : 'Visitante';
    
    return (
            <View style={{ flex: 1 }} >
                <ScrollView style={styles.container} >
                    <View>
                        <View style={styles.contMensagem}>
                            <Text style={styles.contTitulo}>{saudacao()}, {primeiroNome}.</Text>
                            <Text style={styles.contSubtitulo}>Cada passo na sua jornada conta.</Text>
                        </View>

                        <View style={styles.contBox}>
                            <XpCard 
                                 xpTotal={xpTotal} 
                            />
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
            </View>
    );
};