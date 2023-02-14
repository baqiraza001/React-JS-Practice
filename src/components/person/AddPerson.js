import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { memo, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

function AddPerson({ addNewPerson }) {
  console.log('Add New Person Function')
  const [text, setText] = useState('');
  const [age, setAge] = useState('');
  const [type, setType] = useState('student');

  const handleChange = (event) => {
    setText(event.target.value);
  }

  const handleType = (event) => {
    setType(event.target.value);
  }

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  }

  const addPerson = () => {
    if(text && age)
    {
      const newPerson = {
        id: Math.random().toString(16).slice(2),
        text,
        age,
        completed: false,
        type
      };
      addNewPerson(newPerson);
      setText('');
      setAge('');
      setType('student');
    }
  }

  const handleKeys = (event) => {
    if(event.keyCode == 13 && text.length >= 4 && age.length)
    addPerson();
  }

  return (
    <Box display="flex" px={2} justifyContent="space-between" alignItems="center">
      <Box flexGrow={1} mr={2}>
        <TextField size="small" value={text} onKeyUp={handleKeys} onChange={handleChange} label="Enter name" fullWidth variant="outlined" />
      </Box>
      <Box flexGrow={1} mr={2}>
        <TextField type="number" size="small" value={age} onKeyUp={handleKeys} onChange={handleAgeChange} label="Enter Age" fullWidth variant="outlined" />
      </Box>
      <Box mr={2}>
        <FormControl>
          <FormLabel>Prioriy</FormLabel>
          <RadioGroup row value={type} onChange={handleType}>
            <FormControlLabel value="student" label="Student" control={<Radio />} />
            <FormControlLabel value="teacher" label="Teacher" control={<Radio />} />
          </RadioGroup>
        </FormControl>
      </Box>
      <Button variant="contained" disabled={ text === '' || text.length < 4 || age === ''} size="large" startIcon={<AddIcon />} onClick={addPerson}> Add</Button>
    </Box>
  );
};

export default memo(AddPerson);