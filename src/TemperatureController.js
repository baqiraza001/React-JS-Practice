import { Box } from "@mui/system";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useEffect, useState } from "react";

function TemperatureController() {

    const [temperature, setTemperature] = useState(0);
    const [color, setColor] = useState('blue');

    const handleIncreaseTemperature = () => {
        setTemperature(temperature + 1);
    }

    const handleDecreaseTemperature = () => {
        setTemperature(temperature - 1);
    }

    useEffect(() => {
        if(temperature >= 16)
            setColor('red');
        else
            setColor('blue');
    });

    return (
        <Box display="flex" justifyContent="center" alignItems="center">
            <Card sx={{ maxWidth: 500, backgroundColor: '#1976d2' }}>
                <CardContent>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            m: 1,
                            width: 200,
                            height: 200,
                            backgroundColor: color,
                            color: 'white',
                            border: `2px solid white`,
                            borderRadius: '50%'
                        }}
                    >
                        <Typography variant="h1">{temperature}°C</Typography>
                    </Box>
                </CardContent>
                <CardActions sx={{ "justifyContent": "center", }}>
                    <IconButton size='large' sx={{ color: "white" }} onClick={handleIncreaseTemperature}>
                        <AddCircleOutlineIcon sx={{ "fontSize": "45px" }}/>
                    </IconButton>
                    <IconButton size='large' sx={{ color: "white" }} onClick={handleDecreaseTemperature}>
                        <RemoveCircleOutlineIcon sx={{ "fontSize": "45px" }}/>
                    </IconButton>
                </CardActions>
            </Card>
        </Box>
    )
}

export default TemperatureController