import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

function Sidebar() {
    const items = [
        'Prácticas',
        'Mi Perfil',
        'Ofertas',
        'Empresas',
        'Estadísticas',
        'Historial Postulaciones'
    ];

    return (
        <div style={{ width: '200px', backgroundColor: '#333', color: '#FFF', padding: '10px' }}>
            <Typography variant="h6" gutterBottom>
                Sistema de Prácticas
            </Typography>
            <List>
                {items.map((item, index) => (
                    <ListItem button key={index} sx={{ color: index === 0 ? '#FF5722' : '#FFF' }}>
                        <ListItemText primary={item} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default Sidebar;
