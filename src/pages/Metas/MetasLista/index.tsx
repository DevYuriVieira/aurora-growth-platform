import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Toast from 'react-native-toast-message';

import { ConfirmDeleteModal } from '../../../components/MetasComponentes/ConfirmDeleteModal';
import { EmptyState } from '../../../components/MetasComponentes/EmptyState';
import { MetaCard } from '../../../components/MetasComponentes/MetaCard';
import { MetasStackParamList } from '../../../routes/metasRoutesTypes';
import { deleteMeta, getMetas } from '../../../services/metasService';
import { Meta } from '../../../@types/meta';
import { styles } from './styles';

type Navigation = NativeStackNavigationProp<MetasStackParamList, 'MetasLista'>;

export function MetasLista() {
  const navigation = useNavigation<Navigation>();

  const [metas, setMetas] = useState<Meta[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [metaToDelete, setMetaToDelete] = useState<Meta | null>(null);
  const [deleting, setDeleting] = useState(false);

  const loadMetas = useCallback(async () => {
    try {
      const data = await getMetas();
      setMetas(data);
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Erro ao carregar metas',
        text2: 'Verifique sua conexão e tente novamente.',
      });
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    loadMetas();
  }, [loadMetas]);

  function handleRefresh() {
    setRefreshing(true);
    loadMetas();
  }

  function handleOpenDetails(meta: Meta) {
    navigation.navigate('MetasDetalhe', { metaId: meta.id });
  }

  function handleCreateMeta() {
    navigation.navigate('MetasFormulario', {});
  }

  function handleRequestDelete(meta: Meta) {
    setMetaToDelete(meta);
  }

  async function handleConfirmDelete() {
    if (!metaToDelete) return;

    setDeleting(true);
    try {
      await deleteMeta(metaToDelete.id);
      setMetas((prev) => prev.filter((item) => item.id !== metaToDelete.id));
      Toast.show({ type: 'success', text1: 'Meta excluída com sucesso' });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Erro ao excluir meta',
        text2: 'Tente novamente em alguns instantes.',
      });
    } finally {
      setDeleting(false);
      setMetaToDelete(null);
    }
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FF8A3D" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.addButton} onPress={handleCreateMeta}>
          <Text style={styles.addButtonText}>+ Nova meta</Text>
          </TouchableOpacity>
        </View>

      <FlatList
        data={metas}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        renderItem={({ item }) => (
          <MetaCard
            meta={item}
            onPress={handleOpenDetails}
            onDelete={handleRequestDelete}
          />
        )}
        ListEmptyComponent={
          <EmptyState
            title="Você ainda não tem metas"
            subtitle="Toque em '+ Nova meta' para começar sua jornada."
          />
        }
      />

      <ConfirmDeleteModal
        visible={!!metaToDelete}
        itemName={metaToDelete?.title ?? ''}
        loading={deleting}
        onCancel={() => setMetaToDelete(null)}
        onConfirm={handleConfirmDelete}
      />
    </View>
  );
}