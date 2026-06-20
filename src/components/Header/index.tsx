import  Icon  from '@expo/vector-icons/Ionicons';
import { DrawerHeaderProps } from '@react-navigation/drawer';
import { TouchableOpacity, View, Text } from "react-native";
import { styles } from './style';
import { theme } from '../../styles/theme';
import { useState } from 'react';



export const Header = ({navigation}: DrawerHeaderProps) => {

    const [temNotificacao, setTemNotificacao] = useState(true)

    return (
        <View style={styles.container}>
            <View style={styles.itensdireita}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <Icon name='reorder-three-outline' size={40} color={theme.colors.outline}/>
                </TouchableOpacity>
                <Text style={styles.titulo}>Aurora</Text>
            </View>
            <View style={styles.itensdireita}>
                <TouchableOpacity style={styles.btnSino} onPress={( () => setTemNotificacao(false))}>
                    <Icon name='notifications' size={25} color={theme.colors.outline}/>
                    {temNotificacao && (
                        <View style={styles.btnNotificacao}/>
                    )}
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name='person-circle' size={40} color={theme.colors.outline}/>
                </TouchableOpacity>
            </View>

        </View>
    );
}