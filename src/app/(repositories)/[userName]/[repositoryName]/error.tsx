"use client";

import { RepositoryDetailErrorPage } from "@/components";
import { ErrorPageParams } from "@/types";

export default function Error(props: ErrorPageParams) {
  return <RepositoryDetailErrorPage {...props} />;
}
