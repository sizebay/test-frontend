import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import useUserRepo from '@/hooks/useUserRepo';

const createWrapper = () => {
  const client = new QueryClient();
  return ({ children }: any) => (
    <QueryClientProvider client={client}>{children}</QueryClientProvider>
  );
};

beforeEach(() => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => [{ id: 1, name: 'repo-1', owner: { login: 'octocat', avatar_url: '' } }],
  } as any);
});

test('busca repositórios do usuário', async () => {
  const { result } = renderHook(() => useUserRepo('octocat', 1, 12), {
    wrapper: createWrapper(),
  });

  await waitFor(() => expect(result.current.isLoading).toBe(false));
  expect(result.current.data?.[0]?.nome || result.current.data?.[0]?.usuario).toBeDefined();
});
