import { Text, View } from 'react-native';

import { TiposAreaComunidade } from '../../@types/community';
import { EtiquetaAreaProps } from './type';
import { styles } from './style';

export function EtiquetaArea({ area }: EtiquetaAreaProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>{TiposAreaComunidade[area]}</Text>
        </View>
    );
}