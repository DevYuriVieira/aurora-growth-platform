import { useEffect } from "react";
import { View, Text } from "react-native";
import Animated,{ useAnimatedStyle, useSharedValue, withTiming, Easing } from "react-native-reanimated";
import  Icon  from '@expo/vector-icons/Ionicons';
import { styles } from "./style";
import { calcularLevel } from "../../utils/calcularLevel";

interface XpCardProps{
    xpTotal: number
}

export const XpCard = ({ xpTotal}: XpCardProps) => {

    const dadosNivel = calcularLevel(xpTotal)

    const porcentagem = Math.round(dadosNivel.porcentagemBarra)

    const progresso = useSharedValue(0);

    useEffect(() => {
        progresso.value = withTiming(dadosNivel.porcentagemBarra || 0,{
            duration:1500,
            easing: Easing.out(Easing.cubic)
        })
    }, [dadosNivel.porcentagemBarra]);

    const barraXp = useAnimatedStyle(( )=> {
        return{
            width: `${progresso.value}%`
        }
    })

    return(
        <View style={styles.container}>
            <Text style={styles.texto}>SUA EVOLUÇÃO</Text>
            
            <View style={styles.header}>
                {dadosNivel.isMaxLevel ? (
                    <Text style={styles.porcentagem}>
                        Nível máximo!
                    </Text>
                ) : (
                    <Text style={styles.porcentagem}>
                        {porcentagem}% mais próximo
                    </Text>
                )}
                <Text style={styles.textoNivel}>
                    Nível <Text style={styles.nivel}>{dadosNivel.nivel}</Text>
                </Text>
            </View>

            <View style={styles.contBarra}>
                <Animated.View style={[styles.barraProgresso, barraXp]} />
            </View>

            <View style={styles.body}>
                <View style={styles.starItem}>
                    <Icon name="star" size={25} color="#FFE44B" />
                    <Text style={styles.starTexto}>{xpTotal.toLocaleString('pt-BR')} XP</Text>
                </View>
            </View>
        </View>
    )
}