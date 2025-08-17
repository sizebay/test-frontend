# Requisitos primários

## 1. Página de Listagem de Repositórios
- [x] Input para inserir username do GitHub
- [x] Listagem dos repositórios públicos do usuário
- [x] Exibição de informações básicas: nome, descrição, linguagem principal
- [ ] Paginação ou carregamento otimizado
- [x] Estados de loading, erro e dados vazios

## 2. Página de Detalhes do Repositório
- [x] Nome do repositório
- [x] Descrição completa
- [x] Número de estrelas
- [x] Número de forks
- [] Issues abertas
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
- [ ] Implementação de Error Boundaries
- [ ] Otimizações de performance (useMemo, useCallback quando necessário)
- [ ] SEO básico (meta tags, títulos dinâmicos)
- [x] Responsividade mobile-first

## 3. Hooks do React
- [x] **useState**: Gerenciamento de estado local
- [ ] **useEffect**: Efeitos colaterais e lifecycle
- [ ] **useContext**: Compartilhamento de estado global (se necessário)
- [ ] **Custom Hooks**: Criação de pelo menos 1 hook personalizado
- [ ] **useMemo/useCallback**: Otimizações quando apropriado

## 4. Implementação de Cache
- [x] Fast Cache do Next.js

## 5. Testes Unitários
- [ ] **Mínimo obrigatório**: 
  - [x] 2 componentes atômicos testados
  - [x] 1 funcionalidade principal (busca de repositórios)
  - [ ] 1 custom hook testado
- [ ] **Cobertura**: Testes de renderização, interação e estados
- [ ] **Mocks**: APIs mockadas adequadamente
- [ ] **Casos de teste**: Happy path, loading, error states

#  Requisitos segundários
- [ ] Dark mode
- [ ] Navegação pelo teclado
- [ ] Aria-labels
- [ ] Storybook
- [ ] Filtros avançados
- [ ] Favoritar repositórios