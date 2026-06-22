import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { styles } from './style'; 

interface AppButtonProps extends TouchableOpacityProps {
  title: string; 
  carregando?: boolean;
}

export function AppButton({ title, carregando = false, ...props }: AppButtonProps) {
  return (
    <TouchableOpacity 
      style={[styles.botao, carregando && styles.botaoDesabilitado]} 
      disabled={carregando}
      activeOpacity={0.8}
      {...props}
    >
      {carregando ? (
        <ActivityIndicator color="#FFFFFF" />
      ) : (
        <Text style={styles.texto}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}