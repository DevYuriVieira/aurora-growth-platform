import 'react-native-gesture-handler'
import Routes from './src/routes';
import { ProgressProvider } from './src/contexts/ProgressContext';
import { NotificationProvider } from './src/contexts/NotificationContext';

export default function App() {
  return (
   // <AuthProvider>
      <ProgressProvider>
        <NotificationProvider>
          <Routes/>
        </NotificationProvider>
      </ProgressProvider>
    //</AuthProvider>
  );
}


