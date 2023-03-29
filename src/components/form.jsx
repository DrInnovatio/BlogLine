import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const styles = {
  inputs: {
    flex: 1,
    width: '55rem',
    height: '40rem',
    flexDirection: 'column',
    justifyContent: 'space-between', //space-around
    margin: '2rem auto',
    paddingTop: '2rem',
    borderRadius: '25px',
    boxShadow: 'inset 13px 13px 26px #d0d0d0, inset -13px -13px 26px #f0f0f0'
  },
  a: {
    background: 'linearradient(145deg, #c3c2d6, #e8e7ff)',
    boxShadow: '19px 19px 32px #c3c2d6, -19px -19px 32px #efeeff'
  }
};

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '60ch' },
      }}
      noValidate
      autoComplete="off"
      style={styles.inputs}
    >
      <TextField style={styles.a} id="outlined-basic" label="이름" variant="outlined" />
      <TextField style={styles.a} id="outlined-basic" label="핸드폰 번호" variant="outlined" />
      <TextField style={styles.a} id="outlined-basic" label="매장 상호명" variant="outlined" />
      <TextField style={styles.a} id="outlined-basic" label="매장 주소" variant="outlined" />
      <TextField style={styles.a} id="outlined-basic" label="인기매뉴" variant="outlined" />
      <TextField style={styles.a} id="outlined-basic" label="인기매뉴 가격" variant="outlined" />
      <TextField
        id="outlined-multiline-static"
        label="간단한 매장 소개"
        multiline              
        rows={4}
        defaultValue=""
        style={styles.a}
      />
    </Box>
  );
}