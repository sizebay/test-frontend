export type AsyncDynamicParams<T> = {
  params: Promise<Readonly<T>>;
};
