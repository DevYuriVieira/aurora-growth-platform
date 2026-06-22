import React from 'react';
import { Modal, Text, View } from 'react-native';
import { AppButton } from '../AppButton';
import { styles } from './styles';

export interface ConfirmDeleteModalProps {
  visible: boolean;
  itemName: string;
  loading?: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export function ConfirmDeleteModal({
  visible,
  itemName,
  loading = false,
  onCancel,
  onConfirm,
}: ConfirmDeleteModalProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onCancel}
    >
      <View style={styles.overlay}>
        <View style={styles.card}>
          <Text style={styles.title}>Excluir meta</Text>
          <Text style={styles.message}>
            Tem certeza que deseja excluir "{itemName}"? Essa ação não pode
            ser desfeita.
          </Text>

          <View style={styles.actions}>
            <AppButton
              label="Cancelar"
              variant="secondary"
              style={styles.actionButton}
              onPress={onCancel}
              disabled={loading}
            />
            <AppButton
              label="Excluir"
              variant="danger"
              style={styles.actionButton}
              onPress={onConfirm}
              loading={loading}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}