import { api } from "@/services/api";
import { getGithubRepositories } from "@/services/queries/get-repositories";

jest.mock("@/services/api");

describe("getGithubRepositories", () => {
  it("should return repositories correctly", async () => {
    (api.get as jest.Mock).mockResolvedValue({ data: [{ id: 1 }] });
    const result = await getGithubRepositories("filipediaslima");
    expect(result).toEqual([{ id: 1 }]);
  });

  it("should handle errors correctly", async () => {
    (api.get as jest.Mock).mockRejectedValue(new Error("Erro"));
    await expect(getGithubRepositories("blablalsla")).rejects.toThrow("Erro");
  });
});
