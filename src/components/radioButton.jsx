import React, {useState} from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


export default function RowRadioButtonsGroup() {

  const [isExperienced, setIsExperienced] = useState("");
  
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">나는 온라인 광고를 해본 경험이 ..</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="yes" control={<Radio />} label="있다" />
        <FormControlLabel value="no" control={<Radio />} label="없다" />  
      </RadioGroup>
    </FormControl>
  );
}