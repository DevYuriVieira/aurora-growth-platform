import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ParametrosRotasStack } from './navigation';
import { TabsRoutes } from './tabs';
import { DrawerRoutes } from './drawer';
import { DetalhesPublicacao } from '../pages/DetalhesPublicacao';

const Stack = createNativeStackNavigator<ParametrosRotasStack>();

export const StackRoutes = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='StackHome' component={DrawerRoutes} />

            <Stack.Screen name='StackTabsRoutes' component={TabsRoutes} />

            <Stack.Screen
                name="StackDetalhesPublicacao"
                component={DetalhesPublicacao}
            />
        </Stack.Navigator>
    )
}