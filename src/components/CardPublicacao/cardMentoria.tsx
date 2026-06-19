import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Mentoria } from '../../@types/mentoria';
import {Styles} from './styleCardMentorias';

interface CardMentoriaProps {
  dados: Mentoria;
  aoPressionar: () => void; 
}

export function CardMentoria({ dados, aoPressionar }: CardMentoriaProps) {
  return (
    <TouchableOpacity style={Styles.container} onPress={aoPressionar} activeOpacity={0.7}>
      <Text style={Styles.titulo}>{dados.titulo}</Text>
      <Text style={Styles.mentor}>Mentor(a): {dados.nomeMentor}</Text>
      
      <View style={Styles.rodape}>
        <Text style={Styles.info}>{dados.data} às {dados.hora}</Text>
        <Text style={Styles.local} numberOfLines={1}>📍 {dados.local}</Text>
      </View>
    </TouchableOpacity>
  );
}
