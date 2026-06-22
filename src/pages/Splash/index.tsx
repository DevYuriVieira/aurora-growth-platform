import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { theme } from '../../styles/theme';
import { styles } from './style';

export function Splash() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Projeto Aurora</Text>
      <Text style={styles.slogan}>Sua jornada para um novo começo.</Text>
      
      <ActivityIndicator size="large" color={theme.colors.primary} style={styles.spinner} />
    </View>
  );
}