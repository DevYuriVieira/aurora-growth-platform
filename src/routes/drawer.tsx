import { createDrawerNavigator } from '@react-navigation/drawer';
import  Icon  from '@expo/vector-icons/Ionicons';
import { TabsRoutes } from './tabs';
import { ParametrosRotasDrawer } from './navigation';
import { View, Text} from 'react-native';
import { Header } from '../components/Header';

const Drawer = createDrawerNavigator<ParametrosRotasDrawer>();

export const DrawerRoutes = () => {
    return(
        <Drawer.Navigator screenOptions={{
            title:'',
            header: (props) => <Header {...props} />
            }}>

            <Drawer.Screen 
            name='DrawerHome' 
            component={TabsRoutes} 
            options={{
                drawerIcon: ({focused}) => (
                    <View>
                        <Icon name={focused? 'person-circle-outline' : 'home-outline'} size={25} color={focused? '#FF7E5F' : 'gray'}/>
                        <Text > Perfil</Text>
                    </View>
                )
            }}/>


            
        </Drawer.Navigator>
    )
}