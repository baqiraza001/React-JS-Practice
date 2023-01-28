import './App.css';
import Tile from './Tile';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';
import { Typography, Button } from '@mui/material';
import { HexColorPicker } from "react-colorful";

const styles = { 
  containerStyle: {
    width: '500px', border: '1px solid', padding: '20px',
  }
 };

const total_tiles = 25;

function App() {
  const [tileBackgroundColor, setTileBackgroundColor] = useState('orange');
  
  return (
    <div className='app'>
      <div className='wrapper' style={styles.containerStyle}>
        <ButtonGroup size="large" style={{  display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexWrap: 'wrap' }}>
          <Tile tileNumber={1} backgroundColor={tileBackgroundColor}/>
          <Tile tileNumber={2} backgroundColor={tileBackgroundColor}/>
          <Tile tileNumber={3} backgroundColor={tileBackgroundColor}/>
          <Tile tileNumber={4} backgroundColor={tileBackgroundColor}/>
          <Tile tileNumber={5} backgroundColor={tileBackgroundColor}/>
          <Tile tileNumber={6} backgroundColor={tileBackgroundColor}/>
          <Tile tileNumber={7} backgroundColor={tileBackgroundColor}/>
          <Tile tileNumber={8} backgroundColor={tileBackgroundColor}/>
          <Tile tileNumber={9} backgroundColor={tileBackgroundColor}/>
          <Tile tileNumber={10} backgroundColor={tileBackgroundColor}/>
          <Tile tileNumber={11} backgroundColor={tileBackgroundColor}/>
          <Tile tileNumber={12} backgroundColor={tileBackgroundColor}/>
          <Tile tileNumber={13} backgroundColor={tileBackgroundColor}/>
          <Tile tileNumber={14} backgroundColor={tileBackgroundColor}/>
          <Tile tileNumber={15} backgroundColor={tileBackgroundColor}/>
          <Tile tileNumber={16} backgroundColor={tileBackgroundColor}/>
          <Tile tileNumber={17} backgroundColor={tileBackgroundColor}/>
          <Tile tileNumber={18} backgroundColor={tileBackgroundColor}/>
          <Tile tileNumber={19} backgroundColor={tileBackgroundColor}/>
          <Tile tileNumber={20} backgroundColor={tileBackgroundColor}/>
          <Tile tileNumber={21} backgroundColor={tileBackgroundColor}/>
          <Tile tileNumber={22} backgroundColor={tileBackgroundColor}/>
          <Tile tileNumber={23} backgroundColor={tileBackgroundColor}/>
          <Tile tileNumber={24} backgroundColor={tileBackgroundColor}/>
          <Tile tileNumber={25} backgroundColor={tileBackgroundColor}/>
        </ButtonGroup>
      </div>
      <div className='tile-color-changer-wrapper' style={styles.containerStyle}>
        <div>
              <Typography variant="h5" mb={3}>
              Pick color and click on any tile to fill the color
              </Typography>
              <Typography style={{ display: 'flex', justifyContent: 'center' }}>
                  <HexColorPicker color={tileBackgroundColor} onChange={setTileBackgroundColor} />
              </Typography>
          </div>
      </div>
    </div>
  );
}

export default App;
