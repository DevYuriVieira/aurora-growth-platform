import { api } from './api'; 
import { Mentoria, RespostaInscricao } from '../../@types/mentoria';

export const mentoriasService = {
  buscarTodas: async (): Promise<Mentoria[]> => {
    try {
      const response = await api.get<Mentoria[]>('/mentorias');
      return response.data;
    } catch (erro) {
        throw new Error('Não foi possível carregar a lista de mentorias. Tente novamente mais tarde.');
    }
  },

  criar: async (novaMentoria: Omit<Mentoria, 'id'>): Promise<Mentoria> => {
    try {
      const response = await api.post<Mentoria>('/mentorias', novaMentoria);
      return response.data;
    } catch (erro) {
      throw new Error('Erro ao criar nova mentoria.');
    }
  },

  atualizar: async (id: string, dadosAtualizados: Partial<Mentoria>): Promise<Mentoria> => {
    try {
      const response = await api.put<Mentoria>(`/mentorias/${id}`, dadosAtualizados);
      return response.data;
    } catch (erro) {
      throw new Error('Erro ao atualizar os detalhes da mentoria.');
    }
  },

  remover: async (id: string): Promise<void> => {
    try {
      await api.delete(`/mentorias/${id}`);
    } catch (erro) {
      throw new Error('Erro ao excluir a mentoria do sistema.');
    }
  },
  
  inscreverNoEvento: async (mentoriaId: string): Promise<RespostaInscricao> => {
    try {
      const response = await api.post('/inscritos', {
        mentoriaId: mentoriaId,
        dataInscricao: new Date().toISOString()
      });
      
      const dadosInscricao = String(Date.now());
      
      return {
        sucesso: true,
        codigoIngresso: `AURORA-${mentoriaId}-${dadosInscricao}`
      };
    } catch (erro) {
      throw new Error('Falha ao registrar inscrição no servidor.');
    }
  }
};