import AsyncStorage from '@react-native-async-storage/async-storage';
import { PostComunidade } from '../@types/community';
import { postComunidadeMock } from './comunidadeMock';
import { buscarPublicacoesDaApi } from './comunidadeApiService';

const CHAVE_PUBLICACOES_COMUNIDADE = '@aurora:publicacoes-comunidade';

export async function buscarPublicacoesSalvas(): Promise<PostComunidade[]> {
    const publicacoesSalvas = await AsyncStorage.getItem(
        CHAVE_PUBLICACOES_COMUNIDADE
    );

    if (!publicacoesSalvas) {
        try {
            const publicacoesApi = await buscarPublicacoesDaApi();

            await salvarPublicacoes(publicacoesApi);

            return publicacoesApi;
        } catch {
            await salvarPublicacoes(postComunidadeMock);

            return postComunidadeMock;
        }
    }

    return JSON.parse(publicacoesSalvas) as PostComunidade[];
}

export async function salvarPublicacoes(
    publicacoes: PostComunidade[]
): Promise<void> {
    await AsyncStorage.setItem(
        CHAVE_PUBLICACOES_COMUNIDADE,
        JSON.stringify(publicacoes)
    );
}

export async function resetarPublicacoes(): Promise<PostComunidade[]> {
    const publicacoesApi = await buscarPublicacoesDaApi();

    await salvarPublicacoes(publicacoesApi);

    return publicacoesApi;
}