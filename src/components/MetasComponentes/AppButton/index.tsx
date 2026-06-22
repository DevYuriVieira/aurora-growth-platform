import React from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { theme } from '../../../styles/theme';
import { styles } from './styles';

export type AppButtonVariant = 'primary' | 'secondary' | 'danger';

export interface AppButtonProps extends TouchableOpacityProps {
  label: string;
  variant?: AppButtonVariant;
  loading?: boolean;
}

const VARIANT_STYLES: Record<AppButtonVariant, { background: string; text: string }> = {
  primary: { background: theme.colors.primary, text: theme.colors.onPrimary },
  secondary: { background: theme.colors.surfaceContainerHigh, text: theme.colors.onPrimary },
  danger: { background: theme.colors.error, text: theme.colors.onPrimary },
};

export function AppButton({
  label,
  variant = 'primary',
  loading = false,
  disabled,
  style,
  ...rest
}: AppButtonProps) {
  const variantStyle = VARIANT_STYLES[variant];
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: variantStyle.background },
        isDisabled && styles.disabled,
        style,
      ]}
      disabled={isDisabled}
      activeOpacity={0.8}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color={variantStyle.text} />
      ) : (
        <Text style={[styles.label, { color: variantStyle.text }]}>{label}</Text>
      )}
    </TouchableOpacity>
  );
}