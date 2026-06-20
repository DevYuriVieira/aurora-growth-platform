import { PostComunidade } from '../../@types/community';

export interface DetalhesPublicacaoProps {
    publicacao: PostComunidade;
    aoVoltar: () => void;
}