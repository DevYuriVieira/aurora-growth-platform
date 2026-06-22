import React, { useState } from 'react';
import { Text, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import { registerSchema, RegisterFormData } from '../../schemas/registerSchema';
import { RegisterScreenNavigationProp } from '../../routes/type';
import * as authService from '../../services/authService';
import { AppInput } from '../../components/AppInput';
import { AppButton } from '../../components/AppButton';
import { styles } from './style';

export function Register() {
  const navigation = useNavigation<RegisterScreenNavigationProp>();
  const [carregandoLocal, setCarregandoLocal] = useState(false);

  const { control, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  async function handleCadastro(dados: RegisterFormData) {
    setCarregandoLocal(true);
    try {
      await authService.signUp(dados);
      
      Toast.show({
        type: 'success',
        text1: 'Conta criada!',
        text2: 'Agora você já pode fazer login na plataforma.'
      });
      
      navigation.navigate('Login');
    } catch (erro: unknown) {
      if (erro instanceof Error) {
        Toast.show({
          type: 'error',
          text1: 'Erro ao cadastrar',
          text2: erro.message
        });
      } else {
        Toast.show({
          type: 'error',
          text1: 'Falha no servidor',
          text2: 'Não foi possível finalizar o cadastro.'
        });
      }
    } finally {
      setCarregandoLocal(false);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.evitarTeclado}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollConteudo}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.titulo}>Criar Conta</Text>
          <Text style={styles.subtitulo}>Comece sua evolução no Projeto Aurora</Text>

          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, onBlur, value } }) => (
              <AppInput
                label="Nome Completo"
                placeholder="Ex: Yuri Vieira"
                autoCapitalize="words"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                erro={errors.name?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <AppInput
                label="E-mail"
                placeholder="Digite seu melhor e-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                erro={errors.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <AppInput
                label="Senha"
                placeholder="No mínimo 6 caracteres"
                secureTextEntry
                autoCapitalize="none"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                erro={errors.password?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="confirmPassword"
            render={({ field: { onChange, onBlur, value } }) => (
              <AppInput
                label="Confirmar Senha"
                placeholder="Repita a senha digitada"
                secureTextEntry
                autoCapitalize="none"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                erro={errors.confirmPassword?.message}
              />
            )}
          />

          <AppButton 
            title="Cadastrar" 
            carregando={carregandoLocal} 
            onPress={handleSubmit(handleCadastro)} 
          />

          <TouchableOpacity 
            style={styles.linkLogin}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.textoLink}>
              Já tem uma conta? <Text style={styles.textoLinkDestaque}>Faça login</Text>
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}