import { PostComunidade, TiposPostComunidade } from '../../@types/community';

export interface CardPublicacaoProps {
    publicacao: PostComunidade;
    aoPressionar?: (publicacao: PostComunidade) => void;
    aoEditar?: (publicacao: PostComunidade) => void;
}