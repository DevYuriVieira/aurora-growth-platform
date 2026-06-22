import { ReactNode } from 'react';

import { UsuarioLogado } from '../../@types/usuario';

export interface RotaPrivadaAdminProps {
    usuario: UsuarioLogado;
    children: ReactNode;
}