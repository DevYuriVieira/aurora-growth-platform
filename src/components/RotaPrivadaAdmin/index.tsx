import { Text, View } from 'react-native';

import { useAuth } from '../../hooks/useAuth';
import { RotaPrivadaAdminProps } from './type';
import { styles } from './style';

export function RotaPrivadaAdmin({ children }: RotaPrivadaAdminProps) {
    const { usuario } = useAuth();

    if (!usuario) {
        return (
            <View style={styles.containerNegado}>
                <Text style={styles.tituloNegado}>Usuário não autenticado</Text>

                <Text style={styles.textoNegado}>
                    Faça login para acessar esta área do Projeto Aurora.
                </Text>
            </View>
        );
    }

    if (usuario.perfil !== 'admin') {
        return (
            <View style={styles.containerNegado}>
                <Text style={styles.tituloNegado}>Acesso restrito</Text>

                <Text style={styles.textoNegado}>
                    Esta área é exclusiva para administradores do Projeto Aurora.
                </Text>
            </View>
        );
    }

    return <>{children}</>;
}