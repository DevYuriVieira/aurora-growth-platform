import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../../hooks/useAuth';
import { styles } from './style';

export function Admin() {
  const { sair, usuario } = useAuth();

  async function handleSair() {
    try {
      await sair();
    } catch (erro: unknown) {
      if (erro instanceof Error) {
        console.error('Erro ao deslogar o administrador:', erro.message);
      }
    }
  }

  const opcoesMenu = [
    { id: '1', titulo: 'Gerenciar Usuários', descricao: 'Visualizar e moderar contas da comunidade' },
    { id: '2', titulo: 'Cadastrar Oportunidades', descricao: 'Adicionar novos cursos, eventos e instituições no mapa' },
    { id: '3', titulo: 'Moderar Histórias Reais', descricao: 'Analisar e aprovar publicações feitas no Feed' },
    { id: '4', titulo: 'Métricas da Plataforma', descricao: 'Relatórios de engajamento, níveis e XP distribuído' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.conteudo} 
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.cabecalho}>
          <View>
            <Text style={styles.subtituloAdmin}>Painel de Controle</Text>
            <Text style={styles.tituloAdmin}>{usuario?.nome || 'Administrador'}</Text>
          </View>
          
          <TouchableOpacity style={styles.botaoSair} onPress={handleSair} activeOpacity={0.7}>
            <Text style={styles.textoBotaoSair}>Sair</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.gradeCards}>
          {opcoesMenu.map((opcao) => (
            <TouchableOpacity key={opcao.id} style={styles.card} activeOpacity={0.7}>
              <Text style={styles.tituloCard}>{opcao.titulo}</Text>
              <Text style={styles.descricaoCard}>{opcao.descricao}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}