import React from 'react';
import { Text, View } from 'react-native';
import { AREA_LABELS, AreaType } from '../../../@types/meta';
import { styles } from './styles';

export interface AreaBadgeProps {
  area: AreaType;
}

const AREA_COLORS: Record<AreaType, string> = {
  educacao: '#4C6EF5',
  trabalho: '#12B886',
  saude: '#FA5252',
  financas: '#F59F00',
  profissao: '#7048E8',
};

export function AreaBadge({ area }: AreaBadgeProps) {
  return (
    <View style={[styles.badge, { backgroundColor: `${AREA_COLORS[area]}20` }]}>
      <Text style={[styles.text, { color: AREA_COLORS[area] }]}>
        {AREA_LABELS[area]}
      </Text>
    </View>
  );
}