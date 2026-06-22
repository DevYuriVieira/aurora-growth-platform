import { NavigatorScreenParams } from '@react-navigation/native';

export type ParametrosRotasStack = {
    AuthRoutes: undefined;
    StackLogin: undefined;
    StackRegister: undefined;
    StackHome: undefined;
    StackTabsRoutes: undefined;
    StackNotificacoes: undefined;
    StackDetalhesPublicacao: {
        idPublicacao: string;
    };
};

export type ParametrosRotasDrawer = {
    DrawerInicio: undefined;
    DrawerConfig: undefined;
    DrawerPainelMentor: undefined;
    DrawerSettings: undefined;
    DrawerProfile: undefined;
    DrawerMap: undefined;
    DrawerAdminComunidade: undefined;
};

export type MetasStackParamList = {
    MetasLista: undefined;
    MetasDetalhe: { metaId: string };
    MetasFormulario: { metaId?: string };
};

export type ParametrosRotasTabs = {
    TabsHome: undefined;
    TabsMeta: NavigatorScreenParams<MetasStackParamList>;
    TabsComunidade: undefined;
    TabsMentorias: undefined;
};

export type ListaMentoriasStackParamList = {
    ListaMentorias: undefined;
    DetalhesMentorias: { mentoriaId: string };
    QRCodeEvento: { codigoIngresso: string; tituloEvento: string };
};

declare global {
    namespace ReactNavigation {
        interface RootParamList extends ParametrosRotasStack { }
        interface RootParamList extends ParametrosRotasTabs { }
        interface RootParamList extends ParametrosRotasDrawer { }
        interface RootParamList extends ListaMentoriasStackParamList { }
        interface RootParamList extends MetasStackParamList { }
    }
}