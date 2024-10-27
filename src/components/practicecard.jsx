import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function PracticeCard({ title, status, statusColor }) {
    return (
        <Card sx={{ backgroundColor: '#333', margin: '10px 0', display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
            <Typography variant="body1">{title}</Typography>
            <Typography variant="body2" style={{ color: statusColor }}>{status}</Typography>
        </Card>
    );
}

export default PracticeCard;
