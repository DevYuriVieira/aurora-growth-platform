export interface Mentoria {
  id: string;
  titulo: string;
  nomeMentor: string;
  descricao: string;
  data: string;
  hora: string;
  local: string;
  imagemUrl?: string;
}
export interface RespostaInscricao {
  sucesso: boolean;
  codigoIngresso: string; 
}