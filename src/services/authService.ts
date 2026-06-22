import { Usuario } from '../@types/user';
import { LoginFormData } from '../schemas/loginSchema';
import { RegisterFormData } from '../schemas/registerSchema';

const API_URL = 'https://6a38a16064a2d82692229b3c.mockapi.io';

interface APISourceUser {
  id: string;
  name: string;
  email: string;
  password?: string;
  perfil: string;
}

export async function signIn(dados: LoginFormData): Promise<{ usuario: Usuario; token: string }> {
  try {
    const resposta = await fetch(`${API_URL}/users?email=${encodeURIComponent(dados.email)}`);

    if (!resposta.ok) {
      throw new Error('Erro ao conectar com o servidor.');
    }

    const usuarios: APISourceUser[] = await resposta.json();

    if (usuarios.length === 0) {
      throw new Error('E-mail ou senha inválidos.');
    }

    const user = usuarios[0];

    if (user.password !== dados.password) {
      throw new Error('E-mail ou senha inválidos.');
    }

    return {
      usuario: {
        id: user.id,
        nome: user.name,
        email: user.email,
        perfil: user.perfil as 'usuario' | 'admin',
      },
      token: `token-jwt-fake-${user.perfil}`,
    };
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Erro interno no login.');
  }
}

export async function signUp(dados: RegisterFormData): Promise<{ usuario: Usuario; token: string }> {
  try {
    const checarEmail = await fetch(`${API_URL}/users?email=${encodeURIComponent(dados.email)}`);
    const emailExistente: APISourceUser[] = await checarEmail.json();

    const emailJaCadastrado = Array.isArray(emailExistente) && emailExistente.some(
      (u: APISourceUser) => u.email.toLowerCase() === dados.email.toLowerCase()
    );

    if (emailJaCadastrado) {
      throw new Error('Este e-mail já está cadastrado.');
    }

    const resposta = await fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: dados.name,
        email: dados.email,
        password: dados.password,
        perfil: 'usuario',
      }),
    });

    if (!resposta.ok) {
      throw new Error('Não foi possível salvar os dados no servidor.');
    }

    const novoUser: APISourceUser = await resposta.json();

    return {
      usuario: {
        id: novoUser.id,
        nome: novoUser.name,
        email: novoUser.email,
        perfil: novoUser.perfil as 'usuario' | 'admin',
      },
      token: 'token-jwt-fake-novo',
    };
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Erro ao processar o cadastro.');
  }
}