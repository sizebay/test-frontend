"use client";

import { RepositoryDetailErrorPage } from "@/components/pages/repository-detail-error-page copy";
import { ErrorPageParams } from "@/types";

export default function Error({ reset }: ErrorPageParams) {
  return <RepositoryDetailErrorPage reset={() => reset()} />;
}
