import axios, { type AxiosError, type AxiosInstance } from "axios";

import type { HTTPRequest, IHTTPClient } from "./contract";

export class HTTPClient implements IHTTPClient {
  private constructor(
    private client: AxiosInstance = axios,
    private baseUrl: string = "http://localhost:8080"
  ) {
    this.client = client;
    this.baseUrl = baseUrl;
  }

  static create() {
    return new HTTPClient();
  }

  async sendRequest<TResponse = unknown, TBody = unknown>(
    request: HTTPRequest<TBody>
  ): Promise<TResponse> {
    const { endpoint, headers, method, params, body } = request;

    try {
      const { data } = await this.client.request<TResponse>({
        url: `${this.baseUrl}${endpoint}`,
        method,
        headers,
        params,
        data: body,
      });
      return data;
    } catch (error) {
      const axiosError = error as AxiosError;
      const status = axiosError.response?.status;
      const message = axiosError.response?.data || axiosError.message;

      throw new Error(`Erro com status ${status}: ${message}`);
    }
  }
}
