import 'react-native-gesture-handler';

import Toast from 'react-native-toast-message';

import Routes from './src/routes';
import { ProgressProvider } from './src/contexts/ProgressContext';
import { NotificationProvider } from './src/contexts/NotificationContext';
import { AuthProvider } from './src/contexts/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <ProgressProvider>
        <NotificationProvider>
          <Routes />
          <Toast />
        </NotificationProvider>
      </ProgressProvider>
    </AuthProvider>
  );
}