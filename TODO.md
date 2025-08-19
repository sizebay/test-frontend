# Requisitos primários

## 1. Página de Listagem de Repositórios
- [x] Input para inserir username do GitHub
- [x] Listagem dos repositórios públicos do usuário
- [x] Exibição de informações básicas: nome, descrição, linguagem principal
- [x] Paginação ou carregamento otimizado
- [x] Estados de loading, erro e dados vazios

## 2. Página de Detalhes do Repositório
- [x] Nome do repositório
- [x] Descrição completa
- [x] Número de estrelas
- [x] Número de forks
- [x] Issues abertas
- [x] Linguagem principal
- [x] Data de criação e última atualização
- [x] Link para o repositório no GitHub

# Requisitos Técnicos
## 1. Design Atômico
- [x] Separação clara entre átomos, moléculas, organismos, templates e páginas
- [x] Componentes reutilizáveis e bem documentados
- [x] Props tipadas com TypeScript
- [x] Storybook é um diferencial (opcional)

## 2. Boas Práticas React/Next.js
- [x] Uso de Server Components quando apropriado
- [x] Implementação de Error Boundaries
- [x] Otimizações de performance (useMemo, useCallback quando necessário)
- [ ] SEO básico (meta tags, títulos dinâmicos)
- [x] Responsividade mobile-first

## 3. Hooks do React
- [x] **useState**: Gerenciamento de estado local
- [x] **useEffect**: Efeitos colaterais e lifecycle
- [x] **useContext**: Compartilhamento de estado global (se necessário)
- [x] **Custom Hooks**: Criação de pelo menos 1 hook personalizado
- [x] **useMemo/useCallback**: Otimizações quando apropriado

## 4. Implementação de Cache
- [x] Fast Cache do Next.js

## 5. Testes Unitários
- [x] **Mínimo obrigatório**: 
  - [x] 2 componentes atômicos testados
  - [x] 1 funcionalidade principal (busca de repositórios)
  - [x] 1 custom hook testado
- [x] **Cobertura**: Testes de renderização, interação e estados
- [x] **Mocks**: APIs mockadas adequadamente
- [x] **Casos de teste**: Happy path, loading, error states

#  Requisitos segundários
- [x] Dark mode
- [x] Navegação pelo teclado
- [ ] Aria-labels
- [x] Storybook
- [ ] Filtros avançados
- [ ] Favoritar repositórios