import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { useAuth } from '../../hooks/useAuth';
import { loginSchema, LoginFormData } from '../../schemas/loginSchema';
import { LoginScreenNavigationProp } from '../../routes/type';
import { AppInput } from '../../components/AppInput';
import { AppButton } from '../../components/AppButton';
import { styles } from './style';

export function Login() {
  const { entrar, entrarComGoogle, carregando } = useAuth();
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const { control, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  async function handleLogin(dados: LoginFormData) {
    try {
      await entrar(dados);
      Toast.show({
        type: 'success',
        text1: 'Bem-vindo de volta!',
        text2: 'Login realizado com sucesso.'
      });
    } catch (erro: unknown) {
      if (erro instanceof Error) {
        Toast.show({
          type: 'error',
          text1: 'Falha no acesso',
          text2: erro.message
        });
      } else {
        Toast.show({
          type: 'error',
          text1: 'Erro inesperado',
          text2: 'Tente novamente em instantes.'
        });
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.conteudo}>
        <Text style={styles.titulo}>Projeto Aurora</Text>
        <Text style={styles.subtitulo}>Sua jornada para um novo começo.</Text>

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <AppInput
              label="E-mail"
              placeholder="Digite seu e-mail"
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
              placeholder="Digite sua senha"
              secureTextEntry
              autoCapitalize="none"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              erro={errors.password?.message}
            />
          )}
        />

        <AppButton 
          title="Entrar" 
          carregando={carregando} 
          onPress={handleSubmit(handleLogin)} 
        />

        <TouchableOpacity 
          style={styles.botaoGoogle} 
          onPress={entrarComGoogle}
          disabled={carregando}
        >
          <Text style={styles.textoGoogle}>Entrar com o Google</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.linkCadastro}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.textoLink}>
            Não tem uma conta? <Text style={styles.textoLinkDestaque}>Cadastre-se</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}