import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

import Toast from 'react-native-toast-message';

import { RotaPrivadaAdmin } from './src/components/RotaPrivadaAdmin';
import { AdminComunidade } from './src/pages/AdminComunidade';
import { usuarioComumMock } from './src/services/usuarioMock';

export default function App() {
  return (
    <>
      <RotaPrivadaAdmin usuario={usuarioComumMock}>
        <AdminComunidade />
      </RotaPrivadaAdmin>

      <Toast />
    </>
  );
}