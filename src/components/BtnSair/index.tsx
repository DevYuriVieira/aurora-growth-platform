import { TouchableOpacity, Text, Alert } from "react-native";
import Icon from '@expo/vector-icons/Ionicons';
import { theme } from "../../styles/theme";
import { styles } from "./style";

import { useAuth } from "../../hooks/useAuth"; 

export const BtnSair = () => {
    const { sair } = useAuth(); 

    function handleConfirmarSaida() {
        Alert.alert(
            "Sair da conta",
            "Tem certeza que deseja sair?",
            [
                { text: "Cancelar", style: "cancel" },
                { 
                    text: "Sim, Sair", 
                    style: "destructive", 
                    onPress: () => sair() 
                }
            ]
        );
    }

    return(
  
        <TouchableOpacity style={styles.container} onPress={handleConfirmarSaida}>
            <Icon name="log-out-outline" size={30} color={theme.colors.error}/>
            <Text style={styles.texto}>Sair</Text>
        </TouchableOpacity>
    )
}