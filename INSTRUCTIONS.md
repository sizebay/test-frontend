# Teste Prático - Desenvolvedor Frontend React/Next.js

## 🎯 Objetivo

Este teste prático tem como objetivo avaliar suas habilidades técnicas em desenvolvimento frontend, especificamente:

- **Desenvolvimento com Design Atômico**: Estruturação clara e organizada de componentes
- **Boas práticas React/Next.js**: Performance, organização e código limpo
- **Uso eficiente de Hooks**: Aplicação correta de hooks nativos e personalizados
- **Implementação de Cache**: Estratégias eficientes para otimização de API calls
- **Testes Unitários**: Cobertura adequada e qualidade dos testes

## 📋 Especificações do Projeto

### Tecnologias Obrigatórias
- **Framework**: Next.js (versão 13+ recomendada)
- **Linguagem**: TypeScript
- **API**: GitHub Public API (`https://api.github.com`)
- **Cache**: SWR, React Query (TanStack Query) ou soluções nativas do Next.js
- **Testes**: Jest + React Testing Library

### Funcionalidades Requeridas

#### 1. Página de Listagem de Repositórios
- **Endpoint**: `https://api.github.com/users/{username}/repos`
- **Funcionalidades**:
  - Input para inserir username do GitHub
  - Listagem dos repositórios públicos do usuário
  - Exibição de informações básicas: nome, descrição, linguagem principal
  - Paginação ou carregamento otimizado
  - Estados de loading, erro e dados vazios

#### 2. Página de Detalhes do Repositório
- **Endpoint**: `https://api.github.com/repos/{owner}/{repo}`
- **Informações obrigatórias**:
  - Nome do repositório
  - Descrição completa
  - Número de estrelas
  - Número de forks
  - Issues abertas
  - Linguagem principal
  - Data de criação e última atualização
  - Link para o repositório no GitHub

## 🏗️ Estrutura do Projeto (Design Atômico)

Organize seu projeto seguindo rigorosamente a metodologia de Design Atômico:

```
src/
├── components/
│   ├── atoms/           # Elementos básicos (Button, Input, Text, Icon)
│   ├── molecules/       # Combinações de átomos (SearchBox, RepoCard)
│   ├── organisms/       # Grupos complexos (RepoList, Header, Footer)
│   ├── templates/       # Layouts de página
│   └── pages/          # Páginas completas
├── hooks/              # Custom hooks
├── services/           # Serviços de API
├── types/              # Definições TypeScript
├── utils/              # Funções utilitárias
└── __tests__/          # Testes organizados por componente
```

## ⚡ Requisitos Técnicos

### 1. Design Atômico
- [ ] Separação clara entre átomos, moléculas, organismos, templates e páginas
- [ ] Componentes reutilizáveis e bem documentados
- [ ] Props tipadas com TypeScript
- [ ] Storybook é um diferencial (opcional)

### 2. Boas Práticas React/Next.js
- [ ] Uso de Server Components quando apropriado
- [ ] Implementação de Error Boundaries
- [ ] Otimizações de performance (useMemo, useCallback quando necessário)
- [ ] SEO básico (meta tags, títulos dinâmicos)
- [ ] Responsividade mobile-first

### 3. Hooks do React
- [ ] **useState**: Gerenciamento de estado local
- [ ] **useEffect**: Efeitos colaterais e lifecycle
- [ ] **useContext**: Compartilhamento de estado global (se necessário)
- [ ] **Custom Hooks**: Criação de pelo menos 1 hook personalizado
- [ ] **useMemo/useCallback**: Otimizações quando apropriado

### 4. Implementação de Cache
Escolha uma das opções e implemente corretamente:

#### Opção A: SWR
```typescript
import useSWR from 'swr'

const { data, error, isLoading } = useSWR(
  `/api/users/${username}/repos`,
  fetcher,
  {
    revalidateOnFocus: false,
    dedupingInterval: 300000, // 5 minutos
  }
)
```

#### Opção B: React Query (TanStack Query)
```typescript
import { useQuery } from '@tanstack/react-query'

const { data, isLoading, error } = useQuery({
  queryKey: ['repos', username],
  queryFn: () => fetchUserRepos(username),
  staleTime: 300000, // 5 minutos
})
```

