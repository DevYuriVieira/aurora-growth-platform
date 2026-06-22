import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { TabsRoutes } from './tabs';
import { ParametrosRotasDrawer } from './navigation';
import { View, Text} from 'react-native';
import { Header } from '../components/Header';
import { theme } from '../styles/theme';
import { styles } from './style';
import { BtnSair } from '../components/BtnSair';
import { PainelMentor } from '../pages/painelMentor';
import Map from '../pages/Map';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';


const Drawer = createDrawerNavigator<ParametrosRotasDrawer>();

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
    return (
        <View style={{ flex: 1 }}>

            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>

            <View style={{ padding: 20, marginBottom: 20 }}>
                <BtnSair />
            </View>
        </View>
    );
};

export const DrawerRoutes = () => {
    return(
        <Drawer.Navigator 
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
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

            <Drawer.Screen 
             name="DrawerProfile" 
             component={Profile} 
                options={{
                drawerIcon: () => (
                    <View style={styles.iconsDrawer}>
                        <Text style={styles.textoDrawer}>Perfil</Text>
                    </View>
                    )
                }}
           />

           <Drawer.Screen 
             name="DrawerMap" 
             component={Map} 
            options={{
                drawerIcon: () => (
                    <View style={styles.iconsDrawer}>
                        <Text style={styles.textoDrawer}>Instituições</Text>
                    </View>
                    )
                }}
           />

           <Drawer.Screen 
             name="DrawerSettings" 
             component={Settings} 
            options={{
                drawerIcon: () => (
                    <View style={styles.iconsDrawer}>
                        <Text style={styles.textoDrawer}>Configurações</Text>
                    </View>
                    )
                }}
           />

            <Drawer.Screen 
                name='DrawerPainelMentor' 
                component={PainelMentor} 
                options={{
                    drawerIcon: () => (
                        <View style={styles.iconsDrawer}>
                            <Text style={styles.textoDrawer}>Painel Mentor</Text>
                        </View>
                        )
                    }}
                />

        </Drawer.Navigator>
    )
}