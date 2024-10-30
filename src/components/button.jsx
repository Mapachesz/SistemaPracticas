import React from 'react';
import Button from '@mui/material/Button';

function CustomButton({ text, onClick, variant = 'contained', color = 'primary' }) {
    return (
        <Button
            variant={variant}
            color={color}
            onClick={onClick}
            sx={{ margin: '10px' }} 
        >
            {text}
        </Button>
    );
}

export default CustomButton;