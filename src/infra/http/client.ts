import {
  type HTTPRequest,
  HTTPStatus,
  type IHTTPClient,
  type TDefaultResponse,
} from "./contract";

interface HTTPClientConfig {
  baseUrl?: string;
}

const ONE_MINUTE = 60;

export abstract class HTTPClient implements IHTTPClient {
  private client;
  private baseUrl: string;

  constructor({ baseUrl = "localhost:3000" }: HTTPClientConfig) {
    this.client = fetch;
    this.baseUrl = baseUrl;
  }

  async sendRequest<TResponse = unknown, TBody = unknown>(
    request: HTTPRequest<TBody>
  ): Promise<TDefaultResponse<TResponse>> {
    const { endpoint, headers, method, params, body } = request;

    try {
      const query = params
        ? `?${new URLSearchParams(params as Record<string, string>)}`
        : "";

      const response = await this.client(`${this.baseUrl}${endpoint}${query}`, {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined,
        cache: "force-cache",
        next: { revalidate: 5 * ONE_MINUTE },
      });

      const contentType = response.headers.get("content-type");
      const data = contentType?.includes("application/json")
        ? await response.json()
        : await response.text();

      if (!response.ok) {
        return {
          data: null,
          headers: Object.fromEntries(response.headers.entries()),
          error: {
            status: response.status as HTTPStatus,
            message: response.statusText,
          },
        };
      }

      return {
        data: data as TResponse,
        headers: Object.fromEntries(response.headers.entries()),
        error: null,
      };
    } catch (error: unknown) {
      return {
        data: null,
        headers: {},
        error: {
          status: HTTPStatus.INTERNAL_SERVER_ERROR,
          message: (error as Error).message || "Unexpected error",
        },
      };
    }
  }
}
