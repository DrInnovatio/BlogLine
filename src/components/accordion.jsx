import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const styles = {
  main: {
    textAlign: 'left',
  },
  outside: {
    width: '45rem',
    paddingLeft: '2rem' 
  }
}

export default function SimpleAccordion() {

  return (
    <div style={styles.outside}>
      <Accordion>
        <AccordionSummary
          expandIcon={ <ExpandMoreIcon /> }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>1.개인정보 수집 및 이용 동의(필수)</Typography>
        </AccordionSummary>
        <AccordionDetails style={styles.main}>
          <h3>1)개인정보 수집/이용 목적</h3>
          <p>1. 온라인 광고  견적상담</p>
          <p>2. 서비스 제공에 관한 계약 이행</p>
          <p>3. 회원 관리</p>
          <p>4. 광고, 이벤트 및 프로모션</p>
          <p>5. 고충처리</p>
          <h3>2. 수집하려는 개인정보의 항목</h3>
          <p>이름, 휴대전화번호, 매장 이름, 매장 주소, 이메일</p>
          <h3>3. 개인정보 보유 및 이용기간</h3>
          <p>1. 동의일로부터 1년</p>
          <p>2. 서비스 공급완료 및 회원탈퇴 시</p>
          <hr/>
          <p>동의를 거부할 권리가 있으나, 위 사항에 동의하지 않을 경우 상담이 불가합니다.</p>
          <p>Mad_Ad 를 통하여 제공하는 서비스를 고객님이 이용하도록 하기 위해서 그 수집 및 이용이 필요한</p>
          <p>최소한의 개인정보이므로 해당 항목에 동의를 해 주셔야 서비스 이용이 가능합니다.</p>
        </AccordionDetails>
      </Accordion>
      {/*<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>2. 고유식별정보 수집/이용 동의(필수)</Typography>
        </AccordionSummary>
         <AccordionDetails>
          <Typography>
            <h3>2) 개인정보 수집/이용 목적</h3>
            <p>1. 온라인 광고 서비스에 대한, 계약 진행 및 체결</p>
            </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails> 
      </Accordion>*/}
    </div>
  );
}
