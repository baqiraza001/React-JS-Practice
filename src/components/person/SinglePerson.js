import { memo } from "react";
import { CheckCircleOutline, Close as CloseIcon } from "@mui/icons-material";
import { IconButton, ListItem, ListItemText, Box, Chip } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function SinglePerson({ person, removePerson, toggleProceed }) {
  console.log('Single Person Function')
  return (
    <ListItem
      secondaryAction={
        <IconButton onClick={() => removePerson(person.id)}>
          <CloseIcon />
        </IconButton>
      }
    >
      <Box mr={2} onClick={() => toggleProceed(person.id)}>
        <IconButton>
          {person.completed ? <CheckCircleIcon style={{ "color": "green" }} fontSize="large"/> : <CheckCircleOutline style={{ "color": "green" }} fontSize="large"/>}
        </IconButton>
      </Box>
      <ListItemText primary={person.text} secondary={person.age} sx={{ "textDecoration": person.completed ? 'line-through' : ''  }}/>
      <Box mr={2}>
        <Chip sx={{ "paddingLeft": "15px", "paddingRight": "15px" }} color={person.type === "student" ? "info" : "secondary"} label={person.type} size="small" variant="filled"/>
      </Box>
    </ListItem>
  );
};

export default memo( SinglePerson );