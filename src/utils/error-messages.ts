import { AxiosError } from "axios";

export function errorMessage(error: AxiosError) {
  switch (error.response?.status) {
    case 404:
      return {
        title: "Usuário não Encontrado",
        description:
          "O nome de usuário que você pesquisou não existe ou não possui repositórios públicos. Por favor, tente outro nome de usuário.",
      };
    case 403:
      return {
        title: "Acesso Negado",
        description:
          "Você não tem permissão para acessar este recurso ou você pode ter atingido o limite de requisições da API.",
      };
    default:
      return {
        title: "Erro Desconhecido",
        description:
          "Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.",
      };
  }
}
