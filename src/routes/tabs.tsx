import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text } from 'react-native';

import { ParametrosRotasTabs } from './navigation';
import { Home } from '../pages/Home';
import { Comunidade } from '../pages/Comunidade';
import { MentoriasRoutes } from './mentorias.routes';
import { styles } from './style';
import { theme } from '../styles/theme';

const Tabs = createBottomTabNavigator<ParametrosRotasTabs>();

export const TabsRoutes = () => {
    return (
        <Tabs.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 80,
                    backgroundColor: theme.colors.surfaceBright,
                    borderTopWidth: 0.5,
                    borderTopColor: 'rgba(255, 255, 255, 0.15)',
                },
            }}
        >
            <Tabs.Screen
                name="TabsHome"
                component={Home}
                options={{
                    title: '',
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.iconTabs}>
                            <Ionicons
                                name={focused ? 'home' : 'home-outline'}
                                size={24}
                                color={focused ? theme.colors.primary : theme.colors.outline}
                            />

                            <Text
                                style={[
                                    styles.textoTabs,
                                    { color: focused ? theme.colors.primary : theme.colors.outline },
                                ]}
                            >
                                Início
                            </Text>
                        </View>
                    ),
                }}
            />

            <Tabs.Screen
                name="TabsMeta"
                component={Home}
                options={{
                    title: '',
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.iconTabs}>
                            <Ionicons
                                name={focused ? 'rocket' : 'rocket-outline'}
                                size={25}
                                color={focused ? theme.colors.primary : theme.colors.outline}
                            />

                            <Text
                                style={[
                                    styles.textoTabs,
                                    { color: focused ? theme.colors.primary : theme.colors.outline },
                                ]}
                            >
                                Metas
                            </Text>
                        </View>
                    ),
                }}
            />

            <Tabs.Screen
                name="TabsComunidade"
                component={Comunidade}
                options={{
                    title: '',
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.iconTabs}>
                            <Ionicons
                                name={focused ? 'people' : 'people-outline'}
                                size={25}
                                color={focused ? theme.colors.primary : theme.colors.outline}
                            />

                            <Text
                                style={[
                                    styles.textoTabs,
                                    { color: focused ? theme.colors.primary : theme.colors.outline },
                                ]}
                            >
                                Comunidade
                            </Text>
                        </View>
                    ),
                }}
            />

            <Tabs.Screen
                name="TabsMentorias"
                component={MentoriasRoutes}
                options={{
                    title: '',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.iconTabs}>
                            <Ionicons
                                name={focused ? 'stats-chart' : 'stats-chart-outline'}
                                size={25}
                                color={focused ? theme.colors.primary : theme.colors.outline}
                            />

                            <Text
                                style={[
                                    styles.textoTabs,
                                    { color: focused ? theme.colors.primary : theme.colors.outline },
                                ]}
                            >
                                Mentorias
                            </Text>
                        </View>
                    ),
                }}
            />
        </Tabs.Navigator>
    );
};