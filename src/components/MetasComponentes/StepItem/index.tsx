import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
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
      <View style={[styles.checkbox, step.done && styles.checkboxDone]}>
        {step.done && <Text style={styles.checkmark}>✓</Text>}
      </View>
      <Text style={[styles.title, step.done && styles.titleDone]}>
        {step.title}
      </Text>
    </TouchableOpacity>
  );
}