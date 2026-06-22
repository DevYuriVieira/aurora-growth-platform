import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { MetasDetalhe } from '../pages/Metas/MetasDetalhe';
import { MetasFormulario } from '../pages/Metas/MetasFormulario';
import { MetasLista } from '../pages/Metas/MetasLista';
import { MetasStackParamList } from './metasRoutesTypes';

const Stack = createNativeStackNavigator<MetasStackParamList>();

export function MetasStackRoutes() {
  return (
    <Stack.Navigator initialRouteName="MetasLista" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MetasLista" component={MetasLista} />
      <Stack.Screen name="MetasDetalhe" component={MetasDetalhe} />
      <Stack.Screen name="MetasFormulario" component={MetasFormulario} />
    </Stack.Navigator>
  );
}