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
  const [displayValue, setDisplayValue] = useState(value);

  return (
    <View style={styles.wrapper}>
      <View style={styles.labelRow}>
        <Text style={styles.label}>Progresso</Text>
        <Text style={styles.value}>{Math.round(displayValue)}%</Text>
      </View>

      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        step={1}
        value={value}
        disabled={disabled}
        minimumTrackTintColor={theme.colors.primary}
        maximumTrackTintColor={theme.colors.surfaceBright}
        thumbTintColor={theme.colors.primary}
        onValueChange={setDisplayValue}
        onSlidingComplete={onChangeComplete}
      />
    </View>
  );
}