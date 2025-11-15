// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { checkAuthStatus } from '../api/auth';
// Importujemy 'ReactNode' do typowania 'children'
import type { ReactNode } from 'react';

// ... (Typy AuthContextType bez zmian) ...
type AuthContextType = {
  token: string | null;
  status: 'pending' | 'authenticated' | 'unauthenticated';
  signIn: (newToken: string) => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// --- POPRAWIONA SKŁADNIA ---

// 1. Definiujemy typ Props dla naszego Providera
type AuthProviderProps = {
  children: ReactNode;
};

// 2. Używamy 'function' i jawnie typujemy 'props'
export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | null>(null);
  
  const { data: initialToken, status: queryStatus } = useQuery({
    queryKey: ['authStatus'],
    queryFn: checkAuthStatus,
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  useEffect(() => {
    if (queryStatus === 'success') {
      setToken(initialToken ?? null);
    }
  }, [queryStatus, initialToken]);

  const signIn = (newToken: string) => {
    setToken(newToken);
  };

  const signOut = () => {
    setToken(null);
  };
  
  const getStatus = (): AuthContextType['status'] => {
    if (queryStatus === 'pending') {
      return 'pending';
    }
    return token ? 'authenticated' : 'unauthenticated';
  };

  return (
    <AuthContext.Provider 
      value={{ token, status: getStatus(), signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// ... (Hook useAuth bez zmian) ...
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};