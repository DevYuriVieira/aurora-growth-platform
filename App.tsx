import 'react-native-gesture-handler';

import Toast from 'react-native-toast-message';

import Routes from './src/routes';
import { AuthProvider } from './src/contexts/AuthContext';
import { ProgressProvider } from './src/contexts/ProgressContext';
import { NotificationProvider } from './src/contexts/NotificationContext';

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