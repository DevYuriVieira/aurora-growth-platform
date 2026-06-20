import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { mentoriasService } from '../../services/mentoriaService/mentoriaService';
import { Mentoria } from '../../@types/mentoria';
import { ListaMentoriasStackParamList } from '../../routes/mentoriasRoutes/types';
import { CardMentoria } from '../../components/CardMentoria';
import Toast from 'react-native-toast-message';
import { Styles } from './style';

type NavegacaoProp = NativeStackNavigationProp<ListaMentoriasStackParamList, 'ListaMentorias'>;

export function ListaMentorias() {
  const navegacao = useNavigation<NavegacaoProp>();

  const [carregando, setCarregando] = useState<boolean>(true);
  const [atualizando, setAtualizando] = useState<boolean>(false);
  const [mentorias, setMentorias] = useState<Mentoria[]>([]);

  async function buscarDados(mostrarLoadingGlobal = true) {
    try {
      if (mostrarLoadingGlobal) setCarregando(true);

      const dados = await mentoriasService.buscarTodas();
      setMentorias(dados);
    } catch (erro) {

      const mensagemErro = erro instanceof Error
        ? erro.message
        : 'Erro desconhecido ao carregar mentorias.';

      Toast.show({
        type: 'error',
        text1: 'Ops, algo deu errado!',
        text2: mensagemErro,
        position: 'bottom'
      });
    } finally {
      setCarregando(false);
      setAtualizando(false);
    }
  }

  useEffect(() => {
    buscarDados();
  }, []);

  function aoAtualizar() {
    setAtualizando(true);
    buscarDados(false);
  }

  if (carregando && !atualizando) {
    return (
      <View style={Styles.centro}>
        <ActivityIndicator size="large" color="#007AEE" />
        <Text style={Styles.textoLoading}>Buscando mentorias disponíveis...</Text>
      </View>
    );
  }

  return (
    <View style={Styles.container}>
      <FlatList
        data={mentorias}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardMentoria
            dados={item}
            aoPressionar={() => navegacao.navigate('DetalhesMentorias', { mentoriaId: item.id })}
          />
        )}
        refreshing={atualizando}
        onRefresh={aoAtualizar}
        ListEmptyComponent={
          <View style={Styles.centroVazio}>
            <Text style={Styles.textoVazio}>Nenhuma mentoria disponível no momento. 🚀</Text>
          </View>
        }
        contentContainerStyle={mentorias.length === 0 ? { flex: 1 } : { paddingVertical: 16 }}
      />
    </View>
  );
}

