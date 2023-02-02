import { Typography } from '@mui/material';
import React from 'react';
import ConverterBox from './ConverterBox';
import { useState } from 'react';

function Converter({ title, formulaOneValue, formulaTwoValue, conveterOneTitle, convertTwoTitle }) {

  const [kilogram, setKilogramValue] = useState(1);
  const [pounds, setPoundsValue] = useState(formulaTwoValue);

  const handleKilogramChange = (event) => {
    setKilogramValue(event.target.value);
    if(!isNaN(event.target.value))
      setPoundsValue(
          Number( (event.target.value * formulaOneValue).toFixed(4) )
      )
  }
  
  const handlePoundsChange = (event) => {
    setPoundsValue(event.target.value);
    if(!isNaN(event.target.value))
      setKilogramValue(
          Number( (event.target.value * formulaTwoValue).toFixed(4) )
      )
  }

  return (
    <div style={{ marginTop: '50px' }}>
      <Typography variant="h5">{title}</Typography>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', alignItems: 'center' }}>
      <ConverterBox converterValue={kilogram} converterName={conveterOneTitle} handleChange={handleKilogramChange} focused="true"/> 
      <div style={{ fontSize: '20px' }}>=</div>
      <ConverterBox converterName={convertTwoTitle} converterValue={pounds} handleChange={handlePoundsChange} />
      </div>
    </div>
  );
};

export default Converter;