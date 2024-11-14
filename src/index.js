import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot para React 18+
import { OfertasProvider } from './OfertasContext';  // Importa el contexto
import Layout from './components/layout';

import './stylesheets/index.scss';

// Asegúrate de que el elemento raíz existe en el HTML
document.body.innerHTML = '<div id="root"></div>';
const root = createRoot(document.getElementById('root')); // Usa createRoot en lugar de ReactDOM.render
root.render(
    <OfertasProvider> {/* Envuelve la aplicación con el proveedor */}
        <Layout />
    </OfertasProvider>
);
