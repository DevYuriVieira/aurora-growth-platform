import { View, Text, Image } from 'react-native';
import { styles } from './style';

interface ConquistaCardProps {
    titulo: string;
    subtitulo: string;
    
}

export const ConquistaCard = ({ titulo, subtitulo }: ConquistaCardProps) => {
    return (
        <View style={styles.card}>
            <View >
                <Image source={require('../../assets/med1.png')} style={styles.imagcard} resizeMode='contain'/>
            </View>
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.subtitulo}>{subtitulo}</Text>
        </View>
    );
};