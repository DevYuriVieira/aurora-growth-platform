import { Usuario } from '../@types/user';
import { LoginFormData } from '../schemas/loginSchema';
import { RegisterFormData } from '../schemas/registerSchema';

export async function signIn(dados: LoginFormData): Promise<{ usuario: Usuario; token: string }> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (dados.email === 'teste@aurora.com' && dados.password === '123456') {
        resolve({
          usuario: { id: '1', nome: 'Yuri Vieira', email: dados.email, perfil: 'usuario' },
          token: 'token-jwt-usuario-comum',
        });
      } 
      // Login de Administrador
      else if (dados.email === 'admin@aurora.com' && dados.password === 'admin123') {
        resolve({
          usuario: { id: '99', nome: 'Admin Aurora', email: dados.email, perfil: 'admin' },
          token: 'token-jwt-seguro-admin',
        });
      } 
      else {
        reject(new Error('Credenciais inválidas. Use teste@aurora.com (123456) ou admin@aurora.com (admin123).'));
      }
    }, 1200);
  });
}

export async function signUp(dados: RegisterFormData): Promise<{ usuario: Usuario; token: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        usuario: { id: '2', nome: dados.name, email: dados.email, perfil: 'usuario' },
        token: 'token-jwt-novo-usuario',
      });
    }, 1200);
  });
}