import { Box,Checkbox,FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup } from '@mui/material';

function ToDoPersons({ show, setShow, hideCompleted, setHideCompleted }) {

    const handleShow = (event) => {
        setShow(event.target.value);
    }
    
    const handleHideCompleted = (event) => {
        setHideCompleted(event.target.checked);
    }
    

  return (
    <Box display="flex" justifyContent="space-between" px={2} mt={5}>
        <Box>
            <FormGroup>
                <FormControlLabel label="Hide Completed" control={<Checkbox onChange={handleHideCompleted} checked={hideCompleted} />}/>
            </FormGroup>
        </Box>
        <Box>
            <FormControl>
                <FormLabel>Show</FormLabel>
                <RadioGroup row value={show} onChange={handleShow}>
                    <FormControlLabel value="all" label="All" control={<Radio />} />
                    <FormControlLabel value="student" label="Student" control={<Radio />} />
                    <FormControlLabel value="teacher" label="Teacher" control={<Radio />} />
                </RadioGroup>
            </FormControl>
        </Box>
    </Box>
  );
};

export default ToDoPersons;