import {
    createDrawerNavigator,
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import { TabsRoutes } from './tabs';
import { ParametrosRotasDrawer } from './navigation';
import { Header } from '../components/Header';
import { theme } from '../styles/theme';
import { styles } from './style';
import { BtnSair } from '../components/BtnSair';
import { RotaPrivadaAdmin } from '../components/RotaPrivadaAdmin';
import { AdminComunidade } from '../pages/AdminComunidade';
import { usuarioAdminMock } from '../services/usuarioMock';
import { PainelMentor } from '../pages/painelMentor';

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

function AdminComunidadeProtegida() {
    return (
        <RotaPrivadaAdmin usuario={usuarioAdminMock}>
            <AdminComunidade />
        </RotaPrivadaAdmin>
    );
}

export const DrawerRoutes = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                title: '',
                header: (props) => <Header {...props} />,
                drawerStyle: {
                    backgroundColor: theme.colors.surface,
                    width: 240,
                },
                drawerActiveBackgroundColor: theme.colors.surfaceContainerHigh,
                drawerActiveTintColor: theme.colors.primary,
                drawerInactiveTintColor: theme.colors.onSurfaceVariant,
            }}
        >
            <Drawer.Screen
                name="DrawerInicio"
                component={TabsRoutes}
                options={{
                    drawerIcon: () => (
                        <View style={styles.iconsDrawer}>
                            <Text style={styles.textoDrawer}> Início</Text>
                        </View>
                    ),
                }}
            />

            <Drawer.Screen
                name="DrawerPainelMentor"
                component={PainelMentor}
                options={{
                    drawerIcon: () => (
                        <View style={styles.iconsDrawer}>
                            <Text style={styles.textoDrawer}> Painel do Mentor</Text>
                        </View>
                    ),
                }}
            />

            <Drawer.Screen
                name="DrawerAdminComunidade"
                component={AdminComunidadeProtegida}
                options={{
                    drawerIcon: () => (
                        <View style={styles.iconsDrawer}>
                            <Text style={styles.textoDrawer}> Admin Comunidade</Text>
                        </View>
                    ),
                }}
            />
        </Drawer.Navigator>
    );
};