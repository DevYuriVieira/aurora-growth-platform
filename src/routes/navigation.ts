import { NavigatorScreenParams } from '@react-navigation/native';

export type ParametrosRotasStack = {
    StackHome: undefined,
    StackTabsRoutes: undefined
}

export type ParametrosRotasDrawer = {
    DrawerHome: undefined,
}
export type ParametrosRotasTabs = {
    TabsHome: undefined,
    TabsMeta: undefined,
    TabsComunidade: undefined,
    TabsPerfil: undefined

}

declare global {
    namespace ReactNavigation{
        interface RootParamList extends ParametrosRotasStack{}
        interface RootParamList extends ParametrosRotasTabs{}
        interface RootParamList extends ParametrosRotasDrawer{}
    }
}