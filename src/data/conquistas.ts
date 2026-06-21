import { ImageSourcePropType } from 'react-native';

export interface Conquista {
    id: string;
    titulo: string;
    subtitulo: string;
    desbloqueada: boolean;
    imagem: ImageSourcePropType;
}

export const gerarConquistas = (qtdMetas: number, nivelUsuario: number) : Conquista [] => {
    return[
        { 
            id: '1', 
            titulo: 'Pioneiro', 
            subtitulo: 'Criou a primeira meta', 
            desbloqueada: qtdMetas > 0, 
            imagem: require('../assets/med1.png') 
        },
        { 
            id: '2', 
            titulo: 'Foco Total', 
            subtitulo: 'Atingiu o Nível 2', 
            desbloqueada: nivelUsuario >= 2, 
            imagem: require('../assets/med2.png') 
        },
        { 
            id: '3', 
            titulo: 'Primeiros Raios', 
            subtitulo: 'Atingiu o Nível 3', 
            desbloqueada: nivelUsuario >= 3, 
            imagem: require('../assets/med3.png') 
        },
        { 
            id: '4', 
            titulo: 'Constância', 
            subtitulo: 'Atingiu o Nível 4', 
            desbloqueada: nivelUsuario >= 4, 
            imagem: require('../assets/med4.png') 
        },
        { 
            id: '5', 
            titulo: 'Inabalável', 
            subtitulo: 'Atingiu o Nível 5', 
            desbloqueada: nivelUsuario >= 5, 
            imagem: require('../assets/med5.png') 
        },
        { 
            id: '6', 
            titulo: 'Determinação', 
            subtitulo: 'Atingiu o Nível 6', 
            desbloqueada: nivelUsuario >= 6, 
            imagem: require('../assets/med6.png') 
        },
        { 
            id: '7', 
            titulo: 'Mestre da Rotina', 
            subtitulo: 'Atingiu o Nível 7', 
            desbloqueada: nivelUsuario >= 7, 
            imagem: require('../assets/med7.png') 
        },
        { 
            id: '8', 
            titulo: 'Alta Performance', 
            subtitulo: 'Atingiu o Nível 8', 
            desbloqueada: nivelUsuario >= 8, 
            imagem: require('../assets/med8.png') 
        },
        { 
            id: '9', 
            titulo: 'Evolução Máxima', 
            subtitulo: 'Atingiu o Nível 9', 
            desbloqueada: nivelUsuario >= 9, 
            imagem: require('../assets/med9.png') 
        },
        { 
            id: '10', 
            titulo: 'Lenda do Aurora', 
            subtitulo: 'Atingiu o nível máximo 10', 
            desbloqueada: nivelUsuario >= 10, 
            imagem: require('../assets/med10.png') 
        }
    ]
}