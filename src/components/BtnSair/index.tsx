import { TouchableOpacity, Text, Alert } from "react-native"
import Icon from '@expo/vector-icons/Ionicons';
import { theme } from "../../styles/theme";
import { styles } from "./style";
import { useAuth } from "../../hooks/useAuth";

export const BtnSair = () => {
    const { sair } = useAuth();

    const confirmarSaida = () => {
        Alert.alert(
            'Sair',
            'Tem certeza que deseja sair?',
            [
                { text: 'Não', style: 'cancel' },
                { text: 'Sim', style: 'destructive', onPress: () => sair() },
            ]
        );
    };

    return(
        <TouchableOpacity style={styles.container} onPress={confirmarSaida}>
            <Icon name="log-out-outline" size={30} color={theme.colors.error}/>
            <Text style={styles.texto}>Sair</Text>
        </TouchableOpacity>
    )
}