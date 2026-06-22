import React, { useEffect } from 'react';

import { View, Text, FlatList, TouchableOpacity, SafeAreaView } from 'react-native'; 
import { useNotification } from '../../contexts/NotificationContext';
import Icon from '@expo/vector-icons/Ionicons';
import { Styles } from './style';
// 👇 2. Importamos o useNavigation para fazer o botão voltar funcionar
import { useNavigation } from '@react-navigation/native'; 
import { theme } from '../../styles/theme';

export function Notificacoes() {
    const { notificacoes: notificacoesNaoLidas, limparNotificacoes, marcarTodasComoLidas } = useNotification();
    const navigation = useNavigation(); // 👇 3. Inicializamos o navegador

    useEffect(() => {
        marcarTodasComoLidas();
    }, []);

    return (
        // 👇 4. Envolvemos a tela no SafeAreaView
        <SafeAreaView style={Styles.safe}> 
            <View style={Styles.container}>
                
                <View style={Styles.cabecalho}>
                    {/* 👇 5. Agrupamos a Seta + Título juntos */}
                    <View style={Styles.tituloContainer}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={Styles.btnVoltar}>
                            <Icon name="arrow-back" size={28} color={theme.colors.primary} />
                        </TouchableOpacity>
                        <Text style={Styles.titulo}>Notificações</Text>
                    </View>

                    {notificacoesNaoLidas.length > 0 && (
                        <TouchableOpacity onPress={limparNotificacoes}>
                            <Text style={Styles.limpar}>Limpar Tudo</Text>
                        </TouchableOpacity>
                    )}
                </View>

                <FlatList
                    data={notificacoesNaoLidas}
                    keyExtractor={(item) => item.id}
                    ListEmptyComponent={
                        <View style={Styles.vazio}>
                            <Icon name="notifications-off-outline" size={60} color={theme.colors.outline} />
                            <Text style={Styles.textoVazio}>Nenhuma notificação por aqui.</Text>
                        </View>
                    }
                    renderItem={({ item }) => (
                        <View style={Styles.card}>
                            <View style={Styles.iconeContainer}>
                                <Icon name="calendar-outline" size={24} color={theme.colors.primary} />
                            </View>
                            <View style={Styles.textos}>
                                <Text style={Styles.cardTitulo}>{item.titulo}</Text>
                                <Text style={Styles.cardMensagem}>{item.mensagem}</Text>
                                <Text style={Styles.cardData}>{item.data}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    );
}
