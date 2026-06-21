import { View, Text, Image, ImageSourcePropType } from 'react-native';
import { styles } from './style';
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withSequence, withTiming } from 'react-native-reanimated';
import { useEffect } from 'react';

interface ConquistaCardProps {
    titulo: string;
    subtitulo: string;
    imagem: ImageSourcePropType;
    
}

export const ConquistaCard = ({ titulo, subtitulo, imagem }: ConquistaCardProps) => {

    const posicao = useSharedValue(0);
    
    useEffect(() => {
        posicao.value = withRepeat(
            withSequence(
                withTiming(-3, { duration: 1500 }),
                withTiming( 3, { duration: 1500 }),
            ),
            -1, 
            true 
        );
    }, []);

    
    const estiloAnimado = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: posicao.value }],
        };
    });

    return (
        <View style={styles.card}>
            <View >
                <Animated.Image source={imagem} 
                    style={[styles.imagcard, estiloAnimado]} 
                    resizeMode='contain'
                />
            </View>
            <View style={styles.textos}>
                <Text style={styles.titulo}>{titulo}</Text>
                <Text style={styles.subtitulo}>{subtitulo}</Text>
            </View>
        </View>
    );
};