import { useState } from 'react';
import { Typography, Button } from '@mui/material';
import { HexColorPicker } from "react-colorful";

function TileColorChanger() {
    const [color, setColor] = useState("#aabbcc");
    return (
        <div>
            <Typography variant="h5" mb={3}>
            Pick color and click on any tile to fill the color
            </Typography>
            <Typography style={{ display: 'flex', justifyContent: 'center' }}>
                <HexColorPicker color={color} onChange={setColor} />
            </Typography>
        </div>
    );
}

export default TileColorChanger;