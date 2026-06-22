// src/components/MetasComponentes/MetaCard/index.tsx

import Icon from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { theme } from '../../../styles/theme';
import { Meta, STATUS_LABELS } from '../../../@types/meta';
import { AreaBadge } from '../AreaBadge';
import { ProgressBar } from '../ProgressBar';
import { styles } from './styles';

export interface MetaCardProps {
  meta: Meta;
  onPress: (meta: Meta) => void;
  onDelete: (meta: Meta) => void;
}

export function MetaCard({ meta, onPress, onDelete }: MetaCardProps) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => onPress(meta)}
      activeOpacity={0.8}
    >
      <View style={styles.headerRow}>
        <AreaBadge area={meta.area} />
        <TouchableOpacity
          onPress={() => onDelete(meta)}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Icon name="trash-outline" size={20} color={theme.colors.error} />
        </TouchableOpacity>
      </View>

      <Text style={styles.titulo}>{meta.title}</Text>
      <Text style={styles.subtitulo} numberOfLines={2}>
        {meta.description}
      </Text>

      <ProgressBar progress={meta.progress} />

      <Text style={styles.status}>{STATUS_LABELS[meta.status]}</Text>
    </TouchableOpacity>
  );
}