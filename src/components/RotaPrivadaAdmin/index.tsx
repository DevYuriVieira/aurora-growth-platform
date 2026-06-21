import { Text, View } from 'react-native';

import { RotaPrivadaAdminProps } from './type';
import { styles } from './style';

export function RotaPrivadaAdmin({
    usuario,
    children,
}: RotaPrivadaAdminProps) {
    if (usuario.tipoUsuario !== 'admin') {
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