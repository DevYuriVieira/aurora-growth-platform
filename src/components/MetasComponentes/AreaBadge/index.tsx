import React from 'react';
import { Text, View } from 'react-native';
import { AREA_LABELS, AreaType } from '../../../@types/meta';
import { styles } from './styles';

export interface AreaBadgeProps {
  area: AreaType;
}

const AREA_COLORS: Record<AreaType, { fundo: string; texto: string }> = {
  educacao: { fundo: '#E7EBFF', texto: '#4C6EF5' },
  trabalho: { fundo: '#E3FCEF', texto: '#12B886' },
  saude: { fundo: '#FFE9E9', texto: '#FA5252' },
  financas: { fundo: '#FFF4DE', texto: '#F59F00' },
  profissao: { fundo: '#F0E9FF', texto: '#7048E8' },
};

export function AreaBadge({ area }: AreaBadgeProps) {
  const cores = AREA_COLORS[area];

  return (
    <View style={[styles.container, { backgroundColor: cores.fundo }]}>
      <Text style={[styles.texto, { color: cores.texto }]}>
        {AREA_LABELS[area]}
      </Text>
    </View>
  );
}