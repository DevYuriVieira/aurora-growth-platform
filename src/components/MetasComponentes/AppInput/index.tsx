import React from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';
import { styles } from './styles';
import { theme } from '../../../styles/theme';

export interface AppInputProps extends TextInputProps {
  label: string;
  error?: string;
}

export function AppInput({ label, error, style, ...rest }: AppInputProps) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, error && styles.inputError, style]}
        placeholderTextColor={theme.colors.outline}
         {...rest}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}