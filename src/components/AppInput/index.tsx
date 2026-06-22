import React from 'react';
import { View, TextInput, Text, TextInputProps } from 'react-native';
import { theme } from '../../styles/theme';
import { styles } from './style';

interface AppInputProps extends TextInputProps {
  label?: string; 
  erro?: string;
}

export function AppInput({ label, erro, ...props }: AppInputProps) {
  return (
    <View style={styles.container}>
      {!!label && <Text style={styles.rotulo}>{label}</Text>}
      
      <TextInput 
        style={[styles.entrada, !!erro && styles.entradaComErro]} 
        placeholderTextColor={theme.colors.onSurfaceVariant}
        {...props} 
      />
      
      {!!erro && <Text style={styles.textoErro}>{erro}</Text>}
    </View>
  );
}