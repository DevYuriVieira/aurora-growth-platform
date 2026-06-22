import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator, View } from 'react-native';

import { ParametrosRotasStack } from './navigation';
import { TabsRoutes } from './tabs';
import { DrawerRoutes } from './drawer';
import { DetalhesPublicacao } from '../pages/DetalhesPublicacao';
import { theme } from '../styles/theme';
import { AuthRoutes } from './auth.routes';
import { useAuth } from '../hooks/useAuth';
import { Notificacoes } from '../pages/Notificacoes';

const Stack = createNativeStackNavigator<ParametrosRotasStack>();

export const StackRoutes = () => {
    const { usuario, carregando } = useAuth();

    if (carregando) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: theme.colors.surface,
                }}
            >
                <ActivityIndicator size="large" color={theme.colors.primary} />
            </View>
        );
    }

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {usuario ? (
                <Stack.Group>
                    <Stack.Screen name="StackHome" component={DrawerRoutes} />

                    <Stack.Screen name="StackTabsRoutes" component={TabsRoutes} />

                    <Stack.Screen
                        name="StackNotificacoes"
                        component={Notificacoes}
                        options={{
                            title: '',
                            headerBackTitle: '',
                            headerTintColor: theme.colors.primary,
                            headerStyle: { backgroundColor: theme.colors.surface },
                            headerShadowVisible: false,
                        }}
                    />

                    <Stack.Screen
                        name="StackDetalhesPublicacao"
                        component={DetalhesPublicacao}
                    />
                </Stack.Group>
            ) : (
                <Stack.Screen name="AuthRoutes" component={AuthRoutes} />
            )}
        </Stack.Navigator>
    );
};