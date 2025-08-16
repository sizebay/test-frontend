import { HttpStatusCode } from "axios";

export enum HTTPMethod {
  GET = "GET",
  POST = "POST",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export type TError = {
  message: string;
  status: HttpStatusCode;
};

export type TDefaultResponse<TResponse = unknown> = {
  data: TResponse | null;
  error: TError | null;
};

export type HTTPRequest<TBody = unknown> = {
  endpoint: string;
  method: HTTPMethod;
  body?: TBody;
  headers?: Record<string, string>;
  params?: Record<string, string>;
};

export interface IHTTPClient {
  sendRequest<TResponse = unknown, TBody = unknown>(
    request: HTTPRequest<TBody>
  ): Promise<TDefaultResponse<TResponse>>;
}
