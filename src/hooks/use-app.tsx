"use client";

import { AppContext } from "@/contexts/app";
import { useContext } from "react";

export function useApp() {
  return useContext(AppContext);
}
