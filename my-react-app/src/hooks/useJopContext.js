import { JopContext } from "../context/JopContext";
import { useContext } from 'react';

export const useJopContext = () => {
    const context = useContext(JopContext);

    if (!context) {
        throw Error("JopContext must be used inside a JopsContextProvider");
    }

    return context;
};