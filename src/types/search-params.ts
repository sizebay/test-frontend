export type AsyncSearchParams = {
  searchParams: Promise<{
    search?: string;
    page?: number;
  }>;
};
