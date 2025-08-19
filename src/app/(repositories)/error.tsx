"use client";

import { RepositoriesListErrorPage } from "@/components";
import { ErrorPageParams } from "@/types";

export default function Error({ reset }: ErrorPageParams) {
  return <RepositoriesListErrorPage reset={() => reset()} />;
}
