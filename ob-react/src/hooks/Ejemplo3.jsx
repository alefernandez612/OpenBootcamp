import React, { useState, useContext } from 'react';

const miContexto = React.createContext(null);

const Componente1 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h1>
                El Token es: { state.token }
            </h1>
            <Componente2></Componente2>
        </div>
    );
};

const Componente2 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            La sesion es: { state.sesion }
        </div>
    );
};

export default function MiComponenteConContexto() {

    const estadoInicial = {
        token: '1234567',
        sesion: 1
    };

    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion() {
        setSessionData({
            token: '12345678',
            sesion: sessionData.sesion + 1
        });
    }

    return (
        <miContexto.Provider value={ sessionData }>
            <Componente1></Componente1>
            <button onClick={ actualizarSesion }>Actualizar Session</button>
        </miContexto.Provider>
    );
}



