# Módulo Comunidade — Mural dos Recomeços

## Responsável
Arthur Carvalho

## Objetivo
O módulo Comunidade representa o Mural dos Recomeços do Projeto Aurora. Ele permite que usuários compartilhem histórias, dúvidas, dicas e conquistas relacionadas à própria jornada de desenvolvimento.

## Funcionalidades implementadas
- Listagem de publicações em FlatList
- Loading state
- Empty state
- Pull to Refresh
- Filtro por área
- Criação de publicação
- Edição de publicação
- Exclusão de publicação
- Modal nativo para criação e edição
- Validação com Zod
- Feedback com Toast
- Erro de formulário exibido dentro do modal
- Persistência local com AsyncStorage
- Carregamento inicial de dados via MockAPI
- Tela de detalhes da publicação
- Navegação Stack para detalhes
- Integração na Tab Comunidade
- Painel Admin da Comunidade
- Rota privada para administrador

## API utilizada
MockAPI:

https://6a39691864a2d8269223eb0f.mockapi.io/aurora/feed/publicacoes

## Principais arquivos
- src/pages/Comunidade
- src/pages/DetalhesPublicacao
- src/pages/AdminComunidade
- src/components/CardPublicacao
- src/components/FiltroComunidade
- src/components/EtiquetaArea
- src/components/RotaPrivadaAdmin
- src/services/comunidadeApiService.ts
- src/services/comunidadeStorageService.ts
- src/schemas/publicacaoComunidadeSchema.ts
- src/@types/community.ts

## Requisitos atendidos
- TypeScript
- Interfaces e types próprios
- CRUD
- Componentes reutilizáveis
- FlatList com dados vindos de API
- Loading state
- Empty state
- Pull to Refresh
- Modal nativo
- Alert para confirmação de exclusão
- Toast para feedback
- Zod
- AsyncStorage
- Serviço de API separado
- Stack + Tabs
- Rota privada Admin