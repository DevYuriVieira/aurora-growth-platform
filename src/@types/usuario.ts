export type TipoUsuario = 'usuario' | 'admin';

export interface UsuarioLogado {
    id: string;
    nome: string;
    email: string;
    tipoUsuario: TipoUsuario;
}