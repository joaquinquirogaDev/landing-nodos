import React from 'react';

export default function Header({ scrollToComponent }) {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <button onClick={scrollToComponent}>
              Ir al Componente Específico
            </button>
          </li>
          {/* Otros enlaces en el encabezado */}
        </ul>
      </nav>
    </header>
  );
}
