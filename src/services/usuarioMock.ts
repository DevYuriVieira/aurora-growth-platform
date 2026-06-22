import { UsuarioLogado } from '../@types/usuario';

export const usuarioComumMock: UsuarioLogado = {
    id: '1',
    nome: 'Arthur Carvalho',
    email: 'arthur@email.com',
    tipoUsuario: 'usuario',
};

export const usuarioAdminMock: UsuarioLogado = {
    id: '2',
    nome: 'Admin Aurora',
    email: 'admin@aurora.com',
    tipoUsuario: 'admin',
};