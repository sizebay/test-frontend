import axios, {
  HttpStatusCode,
  type AxiosError,
  type AxiosInstance,
} from "axios";

import type { HTTPRequest, IHTTPClient, TDefaultResponse } from "./contract";

export class HTTPClient implements IHTTPClient {
  private constructor(
    private client: AxiosInstance = axios,
    private baseUrl: string = "https://api.github.com"
  ) {
    this.client = client;
    this.baseUrl = baseUrl;
  }

  static create() {
    return new HTTPClient();
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
      const status = axiosError.response?.status as HttpStatusCode;
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
