import { HTMLAttributes } from "react";

export type PageProps = HTMLAttributes<HTMLDivElement>;

export function Page(props: PageProps) {
  return <main {...props} className="h-screen w-screen bg-background" />;
}

export function PageBody(props: PageProps) {
  return (
    <div
      {...props}
      className="flex flex-col gap-4 w-full h-full items-center justify-start py-6 px-2 sm:px-0 mx-auto max-w-full sm:max-w-5/6 lg:max-w-5xl"
    />
  );
}
