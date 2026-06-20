import { createDrawerNavigator } from '@react-navigation/drawer';
import  Icon  from '@expo/vector-icons/Ionicons';
import { TabsRoutes } from './tabs';
import { ParametrosRotasDrawer } from './navigation';
import { View, Text} from 'react-native';
import { Header } from '../components/Header';
import { theme } from '../styles/theme';
import { styles } from './style';


const Drawer = createDrawerNavigator<ParametrosRotasDrawer>();

export const DrawerRoutes = () => {
    return(
        <Drawer.Navigator screenOptions={{
            title:'',
            header: (props) => <Header {...props} />,
            drawerStyle: {
                backgroundColor: theme.colors.surface,
                width:240
            },
            drawerActiveBackgroundColor: theme.colors.surfaceContainerHigh,
            drawerActiveTintColor: theme.colors.primary,
            drawerInactiveTintColor: theme.colors.onSurfaceVariant
            }}>

            <Drawer.Screen 
            name='DrawerInicio' 
            component={TabsRoutes} 
            options={{
                drawerIcon: () => (
                    <View style={styles.iconsDrawer}>
                        <Text style={styles.textoDrawer}> Início</Text>
                    </View>
                )
            }}
            /> 

           {/* <Drawer.Screen 
                name='DrawerConfig' 
                component={} 
                options={{
                    drawerLabel: 'Perfil',
                }}
            /> */}

                {/* <Drawer.Screen 
                name='DrawerConfig' 
                component={} 
                options={{
                    drawerLabel: 'Perfil',
                }}
            /> */}

                {/* <Drawer.Screen 
                name='DrawerConfig' 
                component={} 
                options={{
                    drawerLabel: 'Perfil',
                }}
            /> */}
        </Drawer.Navigator>
    )
}