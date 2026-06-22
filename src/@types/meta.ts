export type AreaType =
  | 'educacao'
  | 'trabalho'
  | 'saude'
  | 'financas'
  | 'profissao';

export type MetaStatus = 'pending' | 'in_progress' | 'done';

export interface MetaStep {
  id: string;
  title: string;
  done: boolean;
}

export interface Meta {
  id: string;
  userId: string;
  title: string;
  description: string;
  area: AreaType;
  progress: number;
  status: MetaStatus;
  steps: MetaStep[];
  createdAt: string;
  updatedAt: string;
}

export type CreateMetaInput = Omit<Meta, 'id' | 'createdAt' | 'updatedAt' | 'progress' | 'status'>;

export type UpdateMetaInput = Partial<Omit<Meta, 'id' | 'userId'>>;

export const AREA_LABELS: Record<AreaType, string> = {
  educacao: 'Educação',
  trabalho: 'Trabalho',
  saude: 'Saúde',
  financas: 'Finanças',
  profissao: 'Orientação Profissional',
};

import { Ionicons } from '@expo/vector-icons';

export const AREA_ICONS: Record<AreaType, keyof typeof Ionicons.glyphMap> = {
  educacao: 'school',
  trabalho: 'briefcase',
  saude: 'barbell',
  financas: 'cash',
  profissao: 'compass',
};

export const STATUS_LABELS: Record<MetaStatus, string> = {
  pending: 'Pendente',
  in_progress: 'Em andamento',
  done: 'Concluída',
};