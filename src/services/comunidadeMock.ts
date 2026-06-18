import { PostComunidade } from "../@types/community";

// dados mockados para teste
export const postComunidadeMock: PostComunidade[] = [
    {
        id: '1',
        usuario: 'Lucas Ferreira',
        nivelUsuario: 5,
        titulo: 'Consegui meu primeiro estágio',
        conteudo:
            'Depois de meses estudando e melhorando meu currículo, consegui minha primeira oportunidade como estagiário. O que mais me ajudou foi criar projetos simples e compartilhar minha evolução.',
        areaPost: 'trabalho',
        tipoPost: 'conquista',
        xpRecompensa: 80,
        dataCriacao: '2026-06-18',
    },
    {
        id: '2',
        usuario: 'Mariana Souza',
        nivelUsuario: 10,
        titulo: 'Como comecei a estudar programação',
        conteudo:
            'Eu não sabia por onde começar. Então decidi estudar lógica, depois HTML, CSS e JavaScript. O mais importante foi criar uma rotina pequena, mas constante.',
        areaPost: 'tecnologia',
        tipoPost: 'historia',
        xpRecompensa: 60,
        dataCriacao: '2026-06-18',
    },
    {
        id: '3',
        usuario: 'Rafael Lima',
        nivelUsuario: 3,
        titulo: 'Alguém sabe como montar um currículo?',
        conteudo:
            'Estou procurando meu primeiro emprego e ainda não sei o que colocar no currículo. Quais informações são essenciais?',
        areaPost: 'carreira',
        tipoPost: 'duvida',
        xpRecompensa: 30,
        dataCriacao: '2026-06-18',
    },
    {
        id: '4',
        usuario: 'Ana Clara',
        nivelUsuario: 8,
        titulo: 'Passei no vestibular depois de duas tentativas',
        conteudo:
            'Quase desisti, mas continuei estudando com metas pequenas. Hoje consegui minha aprovação e queria deixar essa mensagem para quem está cansado: continue.',
        areaPost: 'educacao',
        tipoPost: 'conquista',
        xpRecompensa: 100,
        dataCriacao: '2026-06-18',
    },
]