import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import FullWidthTextField from './form';

import { useStyles } from './style';


const CardWrap = (props) => {
  const classes = useStyles();

  const {text} = props;
  return (
    <Box className={classes.cardWrap}>
      <Card className={classes.cards}>
        <CardContent>
        <Typography> {text} </Typography>
        </CardContent>
        <CardContent>
         <Stack spacing={2} direction="row">
           <FullWidthTextField fieldText="Username"  placeholder="Username"/>
           <FullWidthTextField fieldText="ETH Address"  placeholder="ETH Address"/>
          </Stack>
        </CardContent>
        <CardContent>
         <Stack spacing={2} direction="row">
           <FullWidthTextField fieldText="Circle Name"  placeholder="Circle Name"/>
           <FullWidthTextField fieldText="Payment Amount"  placeholder="Payment Amount"/>
          </Stack>
        </CardContent>
        <CardContent>
         <Stack spacing={2} direction="row">
           <FullWidthTextField fieldText="Payment Interval"  placeholder="Payment Interval"/>
            {/* <Button className={classes.inputBtn} variant="outlined"> Fund </Button> */}
          </Stack>
        </CardContent>
        {/* <CardContent>
          <Stack spacing={2} direction="row">
           <FullWidthTextField fieldText="add address"  placeholder="0xfb83...b762"/>
           <Button className={classes.inputBtn} variant="outlined"> Add </Button>
          </Stack>
        </CardContent> */}
        {/* <CardActions>
          <Stack spacing={2} direction="column">
            <Button className={classes.btn} variant="outlined"> Fund </Button>
          </Stack>
        </CardActions> */}
      </Card>
    </Box>
  );
}

export default CardWrap;