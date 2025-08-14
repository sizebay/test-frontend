# 🚀 GitHub Explorer - Sizebay

Uma aplicação moderna para explorar repositórios do GitHub com interface elegante e funcionalidades avançadas.

![GitHub Explorer](https://img.shields.io/badge/Next.js-15.4.6-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Instalação e Uso](#-instalação-e-uso)
- [Testes](#-testes)
- [Arquitetura](#-arquitetura)

## 🎯 Sobre o Projeto

O **GitHub Explorer** é uma aplicação web desenvolvida para explorar repositórios do GitHub de forma intuitiva e eficiente. A aplicação permite buscar repositórios por usuário, visualizar detalhes completos e gerenciar favoritos.

### ✨ Características Principais

- 🔍 **Busca Inteligente**: Pesquise repositórios por username do GitHub
- 📱 **Design Responsivo**: Interface otimizada para todos os dispositivos
- 🌙 **Tema Escuro/Claro**: Alternância automática baseada na preferência do usuário
- ❤️ **Sistema de Favoritos**: Salve e gerencie seus repositórios favoritos
- ⚡ **Performance Otimizada**: Cache inteligente e carregamento rápido
- 🧪 **Testes Completos**: Cobertura de testes unitários

## 🚀 Funcionalidades

### 📄 Páginas Principais

#### 1. **Página Inicial**

- Landing page com design moderno
- Call-to-action para explorar repositórios
- Elementos visuais atrativos

#### 2. **Busca de Repositórios**

- Input para inserir username do GitHub
- Listagem paginada de repositórios
- Informações básicas: nome, descrição, linguagem, estrelas
- Estados de loading, erro e dados vazios
- Botão para favoritar repositórios

#### 3. **Detalhes do Repositório**

- Informações completas do repositório
- Estatísticas detalhadas (stars, forks, issues)
- Links diretos para o GitHub
- Histórico de atualizações

#### 4. **Favoritos**

- Lista de repositórios favoritados
- Persistência local dos dados
- Interface intuitiva para gerenciamento

### 🎨 Interface

- **Design Atômico**: Componentes organizados hierarquicamente
- **Responsividade**: Mobile-first approach
- **Acessibilidade**: Navegação por teclado e screen readers
- **Animações**: Transições suaves e feedback visual

## 🛠️ Tecnologias Utilizadas

### **Frontend**

- **Next.js 15.4.6** - Framework React com SSR/SSG
- **React 19.1.0** - Biblioteca de interface
- **TypeScript 5.0** - Tipagem estática
- **Tailwind CSS 4.0** - Framework CSS utilitário

### **Gerenciamento de Estado**

- **TanStack Query** - Cache e gerenciamento de dados
- **React Context** - Estado global para favoritos

### **UI/UX**

- **Radix UI** - Componentes acessíveis
- **Lucide React** - Ícones modernos
- **Next Themes** - Gerenciamento de temas
- **Sonner** - Notificações elegantes

### **Testes**

- **Jest** - Framework de testes
- **React Testing Library** - Testes de componentes
- **Testing Library User Event** - Simulação de interações

### **Desenvolvimento**

- **ESLint** - Linting de código
- **Turbopack** - Bundler rápido para desenvolvimento

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router (Next.js 13+)
│   ├── actions/           # Server Actions
│   ├── favorites/         # Página de favoritos
│   ├── repository-details/ # Página de detalhes
│   ├── search-repositories/ # Página de busca
│   └── globals.css        # Estilos globais
├── components/
│   ├── atoms/            # Componentes básicos
│   │   ├── FavoritesCounter.tsx
│   │   └── ThemeToggle.tsx
│   ├── molecules/        # Combinações de átomos
│   │   ├── RepoCard.tsx
│   │   ├── SearchBox.tsx
│   │   └── UserCard.tsx
│   ├── organisms/        # Componentes complexos
│   │   ├── FavoritesList.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── RepoList.tsx
│   ├── pages/           # Páginas completas
│   ├── providers/       # Providers React
│   ├── templates/       # Layouts
│   └── ui/             # Componentes base (shadcn/ui)
├── contexts/           # Contextos React
├── hooks/             # Custom hooks
├── lib/              # Utilitários
├── services/         # Serviços de API
├── types/           # Definições TypeScript
├── utils/           # Funções utilitárias
└── __tests__/       # Testes organizados
```

## 🚀 Instalação e Uso

### **Pré-requisitos**

- Node.js 18+
- npm ou yarn

### **1. Clone o repositório**

```bash
git clone url_do_projeto
cd github-explorer
```

### **2. Instale as dependências**

```bash
npm install
# ou
yarn install
```

### **3. Execute o projeto**

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar produção
npm start
```

### **4. Acesse a aplicação**

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🧪 Testes

### **Executar todos os testes**

```bash
npm test
```

### **Executar testes em modo watch**

```bash
npm run test:watch
```

### **Verificar cobertura de testes**

```bash
npm run test:coverage
```

### **Estrutura dos Testes**

- **Componentes**: Testes de renderização e interação
- **Hooks**: Testes de lógica e estados
- **Actions**: Testes de chamadas de API
- **Cobertura**: Mínimo de 80% de cobertura

## 🏗️ Arquitetura

### **Design Atômico**

O projeto segue rigorosamente a metodologia de Design Atômico:

- **Atoms**: Componentes básicos (Button, Input, Icon)
- **Molecules**: Combinações simples (SearchBox, RepoCard)
- **Organisms**: Componentes complexos (Header, Footer, RepoList)
- **Templates**: Layouts de página
- **Pages**: Páginas completas

### **Gerenciamento de Estado**

- **TanStack Query**: Cache e sincronização de dados
- **React Context**: Estado global para favoritos
- **Local Storage**: Persistência de dados locais

### **Performance**

- **Server Components**: Renderização no servidor quando apropriado
- **Code Splitting**: Carregamento sob demanda
- **Image Optimization**: Otimização automática de imagens
- **Caching**: Cache inteligente de requisições

### **API Integration**

- **GitHub REST API**: Endpoints oficiais do GitHub
- **Error Handling**: Tratamento robusto de erros
- **Rate Limiting**: Respeito aos limites da API

## 🎨 Design System

### **Cores**

- **Primary**: Azul principal da marca
- **Secondary**: Cor secundária para acentos
- **Accent**: Cor de destaque para ações
- **Muted**: Cores suaves para textos secundários

### **Tipografia**

- **Font Family**: Sistema de fontes do sistema
- **Hierarchy**: Títulos, subtítulos e corpo de texto bem definidos
- **Responsive**: Tamanhos adaptáveis por breakpoint

### **Componentes**

- **Button**: Variações primary, secondary, ghost
- **Input**: Campos de texto com validação
- **Card**: Containers para conteúdo
- **Badge**: Indicadores e tags

## 📱 Responsividade

### **Breakpoints**

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### **Adaptações**

- **Header**: Menu hambúrguer em mobile
- **Grid**: Layout responsivo para listagens
- **Typography**: Tamanhos adaptáveis
- **Spacing**: Espaçamentos otimizados

## 🔧 Configuração

### **Variáveis de Ambiente**

```env
# .env.local
NEXT_PUBLIC_GITHUB_API_URL=https://api.github.com
```

### **Configurações do Next.js**

- **Turbopack**: Para desenvolvimento rápido
- **TypeScript**: Configuração estrita
- **ESLint**: Regras de qualidade de código
- **Tailwind**: Configuração customizada

## 👨‍💻 Desenvolvido por

**Nicolas Braga** - Desenvolvedor Frontend na Sizebay

- 📧 Email: ncls.braga19@gmail.com
- 📱 Telefone: (92) 98202-7275
- 🌐 LinkedIn: [Nicolas Braga](https://www.linkedin.com/in/nclsbraga97/)

---

<div align="center">
  <p>Feito com ❤️ pela equipe Sizebay</p>
  <p>Construindo soluções digitais de alto impacto para o seu negócio.</p>
</div>
