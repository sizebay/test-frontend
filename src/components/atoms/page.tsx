import { HTMLAttributes } from "react";
import { Typography, TypographyProps } from "./typography";
import { cn } from "@/helpers";

export type PageProps = HTMLAttributes<HTMLDivElement>;

export function Page(props: PageProps) {
  return <main {...props} className="h-screen w-screen bg-background" />;
}

export type PageBodyProps = HTMLAttributes<HTMLDivElement>;

export function PageBody(props: PageBodyProps) {
  return (
    <div
      {...props}
      className={cn(
        "flex flex-col gap-4 w-full h-full items-center justify-start py-6 px-2 sm:px-0 mx-auto max-w-full sm:max-w-5/6 lg:max-w-5xl",
        props.className
      )}
    />
  );
}

export type PageTitleProps = TypographyProps;

export function PageTitle(props: PageTitleProps) {
  return (
    <Typography
      {...props}
      size="3xl"
      className="w-full text-left text-neutral-900 font-medium flex items-center justify-start gap-2"
    />
  );
}

export type PageHeaderProps = HTMLAttributes<HTMLDivElement>;

export function PageHeader(props: PageHeaderProps) {
  return (
    <div
      {...props}
      className="flex flex-col lg:flex-row gap-4 items-center justify-between w-full py-6 px-2 sm:px-0 mx-auto max-w-full sm:max-w-5/6 lg:max-w-5xl"
    />
  );
}
