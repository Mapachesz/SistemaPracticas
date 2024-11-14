// OfertasContext.js
import React, { createContext, useContext, useState } from 'react';

const OfertasContext = createContext();

export const useOfertas = () => {
    return useContext(OfertasContext);
};

export const OfertasProvider = ({ children }) => {
    const [ofertas, setOfertas] = useState([]);

    const agregarOferta = (nuevaOferta) => {
        setOfertas([...ofertas, nuevaOferta]);
    };

    return (
        <OfertasContext.Provider value={{ ofertas, agregarOferta }}>
            {children}
        </OfertasContext.Provider>
    );
};
