import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Admin } from '../pages/Admin';

const Stack = createNativeStackNavigator();

export function AdminRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AdminDashboard" component={Admin} />
    </Stack.Navigator>
  );
}