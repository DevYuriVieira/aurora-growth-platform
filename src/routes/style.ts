import { StyleSheet } from "react-native";
import { theme } from "../styles/theme";

export const styles = StyleSheet.create({
    iconTabs:{
        alignItems: 'center',
        marginTop: 10,
        width: 80 
    },
    textoTabs:{
        fontSize: 12,
        marginTop: 8,
    },
    iconsDrawer:{
        flexDirection:'row',
        alignItems:'center',
        gap:10
    },
    textoDrawer:{
        fontSize:18,
        color: theme.colors.onPrimary
    }
})