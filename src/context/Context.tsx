"use client"
import { createContext, useState } from "react";

interface contextProps {
  userEmail:string
  setUserEmail:(value: string)=>void
}

interface contextProviderProps {
    children: React.ReactNode;
}

const context = createContext<contextProps | null>(null)


  
const ContextProvider: React.FC<contextProviderProps> = ({ children }) => {

const [userEmail, setUserEmail] = useState<string>('');

    return (
        <context.Provider value={{ userEmail , setUserEmail }}>
        {children}
        </context.Provider>
    );
};

export {ContextProvider , context}