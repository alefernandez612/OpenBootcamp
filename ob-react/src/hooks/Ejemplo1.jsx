import React, { useState } from 'react';

const Ejemplo1 = () => {

    const valorInicial = 0;
    const personaInicial = {
        nombre: 'Alejandro',
        email: 'ale@gmail.com'
    };

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    function incrementarContador() {
        setContador(contador + 1);
    }

    function actualizarPersona() {
        setPersona({
            nombre: 'Pepe',
            email: 'pepe@gmail.com'
        });
    }

    return (
        <div>
            <h1>Ejemplo de useState()</h1>
            <h2>CONTADOR: { contador }</h2>
            <h3>NOMBRE: { persona.nombre }</h3>
            <h4>EMAIL: { persona.email }</h4>

            {/* Bloque de botones para actualizar un estado */ }
            <button onClick={ incrementarContador }>Incrementar contador</button>
            <button onClick={ actualizarPersona }>Actualizar persona</button>
        </div>
    );
};

export default Ejemplo1;
