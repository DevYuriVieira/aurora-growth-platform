import 'react-native-gesture-handler';

import Toast from 'react-native-toast-message';

import Routes from './src/routes';
import { ProgressProvider } from './src/contexts/ProgressContext';
import { NotificationProvider } from './src/contexts/NotificationContext';

export default function App() {
  return (
    <ProgressProvider>
      <NotificationProvider>
        <Routes />
        <Toast />
      </NotificationProvider>
    </ProgressProvider>
  );
}