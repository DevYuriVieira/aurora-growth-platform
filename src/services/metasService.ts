import { api } from './api';
import { CreateMetaInput, Meta, UpdateMetaInput } from '../@types/meta';

export async function getMetas(userId: string): Promise<Meta[]> {
  const response = await api.get<Meta[]>('/metas', {
    params: { userId },
  });
  return response.data;
}

export async function getMetaById(id: string): Promise<Meta> {
  const response = await api.get<Meta>(`/metas/${id}`);
  return response.data;
}

export async function createMeta(meta: CreateMetaInput): Promise<Meta> {
  const payload = {
    ...meta,
    progress: 0,
    status: 'pending' as const,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  const response = await api.post<Meta>('/metas', payload);
  return response.data;
}

export async function updateMeta(
  id: string,
  meta: UpdateMetaInput,
): Promise<Meta> {
  const payload = {
    ...meta,
    updatedAt: new Date().toISOString(),
  };

  const response = await api.put<Meta>(`/metas/${id}`, payload);
  return response.data;
}

export async function deleteMeta(id: string): Promise<void> {
  await api.delete(`/metas/${id}`);
}

export async function updateMetaProgress(
  id: string,
  progress: number,
): Promise<Meta> {
  const status =
    progress === 100 ? 'done' : progress > 0 ? 'in_progress' : 'pending';

  return updateMeta(id, { progress, status });
}

export async function toggleMetaStep(
  meta: Meta,
  stepId: string,
): Promise<Meta> {
  const updatedSteps = meta.steps.map((step) =>
    step.id === stepId ? { ...step, done: !step.done } : step,
  );

  const doneCount = updatedSteps.filter((step) => step.done).length;
  const progress =
    updatedSteps.length === 0
      ? 0
      : Math.round((doneCount / updatedSteps.length) * 100);

  const status =
    progress === 100 ? 'done' : progress > 0 ? 'in_progress' : 'pending';

  return updateMeta(meta.id, { steps: updatedSteps, progress, status });

  
}