import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const styles = {
  main: {
    marginLeft: '30%'
  },
  fontColor: {
    color: '#03fc35',
  }
}

export default function BasicCard() {
  return (
    <Card
      sx={ {
        minWidth: 250, backgroundColor: 'black'  }} style={styles.main}
       >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} style={styles.fontColor} gutterBottom>
          월 최저 관리비 11만원
        </Typography>
        <Typography variant="h5" component="div" style={styles.fontColor}>
          <p>광고가 필요하시면 일단 상담 신청해 주세요.</p>
          <p>업체를 선정하여 480만 원 상당의 광고료를 지원해 드립니다.</p>
        </Typography>
      </CardContent>
      
    </Card>
  );
}