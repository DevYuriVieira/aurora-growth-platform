import React, { createContext, useState, useContext, ReactNode } from 'react';

type NotificationContextType = {
  notificacoesNaoLidas: number;
  adicionarNotificacao: () => void;
  limparNotificacoes: () => void;
};

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [notificacoesNaoLidas, setNotificacoesNaoLidas] = useState<number>(0);

  const adicionarNotificacao = () => {
    setNotificacoesNaoLidas((prev) => prev + 1);
  };

  const limparNotificacoes = () => {
    setNotificacoesNaoLidas(0);
  };

  return (
    <NotificationContext.Provider value={{ notificacoesNaoLidas, adicionarNotificacao, limparNotificacoes }}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification deve ser usado dentro de um NotificationProvider');
  }
  return context;
}