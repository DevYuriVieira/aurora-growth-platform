import React, { createContext, useState, useEffect, ReactNode } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { Usuario } from '../@types/user';
import * as authService from '../services/authService';
import * as asyncStorage from '../storage';
import { LoginFormData } from '../schemas/loginSchema';

SplashScreen.preventAutoHideAsync();
WebBrowser.maybeCompleteAuthSession();

interface AuthContextData {
  usuario: Usuario | null;
  carregando: boolean;
  entrar: (dados: LoginFormData) => Promise<void>;
  entrarComGoogle: () => Promise<void>;
  sair: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [carregando, setCarregando] = useState(true);

  const [request, resposta, promptAsync] = Google.useAuthRequest({
    androidClientId: process.env.EXPO_PUBLIC_ANDROID_CLIENT_ID,
    iosClientId: process.env.EXPO_PUBLIC_IOS_CLIENT_ID,
    webClientId: process.env.EXPO_PUBLIC_WEB_CLIENT_ID,
  });

  useEffect(() => {
    async function carregarSessao() {
      try {
        const { usuario: usuarioSalvo, token } = await asyncStorage.getAuthData();
        
        if (usuarioSalvo && token) {
          setUsuario(usuarioSalvo);
        }
      } catch (erro: unknown) {
        if (erro instanceof Error) {
          console.error('Erro ao restaurar sessão:', erro.message);
        }
      } finally {
        setCarregando(false);
        await SplashScreen.hideAsync(); 
      }
    }

    carregarSessao();
  }, []);

  useEffect(() => {
  if (resposta?.type === 'success') {
    const { authentication } = resposta;

    const dadosUsuarioGoogle: Usuario = {
      id: 'google-123',
      nome: 'Usuário Google',
      email: 'usuario@gmail.com',
      perfil: 'usuario', 
    };

    setUsuario(dadosUsuarioGoogle);
    asyncStorage.saveAuthData(dadosUsuarioGoogle, authentication?.accessToken || 'google-token');
  }
}, [resposta]);

  async function entrar(dados: LoginFormData) {
    setCarregando(true);
    try {
      const { usuario: usuarioLogado, token } = await authService.signIn(dados);
      await asyncStorage.saveAuthData(usuarioLogado, token);
      setUsuario(usuarioLogado);
    } finally {
      setCarregando(false);
    }
  }

  async function entrarComGoogle() {
    setCarregando(true);
    try {
      await promptAsync();
    } catch (erro: unknown) {
      setCarregando(false);
      if (erro instanceof Error) {
        console.error('Erro na autenticação do Google:', erro.message);
      }
    }
  }

  async function stylesSair() {
    try {
      await asyncStorage.removeAuthData();
      setUsuario(null);
    } catch (erro: unknown) {
      if (erro instanceof Error) {
        console.error('Erro ao deslogar:', erro.message);
      }
    }
  }

  return (
    <AuthContext.Provider 
      value={{ 
        usuario, 
        carregando, 
        entrar, 
        entrarComGoogle, 
        sair: stylesSair 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}