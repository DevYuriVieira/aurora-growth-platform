import Slider from '@react-native-community/slider';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { theme } from '../../../styles/theme';
import { styles } from './styles';

export interface ProgressSliderProps {
  value: number;
  onChangeComplete: (value: number) => void;
  disabled?: boolean;
}

export function ProgressSlider({
  value,
  onChangeComplete,
  disabled = false,
}: ProgressSliderProps) {
  const [valorExibido, setValorExibido] = useState(value);

  return (
    <View style={styles.wrapper}>
      <View style={styles.labelRow}>
        <Text style={styles.label}>Progresso</Text>
        <Text style={styles.valor}>{Math.round(valorExibido)}%</Text>
      </View>

      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        step={1}
        value={value}
        disabled={disabled}
        minimumTrackTintColor={theme.colors.primary}
        maximumTrackTintColor="rgba(0, 0, 0, 0.35)"
        thumbTintColor={theme.colors.primary}
        onValueChange={setValorExibido}
        onSlidingComplete={onChangeComplete}
      />
    </View>
  );
}