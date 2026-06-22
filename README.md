# Projeto Aurora

<div align="center">

![Expo](https://img.shields.io/badge/Expo-54-000020?style=for-the-badge&logo=expo&logoColor=white)
![React Native](https://img.shields.io/badge/React_Native-0.81.5-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React Navigation](https://img.shields.io/badge/React_Navigation-7.x-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![Mobile App](https://img.shields.io/badge/Mobile-App-1F4D3A?style=for-the-badge)

Aplicativo mobile para evolucao pessoal, profissional e comunitaria.

Mobile app for personal, professional, and community growth.

Slogan: Sua jornada para um novo comeco.

</div>

---

## Table of Contents

- [Overview](#overview)
- [Core Features](#core-features)
- [Technologies Used](#technologies-used)
- [Data Structure](#data-structure)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Notes](#notes)
- [Versao em Portugues](#versao-em-portugues)

---

## Overview

O Projeto Aurora e um aplicativo mobile feito com Expo e React Native para apoiar metas, mentorias, comunidade, progresso e organizacao pessoal.

The Aurora Project is a mobile app built with Expo and React Native to support goals, mentorships, community, progress, and personal organization.

O app combina autenticação, dashboard, metas, comunidade e mentorias em uma experiencia unica, com foco em evolucao continua e acompanhamento da jornada do usuario.

The app combines authentication, dashboard, goals, community, and mentorships into one experience, focused on continuous growth and user journey tracking.

The project includes:

- Login and registration flow with session persistence
- Home dashboard with XP, level, achievements, and personalized greeting
- Goals CRUD with progress tracking
- Community feed with local fallback and API integration
- Mentorships and events with details and QR Code confirmation
- Profile screen with camera, gallery, and secure storage
- Drawer, tabs, and stack navigation
- Admin and utility screens already structured in the app

---

## Core Features

### Authentication & Session

- Login and registration
- Form validation with Zod
- Session persisted through AsyncStorage
- Protected routes driven by AuthContext

### Home Dashboard

- Personalized greeting by time of day
- XP and level tracking
- Achievement cards
- Goal highlights and progress feedback

### Goals Module

- Create, list, edit, and delete goals
- Dedicated forms for goal details
- Progress-oriented UI

### Community Feed

- Publications feed
- Local storage fallback
- API-driven content when available

### Mentorships & Events

- List of mentorships and events
- Event details screen
- Registration flow
- QR Code confirmation

### Profile & Device Features

- Profile photo handling
- Camera and gallery integration
- Secure local storage

---

## Technologies Used

- Expo SDK 54
- React Native
- React
- TypeScript
- React Navigation
- React Hook Form
- Zod
- Axios
- AsyncStorage
- Expo Secure Store
- Expo Image Picker
- Expo Location
- React Native Toast Message

---

## Data Structure

The app uses a mix of mocked and remote data sources.

Main data sources include:

- `db.json` for local mentorship and enrollment data
- MockAPI for authentication
- External API for community publications
- Dedicated API for mentorships and goals

The core app state is centered around:

- `usuario`
- `carregando`
- `metas`
- `progresso`
- `publicacoes`
- `mentorias`

---

## Folder Structure

```text
src/
├── @types/
├── components/
├── contexts/
├── data/
├── hooks/
├── pages/
├── routes/
├── schemas/
├── services/
├── storage/
├── styles/
└── utils/
```

Main files:

- `App.tsx`
- `src/contexts/AuthContext.tsx`
- `src/routes/index.tsx`
- `src/routes/auth.routes.tsx`
- `src/routes/app.routes.tsx`
- `src/pages/Login/index.tsx`
- `src/pages/Home/index.tsx`
- `src/pages/Profile/index.tsx`
- `db.json`

---

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run the Project

```bash
npx expo start --tunnel
```

You can also use:

```bash
npm start
```

### Environment Variables

If you want to keep Google login configured, create a `.env` file in the project root:

```env
EXPO_PUBLIC_ANDROID_CLIENT_ID=your_android_client_id
EXPO_PUBLIC_IOS_CLIENT_ID=your_ios_client_id
EXPO_PUBLIC_WEB_CLIENT_ID=your_web_client_id
```

---

## Notes

- The app is built for mobile-first usage with Expo.
- `db.json` is part of the local development flow.
- The project uses a mix of mocked APIs and stored local data.
- If Expo complains about `@react-native-community/slider`, run `npm install` again so `node_modules` is restored correctly.

---

# Versao em Portugues

## Indice

- [Visao Geral](#visao-geral)
- [Funcionalidades Principais](#funcionalidades-principais)
- [Tecnologias Usadas](#tecnologias-usadas-1)
- [Estrutura dos Dados](#estrutura-dos-dados)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Como Executar](#como-executar)
- [Observacoes](#observacoes)

---

## Visao Geral

O Projeto Aurora e um aplicativo mobile feito com Expo e React Native para apoiar metas, mentorias, comunidade, progresso e organizacao pessoal.

O app combina autenticacao, dashboard, metas, comunidade e mentorias em uma experiencia unica, com foco em evolucao continua e acompanhamento da jornada do usuario.

O projeto inclui:

- Fluxo de login e cadastro com sessao persistente
- Dashboard inicial com XP, nivel, conquistas e saudacao personalizada
- Modulo de metas com CRUD e progresso
- Feed da comunidade com fallback local e integracao com API
- Mentorias e eventos com tela de detalhes e QR Code de confirmacao
- Perfil com camera, galeria e armazenamento seguro
- Navegacao com Drawer, Tabs e Stack
- Telas administrativas e utilitarias ja estruturadas no app

---

## Funcionalidades Principais

### Autenticacao e Sessao

- Login e cadastro
- Validacao de formularios com Zod
- Sessao persistida no AsyncStorage
- Rotas protegidas via AuthContext

### Dashboard Inicial

- Saudacao personalizada por horario
- Controle de XP e nivel
- Cards de conquistas
- Destaque para metas e progresso

### Modulo de Metas

- Criar, listar, editar e excluir metas
- Formularios dedicados
- Interface focada em progresso

### Feed da Comunidade

- Lista de publicacoes
- Fallback local quando necessario
- Integracao com API externa

### Mentorias e Eventos

- Listagem de mentorias e eventos
- Tela de detalhes
- Fluxo de inscricao
- Confirmacao por QR Code

### Perfil e Recursos do Dispositivo

- Foto de perfil
- Camera e galeria
- Armazenamento local seguro

---

## Tecnologias Usadas

- Expo SDK 54
- React Native
- React
- TypeScript
- React Navigation
- React Hook Form
- Zod
- Axios
- AsyncStorage
- Expo Secure Store
- Expo Image Picker
- Expo Location
- React Native Toast Message

---

## Estrutura dos Dados

O app usa uma mistura de dados locais e remotos.

As principais fontes de dados sao:

- `db.json` para mentorias e inscricoes locais
- MockAPI para autenticacao
- API externa para publicacoes da comunidade
- API dedicada para mentorias e metas

Os estados centrais do app giram em torno de:

- `usuario`
- `carregando`
- `metas`
- `progresso`
- `publicacoes`
- `mentorias`

---

## Estrutura de Pastas

```text
src/
├── @types/
├── components/
├── contexts/
├── data/
├── hooks/
├── pages/
├── routes/
├── schemas/
├── services/
├── storage/
├── styles/
└── utils/
```

Arquivos principais:

- `App.tsx`
- `src/contexts/AuthContext.tsx`
- `src/routes/index.tsx`
- `src/routes/auth.routes.tsx`
- `src/routes/app.routes.tsx`
- `src/pages/Login/index.tsx`
- `src/pages/Home/index.tsx`
- `src/pages/Profile/index.tsx`
- `db.json`

---

## Como Executar

### Instalar Dependencias

```bash
npm install
```

### Rodar o Projeto

```bash
npx expo start --tunnel
```

Voce tambem pode usar:

```bash
npm start
```

### Variaveis de Ambiente

Se quiser manter o login com Google configurado, crie um arquivo `.env` na raiz:

```env
EXPO_PUBLIC_ANDROID_CLIENT_ID=seu_android_client_id
EXPO_PUBLIC_IOS_CLIENT_ID=seu_ios_client_id
EXPO_PUBLIC_WEB_CLIENT_ID=seu_web_client_id
```

---

## Observacoes

- O app foi construido com foco mobile-first usando Expo.
- O arquivo `db.json` faz parte do fluxo local de desenvolvimento.
- O projeto usa APIs mockadas e dados armazenados localmente.
- Se o Expo reclamar de `@react-native-community/slider`, rode `npm install` novamente para restaurar o `node_modules` corretamente.

