import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Mentoria } from '../../@types/mentoria';
import {styles} from './styleCardMentorias';

interface CardMentoriaProps {
  dados: Mentoria;
  aoPressionar: () => void; 
}

export function CardMentoria({ dados, aoPressionar }: CardMentoriaProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={aoPressionar} activeOpacity={0.7}>
      <Text style={styles.titulo}>{dados.titulo}</Text>
      <Text style={styles.mentor}>Mentor(a): {dados.nomeMentor}</Text>
      
      <View style={styles.rodape}>
        <Text style={styles.info}>{dados.data} às {dados.hora}</Text>
        <Text style={styles.local} numberOfLines={1}>📍 {dados.local}</Text>
      </View>
    </TouchableOpacity>
  );
}
