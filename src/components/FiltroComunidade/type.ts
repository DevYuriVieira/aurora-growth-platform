import { AreaComunidade } from '../../@types/community';

export type FiltroArea = AreaComunidade | 'todas';

export interface FiltroComunidadeProps {
    areaSelecionada: FiltroArea;
    aoSelecionarArea: (area: FiltroArea) => void;
}