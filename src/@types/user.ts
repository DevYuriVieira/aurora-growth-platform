export interface Usuario {
  id: string;
  nome: string;
  email: string;
  avatar?: string;
  perfil: 'usuario' | 'admin'; 
}