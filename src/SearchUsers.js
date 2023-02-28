import * as React from 'react';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import { Alert, Button, CircularProgress, Typography } from '@mui/material';
import SingleUser from './SingleUser';
import { useState } from 'react';
import FormHelperText from '@mui/material/FormHelperText';

function SearchUsers() {
    
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [error, setError] = useState("");

    const handleChange = (event) => {
        setQuery(event.target.value);
    }

    const fetchResults = async (query) =>  {
        try {
          const response = await fetch(`https://api.github.com/search/users?q=${query}&per_page=5`);
          const json = await response.json();
          return json.items || [];
        } catch (e) {
            setError(e);
        }
    }

    const handleSearchSubmit = async (event) =>  {
        event.preventDefault();
        const results = await fetchResults(query);
        setResults(results);
      }

    return (
        <Box sx={{ width: '50%' }} mx="auto" mt={10}>
            <Typography variant="h2" gutterBottom>Github Search Users</Typography>
            <Box component="form" noValidate autoComplete="off" >
                <FormControl size='small' sx={{ width: '300px'}}>
                    <OutlinedInput placeholder="Search users" onChange={handleChange}/>
                    <FormHelperText>{error}</FormHelperText>
                </FormControl>
                <Button onClick={handleSearchSubmit} variant="contained" sx={{ minWidth: "200px", marginTop: '2px', marginLeft: "20px" }} >Search</Button>
            </Box>
            {
                !results.length && <CircularProgress />
            }
            {
                results.length ? results.map( user => {
                    return <SingleUser user={user} />
                })
                :
                <Box sx={{ "display": "flex", justifyContent: "center", width: "100%" }}>
                    <Alert severity="info" sx={{ textAlign: "center", marginTop: "10px" }}>No users found</Alert>
                </Box>
            }
        </Box>
  );
}

export default SearchUsers;