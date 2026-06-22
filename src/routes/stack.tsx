import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ParametrosRotasStack } from './navigation';
import { TabsRoutes } from './tabs';
import { DrawerRoutes } from './drawer';
import { Notificacoes } from '../pages/Notificacoes';
import { theme } from '../styles/theme';


const Stack = createNativeStackNavigator<ParametrosRotasStack>();

export const StackRoutes = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='StackHome' component={DrawerRoutes}/>
    
            <Stack.Screen name='StackTabsRoutes' component={TabsRoutes}/>
            <Stack.Screen 
                name='StackNotificacoes' 
                component={Notificacoes} 
                options={{ 
                    title: '', 
                    headerBackTitle: '', 
                    headerTintColor: theme.colors.primary, 
                    headerStyle: {
                        backgroundColor: theme.colors.surface, 
                    },
                    headerShadowVisible: false,
                }}
            />
        </Stack.Navigator>
    )
}