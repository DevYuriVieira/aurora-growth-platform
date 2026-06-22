import { PostComunidade } from '../@types/community';

const URL_PUBLICACOES =
    'https://6a39691864a2d8269223eb0f.mockapi.io/aurora/feed/publicacoes';

export async function buscarPublicacoesDaApi(): Promise<PostComunidade[]> {
    const resposta = await fetch(URL_PUBLICACOES);

    if (!resposta.ok) {
        throw new Error('Erro ao buscar publicações da API.');
    }

    const publicacoes = (await resposta.json()) as PostComunidade[];

    return publicacoes;
}