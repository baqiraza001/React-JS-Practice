import { List, Typography } from '@mui/material';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import ToDoPersons from './ToDoPersons';
import AddPerson from './AddPerson';
import SinglePerson from './SinglePerson';

function Persons() {
  console.log('Persons Parent Function')

  const [persons, setPersons] = useState([]);
  const [show, setShow] = useState('all');
  const [hideCompleted, setHideCompleted] = useState(false);

  const addNewPerson = useCallback( (newPerson) => {
    setPersons((prevPersons) => {
      return [newPerson, ...prevPersons];
    })
  }, []); 
 
  const removePerson = useCallback(
    (PersonId) => {
      setPersons(
        (prevPersons) => {
          const newPersons = prevPersons.filter( person => person.id === PersonId ? false : true );
          return newPersons;
        });
    },
    []
  );

  const toggleProceed = useCallback(
    (personId) => {
      setPersons(
        (prevPersons) => {
          let newPersons = prevPersons.map( person => {
            if(person.id !== personId)
              return person;
            else
            {
              return { ...person, completed: !person.completed }
            }
          });
          return newPersons;
        });
    },
    []
  );
    
    
  const filteredPersons = useMemo(() => {
    let newFilteredPersons = persons.filter( item => {
      if(hideCompleted === true && item.completed == true) return false;
      if(show === 'student' && item.type !== 'student') return false;
      if(show === 'teacher' && item.type !== 'teacher') return false;
      
      return true;
    });  
    return newFilteredPersons;

  }, [show, hideCompleted, persons]);

  useEffect(() => {
    document.title = persons.length ? `Persons App (${persons.length})` : 'Persons App';
  }, [persons.length]);

  return (
    <div>
      <Typography variant="h5" my={3}>Persons List</Typography>
      <AddPerson addNewPerson={addNewPerson} />
      <ToDoPersons { ...{show, setShow, hideCompleted, setHideCompleted} }/>
      <List>
        {
          
          filteredPersons.map((person) => {return <SinglePerson key={person.id} person={person} toggleProceed={toggleProceed} removePerson={removePerson} /> })
        }
      </List>
    </div>
  );
};

export default Persons;