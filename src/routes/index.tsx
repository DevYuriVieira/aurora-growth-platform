import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stack";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../hooks/useAuth";
import { Splash } from "../pages/Splash";

export default function Routes() {
    const { usuario, carregando } = useAuth();

    if (carregando) {
        return <Splash />;
    }

    return (
        <NavigationContainer>
            {usuario ? <StackRoutes /> : <AuthRoutes />}
        </NavigationContainer>
    );
}