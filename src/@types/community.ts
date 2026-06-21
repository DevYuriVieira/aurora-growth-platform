//tipagem para os posts -> direciona as áreas
export type AreaComunidade =
    | 'educacao'
    | 'trabalho'
    | 'saude'
    | 'financas'
    | 'tecnologia'
    | 'carreira';

// natureza do post
export type TipoPost =
    | 'historia'
    | 'duvida'
    | 'dica'
    | 'conquista';

// entidade que representa um post do feed
export interface PostComunidade {
    id: string;
    usuario: string;
    nivelUsuario: number;
    titulo: string;
    conteudo: string;
    areaPost: AreaComunidade;
    tipoPost: TipoPost;
    xpRecompensa: number;
    dataCriacao: string;
}

// oque é necessário para criação de um post
export interface CriacaoPostDTO {
    titulo: string;
    conteudo: string;
    areaPost: AreaComunidade;
    tipoPost: TipoPost;
}

// tradução das áreas para usuário
export const TiposAreaComunidade: Record<AreaComunidade, string> = {
    educacao: 'Educação',
    trabalho: 'Trabalho',
    saude: 'Saúde',
    financas: 'Finanças',
    tecnologia: 'Tecnologia',
    carreira: 'Carreira',
};

//tradução dos tipos de post para usuário
export const TiposPostComunidade: Record<TipoPost, string> = {
    historia: 'História',
    duvida: 'Dúvida',
    dica: 'Dica',
    conquista: 'Conquista',
};
