import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { MetasDetalhe } from '../pages/Metas/MetasDetalhe';
import { MetasFormulario } from '../pages/Metas/MetasFormulario';
import { MetasLista } from '../pages/Metas/MetasLista';
import { MetasStackParamList } from './metasRoutesTypes';

const Stack = createNativeStackNavigator<MetasStackParamList>();

export function MetasStackRoutes() {
  return (
    <Stack.Navigator initialRouteName="MetasLista">
      <Stack.Screen
        name="MetasLista"
        component={MetasLista}
        options={{ title: 'Minhas metas' }}
      />
      <Stack.Screen
        name="MetasDetalhe"
        component={MetasDetalhe}
        options={{ title: 'Detalhes da meta' }}
      />
      <Stack.Screen
        name="MetasFormulario"
        component={MetasFormulario}
        options={{ title: 'Nova meta' }}
      />
    </Stack.Navigator>
  );
}