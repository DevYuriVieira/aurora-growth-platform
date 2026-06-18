//tipagem para os posts -> direciona as áreas
export type AreaComunidade =
    | 'educação'
    | 'trabalho'
    | 'saúde'
    | 'educação'
    | 'finança'
    | 'tecnologia'
    | 'carreira';

// natureza do post
export type TipoPost =
    | 'história'
    | 'dúvida'
    | 'dica'
    | 'conquista';

// entidade que representa um post do feed
export interface PostComunidade {
    id: string;
    Usuario: string;
    NivelUsuario: number;
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
