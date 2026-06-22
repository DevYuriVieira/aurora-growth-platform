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
    DrawerAdminComunidade: undefined;
};

export type ParametrosRotasTabs = {
    TabsHome: undefined;
    TabsMeta: undefined;
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
    }
}