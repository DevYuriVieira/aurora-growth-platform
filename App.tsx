import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Toast from 'react-native-toast-message';

import { MetasStackRoutes } from './src/routes/metas.routes';
import { ProgressProvider } from './src/contexts/ProgressContext';

export default function App() {
  return (
    <ProgressProvider>
      <NavigationContainer>
        <MetasStackRoutes />
        <Toast />
      </NavigationContainer>
    </ProgressProvider>
  );
}