import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import { useRef } from "react";
import { useEffect } from 'react';

function ConverterBox({ converterValue, converterName, handleChange, focused }) {
    const inputRef = useRef();

    const handleFocus = () => {
        inputRef.current.select();
    }
    
    useEffect(() => {
        // if(focused
            // inputRef.current.focus()
    }, []);

  return (
    <div>
        <Box sx={{ width: '275px', 'textAlign': 'center', margin: 'auto 25px' }}>
            <Card variant="outlined">
                <React.Fragment>
                    <CardContent sx={{ padding: 0 }}>
                        <input
                            style={{ height: '100px', width: '275px', outline: 0,  border: '0', textAlign: 'center', fontWeight: '500', fontSize: '20px' }}
                            value={converterValue}
                            onChange={handleChange}
                            ref={inputRef}
                            onFocus={handleFocus}
                        />
                    </CardContent>
                    <CardActions sx={{ backgroundColor: '#f8f9fa' }}>
                        <Typography>{converterName}</Typography>
                    </CardActions>
                </React.Fragment>
            </Card>
        </Box>


        
    </div>
  );
};

export default ConverterBox;