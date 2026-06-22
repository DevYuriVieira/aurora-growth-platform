export interface LevelData {
  nivel: number;
  xpAtualNaBarra: number;
  xpParaUpar: number;
  porcentagemBarra: number;
  isMaxLevel: boolean;
}

export const xpPorLevel: number[] = [
    0, 100, 250, 450, 700, 1000, 1400, 1900, 2500, 3200
]

export function calcularLevel (xpTotalUsuario: number): LevelData {
    const nivelMaximo = 10;
    let nivelAtual = 1;

    for (let i = 0; i < xpPorLevel.length; i++) {
    if (xpTotalUsuario >= xpPorLevel[i]) {
      nivelAtual = i + 1;
    } else {
      break;
    }
    }

  if (nivelAtual >= nivelMaximo) {
    return {
      nivel: nivelMaximo,
      xpAtualNaBarra: xpTotalUsuario - xpPorLevel[nivelMaximo - 1],
      xpParaUpar: 0,
      porcentagemBarra: 100, 
      isMaxLevel: true
    };
  }

  const xpBaseDoNivel = xpPorLevel[nivelAtual - 1];
  const xpMetaDoNivel = xpPorLevel[nivelAtual];
  
  const xpAtualNaBarra = xpTotalUsuario - xpBaseDoNivel;
  const tamanhoTotalDaBarra = xpMetaDoNivel - xpBaseDoNivel;
  const porcentagemBarra = (xpAtualNaBarra / tamanhoTotalDaBarra) * 100;

  return { 
    nivel: nivelAtual, 
    xpAtualNaBarra, 
    xpParaUpar: tamanhoTotalDaBarra, 
    porcentagemBarra, 
    isMaxLevel: false 
  };
}