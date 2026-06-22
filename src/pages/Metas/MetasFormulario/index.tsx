import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, ScrollView, View, Text } from 'react-native';
import Toast from 'react-native-toast-message';

import { AppButton } from '../../../components/MetasComponentes/AppButton';
import { AppInput } from '../../../components/MetasComponentes/AppInput';
import { AreaSelectField } from '../../../components/MetasComponentes/AreaSelectField';
import { MetasStackParamList } from '../../../routes/metasRoutesTypes';
import { metaSchema } from '../../../schemas/metaSchema';
import {
  createMeta,
  getMetaById,
  updateMeta,
} from '../../../services/metasService';
import { AreaType } from '../../../@types/meta';
import { styles } from './styles';

type Navigation = NativeStackNavigationProp<MetasStackParamList, 'MetasFormulario'>;
type Route = RouteProp<MetasStackParamList, 'MetasFormulario'>;

interface FormErrors {
  title?: string;
  description?: string;
  area?: string;
}

export function MetasFormulario() {
  const navigation = useNavigation<Navigation>();
  const route = useRoute<Route>();
  const metaId = route.params?.metaId;
  const isEditing = !!metaId;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [area, setArea] = useState<AreaType | undefined>(undefined);
  const [errors, setErrors] = useState<FormErrors>({});

  const [loadingMeta, setLoadingMeta] = useState(isEditing);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function loadMeta() {
      if (!metaId) return;

      try {
        const meta = await getMetaById(metaId);
        setTitle(meta.title);
        setDescription(meta.description);
        setArea(meta.area);
      } catch (error) {
        Toast.show({
          type: 'error',
          text1: 'Erro ao carregar a meta',
          text2: 'Tente novamente em alguns instantes.',
        });
        navigation.goBack();
      } finally {
        setLoadingMeta(false);
      }
    }

    loadMeta();
  }, [metaId, navigation]);

  function validate(): boolean {
  const result = metaSchema.safeParse({ title, description, area });

  if (result.success) {
    setErrors({});
    return true;
  }

  const fieldErrors: FormErrors = {};
  const flattened = result.error.flatten().fieldErrors as Record<string, string[] | undefined>;

  if (flattened.title?.[0]) fieldErrors.title = flattened.title[0];
  if (flattened.description?.[0])
    fieldErrors.description = flattened.description[0];
  if (flattened.area?.[0]) fieldErrors.area = flattened.area[0];

  setErrors(fieldErrors);
  return false;
}

  async function handleSave() {
    if (!validate() || !area) return;

    setSaving(true);
    try {
      if (isEditing && metaId) {
        await updateMeta(metaId, { title, description, area });
        Toast.show({ type: 'success', text1: 'Meta atualizada com sucesso' });
      } else {
        await createMeta({
          userId: 'current-user', 
          title,
          description,
          area,
          steps: [],
        });
        Toast.show({ type: 'success', text1: 'Meta criada com sucesso' });
      }

      navigation.goBack();
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Erro ao salvar a meta',
        text2: 'Verifique os dados e tente novamente.',
      });
    } finally {
      setSaving(false);
    }
  }

  function handleCancel() {
    Alert.alert(
      'Descartar alterações?',
      'Você perderá os dados preenchidos neste formulário.',
      [
        { text: 'Continuar editando', style: 'cancel' },
        {
          text: 'Descartar',
          style: 'destructive',
          onPress: () => navigation.goBack(),
        },
      ],
    );
  }

  if (loadingMeta) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FF8A3D" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
       <Text style={styles.pageTitle}>
          {isEditing ? 'Editar meta' : 'Nova meta'}
       </Text>

      <AppInput
        label="Título da meta"
        placeholder="Ex: Conseguir meu primeiro emprego"
        value={title}
        onChangeText={setTitle}
        error={errors.title}
      />

      <AppInput
        label="Descrição"
        placeholder="Descreva o que você quer alcançar"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
        style={styles.textArea}
        error={errors.description}
      />

      <AreaSelectField
        label="Área"
        value={area}
        onChange={setArea}
        error={errors.area}
      />

      <AppButton
        label={isEditing ? 'Salvar alterações' : 'Criar meta'}
        onPress={handleSave}
        loading={saving}
        style={styles.saveButton}
      />

      <AppButton
        label="Cancelar"
        variant="secondary"
        onPress={handleCancel}
        disabled={saving}
      />
    </ScrollView>
  );
}