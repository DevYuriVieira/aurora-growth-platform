import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ActivityIndicator, Alert, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

interface Institution {
  id: string;
  name: string;
  description: string;
  latitude: number;
  longitude: number;
  type: 'ong' | 'school' | 'public_service' | 'course';
}

interface Region {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

const mockInstitutions: Institution[] = [
  { id: '1', name: 'CRAS Central', description: 'Assistência Social e Orientação', latitude: -22.4123, longitude: -42.9654, type: 'public_service' },
  { id: '2', name: 'ONG Novo Amanhã', description: 'Cursos gratuitos e apoio jovem', latitude: -22.4155, longitude: -42.9721, type: 'ong' },
  { id: '3', name: 'Escola Técnica Aurora', description: 'Capacitação Profissional', latitude: -22.4091, longitude: -42.9598, type: 'school' }
];

export default function Map() {
  const [location, setLocation] = useState<Region | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getInitialLocation() {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permissão negada', 'Não podemos mostrar as instituições próximas sem a sua localização.');
          setLocation({
            latitude: -22.4123,
            longitude: -42.9654,
            latitudeDelta: 0.015,
            longitudeDelta: 0.015,
          });
          return;
        }

        const currentPosition = await Location.getCurrentPositionAsync({});
        setLocation({
          latitude: currentPosition.coords.latitude,
          longitude: currentPosition.coords.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.015,
        });
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível determinar a sua localização atual.');
      } finally {
        setLoading(false);
      }
    }
    getInitialLocation();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0052CC" />
        <Text style={styles.loadingText}>Carregando o mapa...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={location ?? undefined} showsUserLocation>
        {mockInstitutions.map((institution) => (
          <Marker
            key={institution.id}
            coordinate={{ latitude: institution.latitude, longitude: institution.longitude }}
            title={institution.name}
            description={institution.description}
            pinColor={institution.type === 'ong' ? 'green' : institution.type === 'school' ? 'blue' : 'orange'}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  map: { width: Dimensions.get('window').width, height: Dimensions.get('window').height },
  loadingText: { marginTop: 10, color: '#5E6C84', fontSize: 16 }
});