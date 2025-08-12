"use client";

import { createContext, useState } from "react";

interface AppContextType {
  username: string | undefined;
  setUsername: (username: string | undefined) => void;
}

export const AppContext = createContext({} as AppContextType);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [username, setUsername] = useState<string | undefined>(undefined);

  return (
    <AppContext.Provider value={{ username, setUsername }}>
      {children}
    </AppContext.Provider>
  );
}
