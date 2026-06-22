import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppTabs from './app.tabs.routes';
import Map from '../pages/Map';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';
import { AppDrawerParamList } from './types';

const Drawer = createDrawerNavigator<AppDrawerParamList>();

export default function AppDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        drawerActiveTintColor: '#0052CC',
        drawerInactiveTintColor: '#5E6C84',
      }}
    >
      <Drawer.Screen 
        name="Tabs" 
        component={AppTabs} 
        options={{ title: 'Início' }}
      />
      <Drawer.Screen 
        name="Map" 
        component={Map} 
        options={{ title: 'Instituições Próximas' }}
      />
      <Drawer.Screen 
        name="Profile" 
        component={Profile} 
        options={{ title: 'Meu Perfil' }}
      />
      <Drawer.Screen 
        name="Settings" 
        component={Settings} 
        options={{ title: 'Configurações' }}
      />
    </Drawer.Navigator>
  );
}