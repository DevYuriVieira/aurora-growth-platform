import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, ActivityIndicator, Alert, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as SecureStore from 'expo-secure-store';

interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

export default function Profile() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function loadSecureData() {
      try {
        const storedUser = await SecureStore.getItemAsync('@aurora:secure_user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        } else {
          setUser({
            id: '1',
            name: 'Usuário Aurora',
            email: 'usuario@aurora.org',
            avatarUrl: 'https://via.placeholder.com/150'
          });
        }
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível carregar os dados seguros do perfil.');
      }
    }
    loadSecureData();
  } Packing, []);

  async function handleSelectImage(useCamera: boolean) {
    try {
      setLoading(true);
      const hasPermission = useCamera 
        ? await ImagePicker.requestCameraPermissionsAsync() 
        : await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!hasPermission.granted) {
        setLoading(false);
        Alert.alert('Permissão necessária', 'Precisamos de acesso para alterar a foto.');
        return;
      }

      const result = useCamera
        ? await ImagePicker.launchCameraAsync({ allowsEditing: true, aspect: [1, 1], quality: 0.8 })
        : await ImagePicker.launchImageLibraryAsync({ allowsEditing: true, aspect: [1, 1], quality: 0.8 });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const updatedUser = { ...user!, avatarUrl: result.assets[0].uri };
        setUser(updatedUser);
        await SecureStore.setItemAsync('@aurora:secure_user', JSON.stringify(updatedUser));
        Alert.alert('Sucesso', 'Foto de perfil atualizada!');
      }
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao processar a imagem.');
    } finally {
      setLoading(false);
    }
  }

  if (!user) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0052CC" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatarUrl }} style={styles.avatar} />
      
      {loading && <ActivityIndicator size="small" color="#0052CC" style={styles.loader} />}

      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>

      <TouchableOpacity style={styles.button} onPress={() => handleSelectImage(false)}>
        <Text style={styles.buttonText}>Escolher da Galeria</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handleSelectImage(true)}>
        <Text style={styles.buttonText}>Tirar Foto</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF', padding: 20 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  avatar: { width: 150, height: 150, borderRadius: 75, backgroundColor: '#E1E6EB' },
  loader: { marginVertical: 10 },
  name: { fontSize: 22, fontWeight: 'bold', color: '#172B4D', marginTop: 15 },
  email: { fontSize: 16, color: '#5E6C84', marginBottom: 30 },
  button: { backgroundColor: '#0052CC', paddingVertical: 12, paddingHorizontal: 30, borderRadius: 8, marginVertical: 5, width: '100%', alignItems: 'center' },
  buttonText: { color: '#FFF', fontSize: 16, fontWeight: '600' }
});