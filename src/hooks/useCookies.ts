"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export function useCookies<T>(key: string, initialValue: T) {
  // Estado para controlar se estamos no cliente
  const [isClient, setIsClient] = useState(false);

  // Estado para armazenar nosso valor
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  // Efeito para marcar que estamos no cliente e carregar dados dos cookies
  useEffect(() => {
    setIsClient(true);
    try {
      const item = Cookies.get(key);
      if (item) {
        setStoredValue(JSON.parse(item));
      }
    } catch (error) {
      console.error(`Error reading cookie key "${key}":`, error);
    }
  }, [key]);

  // Retorna uma versão empacotada da função setter do useState que persiste
  // o novo valor nos cookies.
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Permite que o valor seja uma função para que tenhamos a mesma API que useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      // Salva nos cookies apenas se estivermos no cliente
      if (isClient) {
        Cookies.set(key, JSON.stringify(valueToStore), {
          expires: 365, // Expira em 1 ano
          secure: process.env.NODE_ENV === "production", // HTTPS apenas em produção
          sameSite: "strict", // Proteção CSRF
        });
      }
    } catch (error) {
      console.error(`Error setting cookie key "${key}":`, error);
    }
  };

  return [storedValue, setValue] as const;
}
