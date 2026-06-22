import React, { createContext, useState, useContext, ReactNode } from 'react';

export type Notificacao = {
    id: string;
    titulo: string;
    mensagem: string;
    data: string;
    lida: boolean;
}

type NotificationContextType = {
    notificacoes: Notificacao[];
    notificacoesNaoLidas: number;
    adicionarNotificacao: (titulo: string, mensagem: string) => void;
    limparNotificacoes: () => void;
    marcarTodasComoLidas: () => void; 
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function NotificationProvider({ children }: { children: ReactNode }) {
    const [notificacoes, setNotificacoes] = useState<Notificacao[]>([]);

    const notificacoesNaoLidas = notificacoes.filter(n => !n.lida).length; 

    const adicionarNotificacao = (titulo: string, mensagem: string) => {
        const novaNotificacao: Notificacao = {
            id: Math.random().toString(36).substring(2, 9),
            titulo,
            mensagem,
            data: new Date().toLocaleString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
            lida: false
        };
        
        setNotificacoes((anteriores) => [novaNotificacao, ...anteriores]);
    };

    const limparNotificacoes = () => {
        setNotificacoes([]); 
    };

    const marcarTodasComoLidas = () => {
        setNotificacoes(anteriores => 
            anteriores.map(notificacao => ({ ...notificacao, lida: true }))
        );
    };

    return (
        <NotificationContext.Provider value={{ 
            notificacoes, 
            notificacoesNaoLidas, 
            adicionarNotificacao, 
            limparNotificacoes,
            marcarTodasComoLidas
        }}>
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