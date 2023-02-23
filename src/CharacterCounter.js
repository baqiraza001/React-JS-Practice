import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

function CharacterCounter({ limit }) {
    const [value, setValue] = useState('');
    const characterLimit = limit - value.length;

    const handleChange = (event) => {
        setValue(event.target.value.slice(0, limit));
    }

    return (
        <Box>
            <TextField 
                disabled={value.length === limit || characterLimit < 0}
                value={value}
                onChange={handleChange}
                label=""
                multiline
                rows={10}
            />
            <Typography variant="body">{characterLimit}</Typography>
        </Box>
    );
}

export default CharacterCounter;