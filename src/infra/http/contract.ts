export enum HTTPMethod {
  GET = "GET",
  POST = "POST",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export enum HTTPStatus {
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

export type TError = {
  message: string;
  status: HTTPStatus;
};

export type TDefaultResponse<TResponse = unknown> = {
  data: TResponse | null;
  error: TError | null;
  headers: Record<string, string>;
};

export type HTTPRequest<TBody = unknown> = {
  endpoint: string;
  method: HTTPMethod;
  body?: TBody;
  headers?: Record<string, string>;
  params?: Record<string, string | number>;
};

export interface IHTTPClient {
  sendRequest<TResponse = unknown, TBody = unknown>(
    request: HTTPRequest<TBody>
  ): Promise<TDefaultResponse<TResponse>>;
}
