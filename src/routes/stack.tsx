import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ParametrosRotasStack } from './navigation';
import { TabsRoutes } from './tabs';
import { DrawerRoutes } from './drawer';


const Stack = createNativeStackNavigator<ParametrosRotasStack>();

export const StackRoutes = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='StackHome' component={DrawerRoutes}/>
    
            <Stack.Screen name='StackTabsRoutes' component={TabsRoutes}/>
        </Stack.Navigator>
    )
}