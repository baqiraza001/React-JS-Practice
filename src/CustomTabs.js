import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" id="simple-tab-0" aria-controls="simple-tabpanel-0" />
          <Tab label="Item two" id="simple-tab-1" aria-controls="simple-tabpanel-1" />
          <Tab label="Item three" id="simple-tab-2" aria-controls="simple-tabpanel-2" />
        </Tabs>
      </Box>
      <div
      role="tabpanel"
      hidden={value !== 0}
      id={`simple-tabpanel-${0}`}
      aria-labelledby={`simple-tab-${0}`}
    >
      {value === 0 && (
        <Box sx={{ p: 3 }}>
          <Typography>tab 1</Typography>
        </Box>
      )}
    </div>

    <div
      role="tabpanel"
      hidden={value !== 1}
      id={`simple-tabpanel-${1}`}
      aria-labelledby={`simple-tab-${1}`}
    >
      {value === 1 && (
        <Box sx={{ p: 3 }}>
          <Typography>tab 2</Typography>
        </Box>
      )}
    </div>


    <div
      role="tabpanel"
      hidden={value !== 2}
      id={`simple-tabpanel-${2}`}
      aria-labelledby={`simple-tab-${2}`}
    >
      {value === 2 && (
        <Box sx={{ p: 3 }}>
          <Typography>tab 3</Typography>
        </Box>
      )}
    </div>
    </Box>
  );
}