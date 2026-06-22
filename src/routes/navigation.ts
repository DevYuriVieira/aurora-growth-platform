import { NavigatorScreenParams } from '@react-navigation/native';

export type ParametrosRotasStack = {
    StackLogin: undefined,
    StackHome: undefined,
    StackTabsRoutes: undefined,
    StackNotificacoes: undefined;
}

export type ParametrosRotasDrawer = {
    DrawerInicio: undefined,
    DrawerConfig: undefined,
    DrawerPainelMentor: undefined,
}
export type ParametrosRotasTabs = {
    TabsHome: undefined,
    TabsMeta: undefined,
    TabsComunidade: undefined,
    TabsMentorias: undefined

}
export type ListaMentoriasStackParamList = {
  ListaMentorias: undefined; 
  DetalhesMentorias: { mentoriaId: string }; 
  QRCodeEvento: { codigoIngresso: string; tituloEvento: string }; 
};

declare global {
    namespace ReactNavigation{
        interface RootParamList extends ParametrosRotasStack{}
        interface RootParamList extends ParametrosRotasTabs{}
        interface RootParamList extends ParametrosRotasDrawer{}
        interface RootParamList extends ListaMentoriasStackParamList {}
    }
}