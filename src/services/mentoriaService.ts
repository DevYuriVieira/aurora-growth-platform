import { api } from './api'; 
import { Mentoria, RespostaInscricao } from '../@types/mentoria';

export const mentoriasService = {
  buscarTodas: async (): Promise<Mentoria[]> => {
    try {
      const response = await api.get<Mentoria[]>('/mentorias');
      return response.data;
    } catch (erro) {
        throw new Error('Não foi possível carregar a lista de mentorias. Tente novamente mais tarde.');
    }
  },
  
  inscreverNoEvento: async (mentoriaId: string): Promise<RespostaInscricao> => {
    try {
      const response = await api.post<RespostaInscricao>(`/mentorias/${mentoriaId}/inscrever`);
      return response.data;
    } catch (erro) {
      throw new Error('Falha ao realizar inscrição no evento. Verifique sua conexão.');
    }
  }
};