#### Opção C: Next.js Fetch Cache
```typescript
const repos = await fetch(`https://api.github.com/users/${username}/repos`, {
  next: { revalidate: 300 } // 5 minutos
})
```

### 5. Testes Unitários
- [ ] **Mínimo obrigatório**: 
  - 2 componentes atômicos testados
  - 1 funcionalidade principal (busca de repositórios)
  - 1 custom hook testado
- [ ] **Cobertura**: Testes de renderização, interação e estados
- [ ] **Mocks**: APIs mockadas adequadamente
- [ ] **Casos de teste**: Happy path, loading, error states

## 🚀 Instruções de Entrega

### 1. Configuração do Repositório
1. Faça um fork deste repositório
2. Clone o fork para sua máquina local
3. Crie uma branch com seu nome: `feature/nome-sobrenome`
4. Desenvolva o projeto na sua branch

### 2. Desenvolvimento
1. Inicie o projeto Next.js com TypeScript
2. Configure as dependências necessárias
3. Implemente as funcionalidades seguindo os requisitos
4. Escreva os testes unitários
5. Documente o código quando necessário

### 3. Commits
**⚠️ IMPORTANTE**: Seus commits serão avaliados! Siga as boas práticas:

- Use **Conventional Commits**: `feat:`, `fix:`, `test:`, `docs:`, etc.
- Commits atômicos e descritivos
- Mensagens em português ou inglês (seja consistente)
- Exemplos:
  ```
  feat: add search component with atomic design structure
  test: add unit tests for Button atom component
  feat: implement SWR cache for GitHub API calls
  fix: handle error states in repository details page
  docs: update README with setup instructions
  ```

### 4. Pull Request
Quando finalizar o desenvolvimento:

1. Push da sua branch para o fork
2. Abra um Pull Request para a branch `main` do repositório original
3. **Título do PR**: `[TESTE] Nome Completo - Desenvolvedor Frontend`

#### Template do Pull Request:
```markdown
## 📝 Descrição
Breve descrição do que foi implementado.

## ✅ Checklist de Requisitos
- [ ] Design Atômico implementado
- [ ] Hooks do React utilizados adequadamente
- [ ] Cache implementado (especificar qual: SWR/React Query/Next.js)
- [ ] Testes unitários incluídos
- [ ] TypeScript configurado
- [ ] Responsividade implementada

## 🧪 Testes
- Total de testes: X
- Componentes testados: [listar]
- Hooks testados: [listar]
- Cobertura estimada: X%

## 🚀 Como executar
```bash
# Comandos para instalar e executar
npm install
npm run dev
npm run test
```

## 📱 Screenshots
[Adicione capturas de tela da aplicação funcionando]

## 🔧 Decisões Técnicas
Explique brevemente suas principais decisões arquiteturais:
- Por que escolheu determinada biblioteca de cache
- Como organizou os componentes atômicos
- Desafios encontrados e soluções

## ⏱️ Tempo Investido
Aproximadamente X horas
```

## 📏 Critérios de Avaliação

### 1. Código (60%)
- **Design Atômico**: Estrutura clara e organizada (15%)
- **Boas práticas React/Next.js**: Performance e organização (15%)
- **Hooks**: Uso adequado e eficiente (10%)
- **Cache**: Implementação eficiente e clara (10%)
- **Testes**: Cobertura e qualidade (10%)

### 2. Commits (20%)
- Qualidade das mensagens de commit
- Atomicidade dos commits
- Uso de Conventional Commits
- Histórico limpo e organizado

### 3. Documentação (20%)
- Qualidade do Pull Request
- README do projeto
- Comentários no código quando necessário
- Instruções claras de execução

## ⏰ Prazo e Considerações

- **Prazo**: 5 dias úteis após o recebimento
- **Dúvidas**: Podem ser enviadas por email ou Issues no repositório
- **Entrega**: Pull Request conforme instruções acima

## 🎯 Dicas para se Destacar

- **Performance**: Implementar lazy loading, code splitting
- **UX**: Adicionar skeleton loading, animações suaves
- **Acessibilidade**: ARIA labels, navegação por teclado
- **Error Handling**: Tratamento elegante de erros
- **Documentação**: Storybook ou documentação detalhada dos componentes
- **Extra**: Dark mode, filtros avançados, favoritar repositórios

## 📚 Recursos Úteis

- [Next.js Documentation](https://nextjs.org/docs)
- [React Query Documentation](https://tanstack.com/query/latest)
- [SWR Documentation](https://swr.vercel.app/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [GitHub API Documentation](https://docs.github.com/en/rest)
- [Atomic Design Methodology](https://bradfrost.com/blog/post/atomic-web-design/)

---

**Boa sorte! 🚀**

Estamos ansiosos para ver sua solução e conhecer seu estilo de desenvolvimento!
