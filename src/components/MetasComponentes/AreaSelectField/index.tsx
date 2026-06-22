import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { AREA_LABELS, AreaType } from '../../../@types/meta';
import { styles } from './styles';

export interface AreaSelectFieldProps {
  label: string;
  value: AreaType | undefined;
  onChange: (area: AreaType) => void;
  error?: string;
}

const AREAS: AreaType[] = [
  'educacao',
  'trabalho',
  'saude',
  'financas',
  'profissao',
];

export function AreaSelectField({
  label,
  value,
  onChange,
  error,
}: AreaSelectFieldProps) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {AREAS.map((area) => {
          const selected = area === value;
          return (
            <TouchableOpacity
              key={area}
              style={[styles.chip, selected && styles.chipSelected]}
              onPress={() => onChange(area)}
            >
              <Text
                style={[styles.chipText, selected && styles.chipTextSelected]}
              >
                {AREA_LABELS[area]}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}