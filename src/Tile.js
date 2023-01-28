import { useState } from 'react';
import Button from '@mui/material/Button';

function Tile ({ tileNumber, backgroundColor }) {
    const [activeColor, setActiveColor] = useState('');
    const handleClick = () => {
        setActiveColor(backgroundColor);
    };
    return (
        <Button 
            onClick={handleClick}
            variant="contained"
            sx={{ width: '100px', border: `1px solid ${activeColor}`, borderRadius: 0, backgroundColor: `${activeColor}`, borderColor: ''}}
            >
            Tile {tileNumber}
        </Button>
    );
}

export default Tile;