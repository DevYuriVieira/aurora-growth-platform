import * as SecureStore from 'expo-secure-store';
import { Usuario } from '../@types/user';

const USER_KEY = 'aurora.user';
const TOKEN_KEY = 'aurora.token';

export async function saveAuthData(usuario: Usuario, token: string) {
  try {
    await SecureStore.setItemAsync(USER_KEY, JSON.stringify(usuario));
    await SecureStore.setItemAsync(TOKEN_KEY, token);
  } catch (error) {
    console.error('Erro ao salvar dados de autenticação local:', error);
  }
}

export async function getAuthData() {
  try {
    const userString = await SecureStore.getItemAsync(USER_KEY);
    const token = await SecureStore.getItemAsync(TOKEN_KEY);

    const usuario: Usuario | null = userString ? JSON.parse(userString) : null;
    return { usuario, token };
  } catch (error) {
    console.error('Erro ao buscar dados de autenticação local:', error);
    return { usuario: null, token: null };
  }
}

export async function removeAuthData() {
  try {
    await SecureStore.deleteItemAsync(USER_KEY);
    await SecureStore.deleteItemAsync(TOKEN_KEY);
  } catch (error) {
    console.error('Erro ao remover dados de autenticação local:', error);
  }
}