import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';

import { AppButton } from '../../../components/MetasComponentes/AppButton';
import { ConfirmDeleteModal } from '../../../components/MetasComponentes/ConfirmDeleteModal';
import { StepItem } from '../../../components/MetasComponentes/StepItem';
import { MetasStackParamList } from '../../../routes/metasRoutesTypes';
import {
  deleteMeta,
  getMetaById,
  toggleMetaStep,
} from '../../../services/metasService';
import { Meta, STATUS_LABELS } from '../../../@types/meta';
import { styles } from './styles';
import { ProgressSlider } from '../../../components/MetasComponentes/ProgressSlider';
import { updateMetaProgress } from '../../../services/metasService';
import { useProgress } from '../../../contexts/ProgressContext';
import { AreaBadge } from '../../../components/MetasComponentes/AreaBadge';

type Navigation = NativeStackNavigationProp<MetasStackParamList, 'MetasDetalhe'>;
type Route = RouteProp<MetasStackParamList, 'MetasDetalhe'>;

export function MetasDetalhe() {
  const navigation = useNavigation<Navigation>();
  const route = useRoute<Route>();
  const { metaId } = route.params;

  const [meta, setMeta] = useState<Meta | null>(null);
  const [loading, setLoading] = useState(true);
  const [togglingStepId, setTogglingStepId] = useState<string | null>(null);
  const [confirmDeleteVisible, setConfirmDeleteVisible] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const loadMeta = useCallback(async () => {
    try {
      const data = await getMetaById(metaId);
      setMeta(data);
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Erro ao carregar a meta',
        text2: 'Tente novamente em alguns instantes.',
      });
      navigation.goBack();
    } finally {
      setLoading(false);
    }
  }, [metaId, navigation]);

  useEffect(() => {
    loadMeta();
  }, [loadMeta]);

  async function handleToggleStep(stepId: string) {
    if (!meta) return;

    setTogglingStepId(stepId);
    try {
      const updated = await toggleMetaStep(meta, stepId);
      setMeta(updated);
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Erro ao atualizar etapa',
        text2: 'Tente novamente.',
      });
    } finally {
      setTogglingStepId(null);
    }
  }

  async function handleConfirmDelete() {
    if (!meta) return;

    setDeleting(true);
    try {
      await deleteMeta(meta.id);
      Toast.show({ type: 'success', text1: 'Meta excluída com sucesso' });
      navigation.goBack();
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Erro ao excluir meta',
        text2: 'Tente novamente em alguns instantes.',
      });
    } finally {
      setDeleting(false);
      setConfirmDeleteVisible(false);
    }
  }

  const { addXp } = useProgress();

  async function handleChangeProgress(newProgress: number) {
    if (!meta) return;

    const progressIncrease = newProgress - meta.progress;

    try {
      const updated = await updateMetaProgress(meta.id, newProgress);
      setMeta(updated);

        if (progressIncrease > 0) {
          addXp(progressIncrease);
        }

      Toast.show({ type: 'success', text1: 'Progresso atualizado' });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Erro ao atualizar progresso',
        text2: 'Tente novamente.',
      });
     }
    }

  function handleEdit() {
    if (!meta) return;
    navigation.navigate('MetasFormulario', { metaId: meta.id });
  }

  if (loading || !meta) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FF8A3D" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <AreaBadge area={meta.area} />

      <Text style={styles.title}>{meta.title}</Text>
      <Text style={styles.description}>{meta.description}</Text>

      <View style={styles.progressSection}>
        <ProgressSlider
          value={meta.progress}
          onChangeComplete={handleChangeProgress}
        />
        <Text style={styles.statusText}>{STATUS_LABELS[meta.status]}</Text>
      </View>

      <View style={styles.stepsSection}>
        <Text style={styles.stepsTitle}>Etapas</Text>

        {meta.steps.length === 0 && (
          <Text style={styles.noSteps}>
            Essa meta ainda não tem etapas cadastradas.
          </Text>
        )}

        {meta.steps.map((step) => (
          <View key={step.id}>
            {togglingStepId === step.id ? (
              <ActivityIndicator size="small" color="#FF8A3D" />
            ) : (
              <StepItem step={step} onToggle={handleToggleStep} />
            )}
          </View>
        ))}
      </View>

      <AppButton
        label="Editar meta"
        onPress={handleEdit}
        style={styles.actionButton}
      />
      <AppButton
        label="Excluir meta"
        variant="danger"
        onPress={() => setConfirmDeleteVisible(true)}
      />

      <ConfirmDeleteModal
        visible={confirmDeleteVisible}
        itemName={meta.title}
        loading={deleting}
        onCancel={() => setConfirmDeleteVisible(false)}
        onConfirm={handleConfirmDelete}
      />
    </ScrollView>
  );
}