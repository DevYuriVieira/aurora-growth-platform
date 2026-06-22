import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ParametrosRotasTabs } from './navigation';
import  Icon  from '@expo/vector-icons/Ionicons';
import { Home } from '../pages/Home';
import { View, Text } from 'react-native';
import { styles } from './style';
import { theme } from '../styles/theme';
import { MentoriasRoutes } from './mentotias.routes';


const Tabs = createBottomTabNavigator<ParametrosRotasTabs>();

export const TabsRoutes = () => {
    return(
        <Tabs.Navigator  
            screenOptions={{
            headerShown: false,
            tabBarStyle:{
            height:80,
            backgroundColor:theme.colors.surfaceBright,
            borderTopWidth: 0.5,
            borderTopColor: 'rgba(255, 255, 255, 0.15)',

            }
        }}>

            <Tabs.Screen 
            name= 'TabsHome' 
            component={Home} 
            options={{
                title:'',
                tabBarIcon: ({focused}) => (
                    <View style={styles.iconTabs}>
                        <Icon name={focused? 'home' : 'home-outline'} size={24} color={focused? theme.colors.primary : theme.colors.outline}/>
                        <Text style={[styles.textoTabs, {color: focused ? theme.colors.primary : theme.colors.outline}]}>Início</Text>
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
                        <Icon name={focused? 'rocket' : 'rocket-outline'} size={25} color={focused? theme.colors.primary : theme.colors.outline}/>
                        <Text style={[styles.textoTabs, {color: focused ? theme.colors.primary : theme.colors.outline}]}>Metas</Text>
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
                        <Icon name={focused? 'people' : 'people-outline'} size={25} color={focused? theme.colors.primary : theme.colors.outline}/>
                        <Text style={[styles.textoTabs, {color: focused ? theme.colors.primary : theme.colors.outline}]}>Comunidade</Text>
                    </View>
                )
            }}/>

            <Tabs.Screen 
            name= 'TabsMentorias' 
            component={MentoriasRoutes}
            options={{
                title:'',
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <View style={styles.iconTabs}>
                        <Icon name={focused? 'stats-chart' : 'stats-chart-outline'} size={25} color={focused? theme.colors.primary : theme.colors.outline}/>
                        <Text style={[styles.textoTabs, {color: focused ? theme.colors.primary : theme.colors.outline}]}>Mentorias</Text>
                    </View>
                )
            }}/>

        </Tabs.Navigator>
    )
}