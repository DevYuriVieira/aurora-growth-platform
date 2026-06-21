import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Switch, Alert } from 'react-native';
import useNetInfo from '@react-native-community/netinfo';
import Toast from 'react-native-toast-message';

export default function Settings() {
  const netInfo = useNetInfo();
  const [notificationsEnabled, setNotificationsEnabled] = useState<boolean>(false);

  useEffect(() => {
    if (netInfo.isConnected === false) {
      Toast.show({
        type: 'error',
        text1: 'Modo Offline Ativo',
        text2: 'Você está sem conexão com a internet.',
        position: 'top'
      });
    }
  }, [netInfo.isConnected]);

  function handleToggleNotifications(value: boolean) {
    try {
      setNotificationsEnabled(value);
      Alert.alert('Preferência salva', value ? 'Notificações ativadas!' : 'Notificações desativadas.');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar sua preferência.');
    }
  }

  return (
    <View style={styles.container}>
      <View style={[styles.networkStatusCard, { backgroundColor: netInfo.isConnected ? '#E3F2FD' : '#FFEBEE' }]}>
        <Text style={styles.networkStatusText}>
          Status da Rede: {netInfo.isConnected ? 'Online 🌐' : 'Offline ⚠️'}
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Preferências</Text>

      <View style={styles.row}>
        <Text style={styles.rowText}>Permitir Notificações de Mentorias</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={handleToggleNotifications}
          trackColor={{ false: '#767577', true: '#0052CC' }}
          thumbColor={notificationsEnabled ? '#FFF' : '#f4f3f4'}
        />
      </View>
      
      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF', padding: 20 },
  networkStatusCard: { padding: 15, borderRadius: 8, marginBottom: 30, alignItems: 'center' },
  networkStatusText: { fontSize: 16, fontWeight: '600', color: '#172B4D' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#172B4D', marginBottom: 15 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#EDEDED' },
  rowText: { fontSize: 16, color: '#344563' }
});