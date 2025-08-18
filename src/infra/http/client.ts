import axios, { type AxiosError, type AxiosInstance } from "axios";

import type {
  HTTPRequest,
  HTTPStatus,
  IHTTPClient,
  TDefaultResponse,
} from "./contract";

interface HTTPClientConfig {
  client?: AxiosInstance;
  baseUrl?: string;
}

export abstract class HTTPClient implements IHTTPClient {
  private client: AxiosInstance;
  private baseUrl: string;

  constructor({
    baseUrl = "localhost:3000",
    client = axios,
  }: HTTPClientConfig) {
    this.client = client;
    this.baseUrl = baseUrl;
  }

  async sendRequest<TResponse = unknown, TBody = unknown>(
    request: HTTPRequest<TBody>
  ): Promise<TDefaultResponse<TResponse>> {
    const { endpoint, headers, method, params, body } = request;

    try {
      const { data } = await this.client.request<TResponse>({
        url: `${this.baseUrl}${endpoint}`,
        method,
        headers,
        params,
        data: body,
      });

      return {
        data,
        error: null,
      };
    } catch (error) {
      const axiosError = error as AxiosError;
      const status = axiosError.response?.status as HTTPStatus;
      const message = (axiosError.response?.data ||
        axiosError.message) as string;

      return {
        data: null,
        error: {
          status,
          message,
        },
      };
    }
  }
}
