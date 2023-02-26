import Slider from '@mui/material/Slider';
import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import { useState } from 'react';

function BmiRangeSlider({ title, unit, minValue, maxValue, value, setValue }) {

    function handleChange(event) {
        setValue(event.target.value)
    }
      
    return (
        <Box sx={{ "textAlign": "left" }}>
            <Typography gutterBottom>
                {title}: {value} {unit}
            </Typography>
            <Slider
                onChange={handleChange}
                step={1}
                min={minValue}
                max={maxValue}
            />
        </Box>
    );
}

export default BmiRangeSlider;