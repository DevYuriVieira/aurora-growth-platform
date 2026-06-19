// src/routes/MentoriasRoutes.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ListaMentorias } from '../pages/listaMentorias/listaMentorias';
import { DetalhesMentorias } from '../pages/detalhesMentorias/detalhesMentorias';
import { QRCodeEvento } from '../pages/QrCodeEventos/QRcodeEvento';
import { ListaMentoriasStackParamList } from './types';

const Stack = createNativeStackNavigator < ListaMentoriasStackParamList > ();

export function MentoriasRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#007AEE' },
                headerTintColor: '#FFF',
                headerTitleAlign: 'center'
            }}
        >
            <Stack.Screen
                name="ListaMentorias"
                component={ListaMentorias}
                options={{ title: 'Mentorias e Eventos' }}
            />
            <Stack.Screen
                name="DetalhesMentorias"
                component={DetalhesMentorias}
                options={{ title: 'Detalhes da Mentoria' }}
            />
            <Stack.Screen
                name="QRCodeEvento"
                component={QRCodeEvento}
                options={{ title: 'Ingresso Confirmado', headerLeft: () => null }} // Remove o botão voltar no QR Code
            />
        </Stack.Navigator>
    );
}