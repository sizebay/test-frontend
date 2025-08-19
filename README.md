# Teste Prático - Desenvolvedor Frontend React/Next.js

Projeto de **listagem de repositórios de usuários do GitHub**, desenvolvido como teste prático para avaliar competências de desenvolvedores frontend. O projeto aborda pontos essenciais do desenvolvimento moderno, como:

- Arquitetura de solução
- Responsividade *mobile first*
- Documentação
- Testes unitários
- Testes de integração
- *Data Fetching*
- *Error Handling*
- Roteamento de páginas
- Cacheamento de requisições

## Links de Deploy
- [Deploy](https://teste-frontend-sizebay.vercel.app/)
- [Chromatic](https://68a2ba57b7317e52a8195d69-njviiekejb.chromatic.com/)

## Sobre o autor

### Daniel Gustavo Favero
- [Github](https://github.com/danielg-favero)
- [LinkedIn](https://www.linkedin.com/in/daniel-gustavo-favero)
- [Portifólio](https://danielg-favero.vercel.app/)
- [Email](mailto:danielfavero17@gmail.com)

## 📑 Sumário

- [Tecnologias do projeto](#tecnologias-do-projeto)
- [Get Started](#get-started)
- [Extensões necessárias para desenvolvimento](#extensões-necessárias-para-desenvolvimento)
- [Comandos do packagejson](#comandos-do-packagejson)
- [Estrutura do projeto](#estrutura-do-projeto)
  - [Diretórios principais](#diretórios-principais)
  - [Estrutura de componentes](#estrutura-de-componentes)
- [Consumindo recursos de API](#consumindo-recursos-de-api)
  - [Criando um service](#criando-um-service)
  - [Consumindo um Service em uma página](#consumindo-um-service-em-uma-página)
- [Testando uma funcionalidade](#testando-uma-funcionalidade)
- [Documentando componentes](#documentando-componentes)
- [Padrões do projeto](#padrões-do-projeto)
  - [Nome de arquivos e pastas](#nome-de-arquivos-e-pastas)
  - [Componentes, Funções, Hooks, etc](#componentes-funções-hooks-etc)
  - [Componentes](#componentes)
  - [Páginas](#páginas)
  - [Requisições HTTP](#requisições-http)
- [Documentação complementar](#documentação-complementar)
- [Contribuições Futuras](#contribuições-futuras)

## Tecnologias do projeto

- [React.JS](https://react.dev/learn)
- [Next.JS](https://nextjs.org/docs)
- [TailwindCSS](https://tailwindcss.com/docs/installation/using-vite)
- [NextAuth](https://next-auth.js.org/getting-started/introduction)
- [Storybook](https://storybook.js.org/docs)
- [Jest](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/)

## Get Started

1. Instale as dependências do projeto

```bash
npm install
```

> O projeto utiliza `npm` como gerenciador de pacotes, caso não tenha instalado na sua máquina siga os passos da [Documentação](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

2. Configure as credenciais do `NextAuth`

Rode o comando

```bash
npx auth secret
```

> Esse comando gera um arquivo `.env.local` e dentro dele uma chave para criptografar tokens de sessão do `NextAuth`.

Configure um novo App `OAuth` no seu perfil do github. Em caso de dúvidas siga a [documentação](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app). 

Informe os seguintes valores para os campos:

- Application name*: `<nome-para-o-app>`
- Homepage URL*: `localhost:3000`
- Application description: `<descricao-para-o-app>`
- Authorization callback URL*: `localhost:3000/api/auth/callback/github`

Ao final, clique em `Update application`. Você será redirecionado para página do seu aplicativo `OAuth`.

Clique em `Generate a new client secret` para gerar uma nova chave de acesso.

Copie o `ClientID` e o `Client secret` e cole dentro do arquivo `.env.local` nas seguintes variáveis:

```
AUTH_GITHUB_ID="<client-ID>"
AUTH_GITHUB_SECRET="<client-secret>"
```

3. Insira a URL `https://api.github.com` na variável `GITHUB_API_URL` dentro de `.env.local`

```
GITHUB_API_URL="https://api.github.com"
```

Ao final, o arquivo `.env.example` fica:

```
AUTH_SECRET="<nextauth-secret>"
AUTH_GITHUB_ID="<client-ID>"
AUTH_GITHUB_SECRET="<client-secret>"
GITHUB_API_URL="https://api.github.com"
```

4. Rode o servidor de desenvolvimento

```bash
npm run dev
```

5. Acesse o endereço `localhost:3000` em seu navegador.

## Extensões necessárias para desenvolvimento

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

## Comandos do `package.json`

- `npm run dev`: Roda o servidor local de desenvolvimento
- `npm run build`: Gera `build` o projeto.
- `npm run start`: Roda o projeto em modo produção após o comando `npm run build` ter sido executado.
- `npm lint`: Roda o script do `ESlint` em todos os arquivos do projeto
- `npm run test`: Roda os testes no projeto,
- `npm run test:watch`: Roda os testes no projeto no modo `watch`, ou seja, a cada mudanca no código os testes são executados novamente.
- `npm run dev-storybook`: Roda a documentação dos componentes com o `storybook`,
- `npm run build-storybook`: Gera `build` da documentação dos componentes com o `storybook`,

## Estrutura do projeto

### Diretórios principais

```
📁 src
├── 📁 __test__
├── 📁 app
├── 📁 components
├── 📁 global
├── 📁 hooks
├── 📁 infra
├── 📁 services
├── 📁 types
├── 📁 utils
├── 📄 middleware.ts
└── 📄 next-auth.ts
```

#### `📁 __test__`
Pasta onde se concentram os testes e mocks da aplicação usando `jest` e `@testing-library/react`. A estrutura interna é uma réplica da pasta `src`.

Entenda melhor sobre os testes na seção: [Testando uma funcionalidade](#testando-uma-funcionalidade)

#### `📁 app`
Pasta `core` da aplicação, onde o `Next.JS` renderiza as páginas. Entenda melhor sobre o padrão [App Router](https://nextjs.org/docs/app) do `Next.JS`.

#### `📁 components`
Pasta onde se concentram todos os componentes da aplicação. Sua organização segue os princípios do `Atomic Design`.

Entenda melhor sobre os componentes na seção: [Estrutura de componentes](#estrutura-de-componentes)

#### `📁 DTOs`
Pasta onde se concentram definições de tipos de `DTOs` (*Data Transfer Objects*). São objetos utilizados na transferência de dados entre dois sistemas. Geralmente são relacionados a retornos de APIs ou envios de dados de formulários.

#### `📁 global`
Pasta com definições globais do projeto, como estilos.

#### `📁 hooks`
Pasta onde se concentram os hooks customizados utilizados por `client components`. [Entenda mais](https://react.dev/learn/reusing-logic-with-custom-hooks)

#### `📁 infra`
Pasta que configura dependências externas da aplicação. Funciona como a porta de entrada da comunicação entre o sistema e o mundo externo.

```
📁 infra
├── 📁 http
│   ├── 📄 client.ts
│   └── 📄 contract.ts
```

- `📁 http`: Configura `adapter` de um cliente `HTTP` usando o `fetch`, assim a aplicação não depende de detalhes da implementação da ferramenta para fazer chamadas `HTTP`.

#### `📁 services`.
Serviços de comunicação com APIs ou recursos externos.

Entenda melhor sobre como criar serviços na seção: 

#### `📁 types`
Pasta que concentra definições de tipos usando `typescript`.

#### `📁 utils`
Códigos utilitários compartilhados entre as partes dos sistema.

```
📁 utils
├── 📁 formatters
├── 📁 mappers
└── 📁 translators
```

- `📁 formatters`: Formatadores de dados (e.g Manipulação de datas)
- `📁 mappers`: Mapeadores de dados de um domínio para outro (e.g Mapear dados do backend para o frontend)
- `📁 translators`: Tradutores de dados

### Estrutura de componentes
Os componentes estão separados em uma hierarquia se respeita os princípios do [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/).

- `📁 atoms`: Componentes atômicos. são os blocos de construção fundamentais para outros elementos complexos. Geralmente `tags` `html` ou outros elementos básicos.
> Componentes `atoms` são sempre `client-side`.

- `📁 molecules`: Componentes mais complexos formados pelo conjunto de componentes `atoms`(e.g. `Skeletons`, `EmptyStates`, `Pagination`, etc.)
> Componentes `molecules` são sempre `client-side`.

- `📁 organisms`: Componentes ainda mais complexos formados pelo conjunto de componentes `atoms` e `molecules`(e.g. Listagens, Partes de páginas, etc.)
> Componentes `organisms` são sempre `client-side`.

- `📁 templates`: Seções completas de páginas. São responsáveis pela lógica de exibição dos componentes e como eles vão se comportar com respostas de APIs. Portanto, é neles que chamamos os `Services` e tratamos dos dados.
> Componentes `templates` são sempre `server-side`.

`📁 pages`: Construção de páginas completas, incluindo os estados dessas páginas (e.g Erro, Empty, Loading). São nas páginas que os `Services` e `HTTP Clients` são instanciados e os parâmetros de rotas são tratados.
> Componentes `pages` são sempre `server-side`.

## Consumindo recursos de API

### Criando um service
Serviços são classes que recebem como parâmetro no construtor um `IHTTPClient` para realizar requisições e geralmente exportam um método `exec` que executa determinada requisição.

```ts
export interface IExampleService {
  exec(example: ExampleDTO): Promise<void>;
}

export class ExamplesService implements IExampleService {
  constructor(private readonly httpClient: IHTTPClient) {}

  async exec(example: ExampleDTO): Promise<void> {
    await this.httpClient.sendRequest<ExampleDTO>({
      endpoint: "/example-endpoint",
      method: HTTPMethod.POST,
      body: example,
    });
  }
}
```

Esse padrão é ideal para realizar testes, uma vez que é possível `mockar` esse serviço.

```ts
export class ExampleServiceMock implements IExampleService {
  constructor(private readonly httpClient: IHTTPClient) {}

  async exec(example: ExampleDTO): Promise<void> {
    return new Promise((resolve) => console.log('teste'))
  }
}
```

### Consumindo um `Service` em uma página
Com o `Service` criado, é possível instanciá-lo dentro de uma página em `src/components/pages`

```tsx
export async function ExamplePage(props) {
  const exampleHTTPClient = new ExampleHTTPClient();
  const exampleService = new ExampleService(exampleHTTPClient);
  {/* Outras lógicas */}

  return (
    <Page {...props}>
      {/* ... */}
      <Suspense fallback={<ExampleSkeleton />}>
        <ExampleBody
          exampleService={exampleService}
        />
      </Suspense>
      {/* ... */}
    </Page>
  );
}
```

Quem espera os `Services` sempre são os componentes dentro `src/components/templates`.

```tsx
export async function ExampleTemplate({
  exampleService,
  ...props
}) {
  const response = await exampleService.exec();
  {/* Outras lógicas */}

  return (
    <PageBody {...props}>
      {/* Consumo do objeto `response` */}
    </PageBody>
  );
}
```

## Testando uma funcionalidade
A pasta `src/__test__` contém uma réplica das pastas dentro de `src`, o que facilita a identificação dos componentes para os testes.

- Todos os componentes dentro de `atoms`, `molecules` e `organisms` podem ser testados sem mockar dados.
- Os testes de funcionalidades completas precisam ser feitos nos componentes `template`, uma vez que eles podem receber mocks de dados.

```tsx
describe("ExampleTemplate", () => {
  it("...", async () => {
    const exampleServiceMock = new ExampleServiceMock();

    render(
      await ExampleTemplate({
        exampleService: exampleServiceMock,
      })
    );

    // Asserts do teste
  });
})
```

## Documentando componentes
Além do padrão do `Atomic Design` dentro de `src/components`, há também uma pasta `stories` contendo a documentação dos componentes da aplicação.

A documentação segue a mesma estrutura de `src/components`. Para rodar a documentação execute o comando:

```bash
npm run dev-storybook
```

Ou acesse o link remoto da documentação: [Chromatic](https://68a2ba57b7317e52a8195d69-njviiekejb.chromatic.com/).

Para mais detalhes de como documentar componentes acesse a [documentação do Storybook](https://storybook.js.org/docs/writing-stories)

## Padrões do projeto

### Nome de arquivos e pastas
- Utilizar o `kebab-case`
- Testes: utilizar a extensão `.spec`

### Componentes, Funções, Hooks, etc.
- Exportação nomeada (sem ser `default`) usando `function`.
- Funções dentro de componentes usar `arrow functions`.

### Componentes
- Separar componentes utilizando os princípios do `Atomic Design`.
- Dar preferência por construir componentes usando o [`Composition Pattern`](https://medium.com/@guilherme.pomp/creating-react-components-with-the-composition-pattern-f59c895f27bc)
  
### Páginas

- Devem ser `server components`
- Devem apenas chamar os componentes dentro de `src/components/pages`, sem nenhuma lógica.

### Requisições HTTP

- Criar um `DTO`.
- Criar um `Service` que utiliza o `DTO` criado e a interface `IHTTPClient` de `📁 infra`.
- Utilizar o `fetch api` do Next.JS. [Entenda mais](https://nextjs.org/docs/app/getting-started/fetching-data)
- Executar o `Service` dentro dos `templates`.

## Documentação complementar
- [React.JS](https://react.dev/learn)
- [Next.JS](https://nextjs.org/docs)
- [Data Fetch](https://nextjs.org/docs/app/getting-started/fetching-data)
- [TailwindCSS](https://tailwindcss.com/docs/installation/using-vite)
- [NextAuth](https://next-auth.js.org/getting-started/introduction)
- [Storybook](https://storybook.js.org/docs)
- [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)
- [Composition Pattern](https://medium.com/@guilherme.pomp/creating-react-components-with-the-composition-pattern-f59c895f27bc)
- [Jest](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/)
- [Arquitetura MVVM usando React](https://www.youtube.com/watch?v=GI8zxLviMog&t=6s&ab_channel=Zencode)

## Contribuições Futuras

Algumas funcionalidades que ainda não foram implementadas e que podem ser contribuições futuras podem ser encontradas em `TODO.md`

