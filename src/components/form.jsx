import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import SimpleAccordion from './accordion';
import Checkbox from '@mui/material/Checkbox';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';


const styles = {
  inputs: {
    flex: 1,
    width: '50rem',
    height: '60rem',
    flexDirection: 'column',
    justifyContent: 'space-between', //space-around
    marginTop: '2rem',
    marginLeft:  '10rem',
    paddingTop: '2rem',
    borderRadius: '25px',
    boxShadow: 'inset 13px 13px 26px #d0d0d0, inset -13px -13px 26px #f0f0f0'
  },
  radioButtonForm: {
    flexDirection: 'row',
    marginRight: '5rem',
    textAlign: 'center',
    marginLeft:  '12rem',
    paddingTop: '2rem',
  },
  submitButton: {
    width: '15rem',
    marginTop: '3rem',
    marginLeft: '18rem',
    backgroundColor: '#524847'
  },
  checkBox: {
    marginLeft: '16rem' 
  },
    
  // a: {
  //   background: 'linearradient(145deg, #c3c2d6, #e8e7ff)',
  //   boxShadow: '19px 19px 32px #c3c2d6, -19px -19px 32px #efeeff'
  // }
};



export default function BasicTextFields() {

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const [address, setAddress] = useState("");
  const [menu, setMenu] = useState("");
  const [price, setPrice] = useState(0);
  const [introduce, setIntroduce] = useState("");
  const [isExperienced, setIsExperienced] = useState(true);
  const [isAgreed, setIsAgreed] = useState(false);

  const ownersCollectionRef = collection(db, "owners")
  
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(isExperienced); // Replace with code to send data to backend
  // };

  const handleIsAgreedChange = (event) => {
    setIsAgreed(event.target.checked);
  };

  const handleAnswerChange = (event) => {
    setIsExperienced(event.target.value);
  };

  const submit = async (event) => {
    
    try {
      await addDoc(ownersCollectionRef, {
        name: name,
        mobile: mobile,
        email: email,
        restaurantName: restaurantName,
        address: address,
        menu: menu,
        price: price,
        introduce: introduce,
        isAgreed: isAgreed,
        isExperienced: isExperienced
      });
    } catch (err) {
      console.error(err);
    }
    event.preventDefault();
    if (isAgreed) {
      // Replace with code to log the user in
      console.log("Logged in");
      event.preventDefault();
      // Replace with code to send data to backend
      window.location.reload(); // Refresh the page
    } else {
      alert("Please confirm that you want to login.");     
    }
  };

  
  return (
    <form className="form">
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '60ch' },
        }}
        noValidate
        autoComplete="off"
        style={styles.inputs}
      >
        {/* Basic form */}
        <TextField style={styles.a } id="name" label="대표님 성함" variant="outlined" onChange={(e) => setName(e.target.value)} />
        <TextField style={styles.a} id="mobil" label="핸드폰 번호" variant="outlined" onChange={(e) => setMobile(e.target.value)}/>
        <TextField style={styles.a} id="email" label="이메일" variant="outlined" onChange={(e) => setEmail(e.target.value)}/>
        <TextField style={styles.a} id="restaurantName" label="매장 상호명" variant="outlined" onChange={(e) => setRestaurantName(e.target.value)}/>
        <TextField style={styles.a} id="address" label="매장 주소" variant="outlined" onChange={(e) => setAddress(e.target.value)}/>
        <TextField style={styles.a} id="menu" label="인기매뉴" variant="outlined" onChange={(e) => setMenu(e.target.value)}/>
        <TextField style={styles.a} id="price" label="인기매뉴 가격" variant="outlined" onChange={(e) => setPrice(e.target.value)}/>
        <TextField
          id="outlined-multiline-static"
          label="간단한 매장 소개"
          multiline              
          rows={4}
          defaultValue=""
          style={ styles.a }
          onChange={(e) => setIntroduce(e.target.value)}
        />
        {/* Basic form */}

        {/* Experience of online Ads - Radio box*/}
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" styles={styles.radioButtonForm}>나는 온라인 광고를 해본 경험이 ..
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            style={{paddingLeft: '14rem'}}
          >
            <FormControlLabel value="yes" control={<Radio />} label="있다" checked={isExperienced === 'yes'} onChange={handleAnswerChange}/>
            <FormControlLabel value="no" control={ <Radio /> } label="없다" checked={ isExperienced === 'no' } onChange={ handleAnswerChange } />   
          </RadioGroup>
        </FormControl>

       

        {/* Experience of online Ads - Radio box*/}
        
        {/* Agreement */}
          <SimpleAccordion/>
        {/* Agreement */ }
        
        {/* Agreement - Check Box*/ }
        <FormGroup onSubmit={submit} >
          <FormControlLabel control={<Checkbox defaultChecked style={styles.checkBox}/>} label="
              개인정보 수집 동의서를 읽었으며 동의 합니다."
              checked={ isAgreed }
              onChange={ handleIsAgreedChange } 
          />

          <Button 
              onClick={ submit }
              variant="contained"
              style={ styles.submitButton }>
            제출
          </Button>
          
        </FormGroup>
        {/* Agreement - Check Box*/ }

      </Box>
      </form>
    
    
  );
}