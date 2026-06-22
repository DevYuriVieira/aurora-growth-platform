import { View, Text, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import { styles } from './style';
import { theme } from '../../styles/theme';

interface MetaCardProps {
    titulo: string;
    subtitulo: string;
    nomeIcon: keyof typeof Icon.glyphMap;
}

export const MetaCard = ({ titulo, subtitulo, nomeIcon }: MetaCardProps) => { 
    return (
        <View>
            <View style={styles.detalhecard}>
                
                <Icon name={nomeIcon} size={35} color={theme.colors.onPrimaryContainer}/>
                
                <View style={styles.detalhetexto}>
                    <Text style={styles.titulo} >{titulo}</Text>
                    <Text style={styles.subtitulo}>{subtitulo}</Text>
                </View>
                
            </View>  
        </View> 
    );
};