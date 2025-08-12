# 🚀 Test Frontend - GitHub Explorer

Aplicação em **Next.js** para explorar, pesquisar, filtrar e favoritar repositórios do GitHub.  
Seguindo o **Design Atômico**, utilizando **React Query** para cache e consumo eficiente da API do GitHub.  

---

## 📸 Funcionalidades

- 🔍 **Pesquisar e filtrar** repositórios
- ⭐ **Dar estrela** diretamente nos repositórios
- 📄 **Ver detalhes** de um repositório sem recarregar dados já buscados
- 🔄 **Retornar à pesquisa anterior** via `query params` sem nova chamada de API
- 🧩 Componentes baseados em **shadcn/ui** para consistência visual
- 🧪 **Testes unitários** para componentes e hooks
- 📚 **Storybook** configurado para visualização e documentação de componentes

---

## 📂 Estrutura

O projeto segue **Atomic Design**:

- **Átomos:** Botões, inputs, ícones e outros elementos visuais básicos  
- **Moléculas:** Combinação de átomos (ex.: campos de busca)  
- **Organismos:** Blocos complexos (ex.: lista de repositórios)  
- **Templates:** Estrutura geral das páginas  
- **Pages:** Camada final que integra templates e dados  

---

## 🔧 Decisões Técnicas

### 1. Biblioteca de Cache
Escolhi **React Query (TanStack Query)** em vez de alternativas como SWR ou o fetch nativo do Next.js porque:
- Possui **controle avançado** de cache e invalidação seletiva
- Suporte a **optimistic updates**, _prefetching_, _retry_ e sincronização em background
- Ferramentas de **DevTools** para depuração
- Melhor suporte para estados complexos (`loading`, `error`, `success`)

> **Comparação rápida:**
> - **SWR:** Leve e simples, mas menos controle para cenários complexos
> - **Next.js fetch/server actions:** Ótimo para SSR, mas limitado para interatividade no cliente

---

### 2. Organização Atômica
Os componentes foram organizados seguindo o **Atomic Design**, garantindo:
- **Reaproveitamento** de componentes
- **Facilidade de manutenção**
- Consistência visual (via **shadcn/ui**)

---

### 3. Desafios e Soluções
- **Cache persistente & invalidation:**  
  Problema: Estrelas não atualizavam instantaneamente.  
  Solução: Implementação de **optimistic updates** para melhorar a experiência do usuário.

- **Configuração de testes:**  
  Problema: Incompatibilidade do `tsconfig` com Jest.  
  Solução: Criação de `tsconfig.test.json` separado para tipagem correta em testes.

---

## 📦 Tecnologias

- **Next.js** `15.4.6`
- **React** `19.1.0`
- **React Query (TanStack Query)** `^5.84.2`
- **TailwindCSS** `^4`
- **shadcn/ui** (componentes atômicos)
- **Framer Motion** (animações)
- **Lucide Icons** (ícones)
- **Jest** + **Testing Library** (testes)
- **Storybook** (documentação de componentes)

---

## ⚙️ Como Executar

> O projeto foi configurado com **yarn**, mas também funciona com **npm**.  
> Recomendo manter a mesma ferramenta para evitar diferenças de lockfile.

```bash
# Instalar dependências
yarn install
# ou npm install

# Rodar em desenvolvimento
yarn dev
# ou npm run dev

# Rodar testes
yarn test
# ou npm run test

# Rodar storybook
yarn storybook
# ou npm run storybook
