import {
    AreaComunidade,
    PostComunidade,
    TipoPost,
} from '../@types/community';

interface PostApi {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const areas: AreaComunidade[] = [
    'educacao',
    'trabalho',
    'saude',
    'financas',
    'tecnologia',
    'carreira',
];

const tipos: TipoPost[] = [
    'historia',
    'duvida',
    'dica',
    'conquista',
];

export async function buscarPublicacoesDaApi(): Promise<PostComunidade[]> {
    const resposta = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=8'
    );

    if (!resposta.ok) {
        throw new Error('Erro ao buscar publicações da API.');
    }

    const postsApi = (await resposta.json()) as PostApi[];

    return postsApi.map((post, index) => {
        const areaPost = areas[index % areas.length];
        const tipoPost = tipos[index % tipos.length];

        return {
            id: String(post.id),
            usuario: `Usuário ${post.userId}`,
            nivelUsuario: index + 1,
            titulo: post.title,
            conteudo: post.body,
            areaPost,
            tipoPost,
            xpRecompensa: 30 + index * 10,
            dataCriacao: 'Hoje',
        };
    });
}