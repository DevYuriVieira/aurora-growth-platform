import { TouchableOpacity, Text } from "react-native"
import Icon from '@expo/vector-icons/Ionicons';
import { theme } from "../../styles/theme";
import { styles } from "./style";

export const BtnSair = () => {
    return(
        <TouchableOpacity style={styles.container}>
            <Icon name="log-out-outline" size={30} color={theme.colors.error}/>
            <Text style={styles.texto}>Sair</Text>
        </TouchableOpacity>
    )
}