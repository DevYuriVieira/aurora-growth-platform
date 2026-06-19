import  Icon  from '@expo/vector-icons/Ionicons';
import { DrawerHeaderProps } from '@react-navigation/drawer';
import { TouchableOpacity, View, Text } from "react-native";
import { styles } from './style';



export const Header = ({navigation}: DrawerHeaderProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.perfil}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Icon name='reorder-three-outline' size={40} color='gray'/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name='person-circle' size={40} color='gray'/>
                </TouchableOpacity>
                <Text style={styles.nome}>Aurora</Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Icon name='notifications-outline' size={25} color='gray'/>
                </TouchableOpacity>
            </View>

        </View>
    );
}