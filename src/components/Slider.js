import { Button, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Slider({ images }) {
    const [imageIndex, setImageIndex] = useState(0);
    
    const handleNextImage = () => images[imageIndex+1] ? setImageIndex(imageIndex+1) : setImageIndex(0);  
    const handlePrevImage = () => images[imageIndex-1] ? setImageIndex(imageIndex-1) : setImageIndex(images.length - 1);  
    
    return (
        <Box mt={5} display="flex" justifyContent="center" alignItems="center">
            <Box position="relative" left={`40px`}>
                <IconButton onClick={handlePrevImage} color="primary" aria-label="Previous">
                    <ArrowBackIosNewIcon />
                </IconButton>
            </Box>
            <Box textAlign="center">
                <img src={images[imageIndex]} />
                <div>{imageIndex+1} of {images.length}</div>
            </Box>
            <Box position="relative" right={`40px`}>
                <IconButton onClick={handleNextImage} color="primary" aria-label="Previous">
                    <ArrowForwardIosIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Slider;