import Icon from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Text, View } from 'react-native';
import { theme } from '../../../styles/theme';
import { styles } from './styles';

export interface EmptyStateProps {
  title: string;
  subtitle?: string;
}

export function EmptyState({ title, subtitle }: EmptyStateProps) {
  return (
    <View style={styles.container}>
      <Icon name="rocket-outline" size={40} color={theme.colors.outline} />
      <Text style={[styles.titulo, { marginTop: 12 }]}>{title}</Text>
      {subtitle && <Text style={styles.subtitulo}>{subtitle}</Text>}
    </View>
  );
}