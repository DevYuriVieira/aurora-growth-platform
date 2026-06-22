import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
    container:{
    flexDirection: 'row',
    alignItems:'center'
    },
    texto:{
        color:theme.colors.error,
        paddingLeft: 10,
        fontSize:18
    }
})