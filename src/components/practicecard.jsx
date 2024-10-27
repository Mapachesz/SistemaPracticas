import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function PracticeCard({ title, status, statusColor }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/bitacora');
    };
    return (
        <Card onClick={handleClick}  sx={{ backgroundColor: '#333', margin: '10px 0', display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
            <Typography variant="body1">{title}</Typography>
            <Typography variant="body2" style={{ color: statusColor }}>{status}</Typography>
        </Card>
    );
}

export default PracticeCard;
