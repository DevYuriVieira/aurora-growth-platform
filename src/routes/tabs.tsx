import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ParametrosRotasTabs } from './navigation';
import  Icon  from '@expo/vector-icons/Ionicons';
import { Home } from '../pages/Home';
import { View, Text } from 'react-native';
import { styles } from './style';


const Tabs = createBottomTabNavigator<ParametrosRotasTabs>();

export const TabsRoutes = () => {
    return(
        <Tabs.Navigator  
               screenOptions={{
            headerShown: false,
            tabBarStyle:{
            height:80,

            }
        }}>

            <Tabs.Screen 
            name= 'TabsHome' 
            component={Home} 
            options={{
                title:'',
                tabBarIcon: ({focused}) => (
                    <View style={styles.iconTabs}>
                        <Icon name={focused? 'home' : 'home-outline'} size={24} color={focused? '#FF7E5F' : 'gray'}/>
                        <Text style={[styles.textoTabs, {color: focused ? '#FF7E5F' : 'gray'}]}>Início</Text>
                    </View>
                )
            }}/>

            <Tabs.Screen 
            name= 'TabsMeta' 
            component={Home}
            options={{
                title:'',
                tabBarIcon: ({focused}) => (
                    <View style={styles.iconTabs}>
                        <Icon name={focused? 'rocket' : 'rocket-outline'} size={25} color={focused? '#FF7E5F' : 'gray'}/>
                        <Text style={[styles.textoTabs, {color: focused ? '#FF7E5F' : 'gray'}]}>Metas</Text>
                    </View>
                )
            }}/>

            <Tabs.Screen 
            name= 'TabsComunidade' 
            component={Home}
            options={{
                title:'',
                tabBarIcon: ({focused}) => (
                    <View style={styles.iconTabs}>
                        <Icon name={focused? 'people' : 'people-outline'} size={25} color={focused? '#FF7E5F' : 'gray'}/>
                        <Text style={[styles.textoTabs, {color: focused ? '#FF7E5F' : 'gray'}]}>Comunidade</Text>
                    </View>
                )
            }}/>

            <Tabs.Screen 
            name= 'TabsPerfil' 
            component={Home}
            options={{
                title:'',
                tabBarIcon: ({focused}) => (
                    <View style={styles.iconTabs}>
                        <Icon name={focused? 'person-circle' : 'person-circle-outline'} size={25} color={focused? '#FF7E5F' : 'gray'}/>
                        <Text style={[styles.textoTabs, {color: focused ? '#FF7E5F' : 'gray'}]}>Perfil</Text>
                    </View>
                )
            }}/>

        </Tabs.Navigator>
    )
}