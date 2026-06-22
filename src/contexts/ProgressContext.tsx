import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useState, useContext, useEffect } from 'react';
import { calcularLevel } from '../utils/calcularLevel'; 

type ProgressContextType = {
    xpTotal: number;
    nivel: number;
    addXp: (valor: number) => void;
    resetProgress: () => void; 
}

const ProgressContext = createContext<ProgressContextType>({
    xpTotal: 0,
    nivel: 1,
    addXp: () => {},
    resetProgress: () => {},
});

interface PropsProvider {
    children: React.ReactNode
}

export const ProgressProvider = ({ children }: PropsProvider ) => {
    
    const [xpTotal, setXpTotal] = useState<number>(0);

    const dadosLevel = calcularLevel(xpTotal);

    const getProgress = async () => {
        try {
            const value = await AsyncStorage.getItem('@aurora_xp');
            if(value !== null) {
                const xpSalvo = parseInt(value);
                setXpTotal(xpSalvo);
            }
        } catch (error) {
            console.log('Erro ao buscar o XP', error);
        }
    }

    const addXp = async (valor: number) => {
        try {
            const novoXp = xpTotal + valor;
            setXpTotal(novoXp);
            await AsyncStorage.setItem('@aurora_xp', novoXp.toString());
        } catch (error) {
            console.log('Erro ao salvar o novo XP', error);
        }
    }

    const resetProgress = async () => {
        try {
            await AsyncStorage.removeItem('@aurora_xp');
            setXpTotal(0);
        } catch (error) {
            console.log('Erro ao remover o XP', error);
        }
    }

    useEffect(() => {
        getProgress();
    }, []);

    return (
        <ProgressContext.Provider value={{ 
            xpTotal, 
            nivel: dadosLevel.nivel,             
            addXp, 
            resetProgress 
        }}>
            {children}
        </ProgressContext.Provider>
    );
}

export const useProgress = () => useContext(ProgressContext);