import Icon from '@expo/vector-icons/Ionicons';
import { DrawerHeaderProps } from '@react-navigation/drawer';
import { TouchableOpacity, View, Text } from "react-native";
import { styles } from './style';
import { theme } from '../../styles/theme';
import { useNotification } from '../../contexts/NotificationContext';
import { useNavigation } from '@react-navigation/native';

export const Header = ({ navigation }: DrawerHeaderProps) => {

    const { notificacoesNaoLidas } = useNotification();
    
    const navegacaoGlobal = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.itensdireita}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Icon name='reorder-three-outline' size={40} color={theme.colors.outline}/>
                </TouchableOpacity>
                <Text style={styles.titulo}>Aurora</Text>
            </View>
            <View style={styles.itensdireita}>
                
                <TouchableOpacity 
                    style={styles.btnSino} 
                    onPress={() => navegacaoGlobal.navigate('StackNotificacoes')}
                >
                    <Icon name='notifications' size={25} color={theme.colors.outline}/>
                    {notificacoesNaoLidas > 0 && (
                        <View style={styles.btnNotificacao}/>
                    )}
                </TouchableOpacity>
                
            </View>
        </View>
    );
}