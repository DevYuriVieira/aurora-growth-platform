import { View, Text, TouchableOpacity } from 'react-native';
import  Icon  from '@expo/vector-icons/Ionicons';
import { styles } from './style';

interface MetaCardProps {
    titulo: string;
    subtitulo: string;
    nomeIcon: keyof typeof Icon.glyphMap;
}

export const MetaCard = ({ titulo, subtitulo, nomeIcon }: MetaCardProps) => { 
    return (
        <TouchableOpacity>
            <View style={styles.detalhecard}>
                <View>
                    <Icon name={nomeIcon} size={35} color='gray'/>
                </View>
                <View style={styles.detalhetexto}>
                    <Text style={styles.titulo}>{titulo}</Text>
                    <Text style={styles.subtitulo}>{subtitulo}</Text>
                </View>
                <Icon name="chevron-forward" size={20} color="#C4C4CC" />
            </View>  
        </TouchableOpacity> 
    );
};