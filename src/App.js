import * as React from 'react';
import Box from '@mui/material/Box';
import logo from '../src/images/logo.png';
import Slideshow from './components/slideshow';
import SimpleAccordion from '../src/components/accordion';
import CheckboxLabels from '../src/components/checkbox';
import BasicTextFields from '../src/components/form';
import SubmitButton from '../src/components/button';
import 'react-slideshow-image/dist/styles.css'
import './App.css'; 


// import slide_1 from '../src/images/slide_1.jpg'


const styles = {
  main: {
    width: '70%',
    height: 'auto',
    alignText: 'center',
    backgroundColor: 'green',
    margin: '3rem auto'
  },
  // inputs: {

  inputText: {
      padding: "10px"
  },
  a: {
    width: '50%',
    backgroundColor: 'yellow'
  },
  

};

function App() {
  return (
    <div className="App" style={styles.main}>
      <div>
        <section>
          <Slideshow/>
        </section>
        <section className="one-fourth" style={styles.a}>
          <img src={logo} />
        </section>
        
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '60ch' },
          }}
          noValidate
          autoComplete="off"
          style={ styles.inputs }
          maxWidth="md"
        >

            <BasicTextFields />
        </Box>
          <SimpleAccordion/>
          <CheckboxLabels/>
          <SubmitButton/>
      
     
      
      </div>
      </div>
    
  );
}

export default App;
