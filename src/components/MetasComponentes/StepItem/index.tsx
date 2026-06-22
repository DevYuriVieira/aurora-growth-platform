import Icon from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { theme } from '../../../styles/theme';
import { MetaStep } from '../../../@types/meta';
import { styles } from './styles';

export interface StepItemProps {
  step: MetaStep;
  onToggle: (stepId: string) => void;
}

export function StepItem({ step, onToggle }: StepItemProps) {
  return (
    <TouchableOpacity
      style={styles.row}
      onPress={() => onToggle(step.id)}
      activeOpacity={0.7}
    >
      <Icon
        name={step.done ? 'checkmark-circle' : 'ellipse-outline'}
        size={22}
        color={step.done ? theme.colors.primary : theme.colors.outline}
      />
      <Text style={[styles.titulo, step.done && styles.tituloConcluido]}>
        {step.title}
      </Text>
    </TouchableOpacity>
  );
}