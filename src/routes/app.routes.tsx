import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Comunidade } from '../pages/Comunidade';

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ComunidadeHome" component={Comunidade} />
    </Stack.Navigator>
  );
}