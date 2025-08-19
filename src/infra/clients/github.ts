import { HTTPClient } from "../http";

export class GithubHTTPClient extends HTTPClient {
  constructor() {
    super({ baseUrl: process.env.GITHUB_API_URL });
  }
}
