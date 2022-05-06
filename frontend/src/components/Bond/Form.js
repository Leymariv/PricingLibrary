import React, {useState} from 'react';
import axios from "axios"; 

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Form() {
    const [couponRate, setCouponRate] = useState()
    const [discountRate, setDiscountRate] = useState()
    const [maturityDate, setMaturityDate] = useState()
    const [faceValue, setFaceValue] = useState()
    const [couponPeriod, setCouponPeriod] = useState()


    const handleSubmit = async (e) => {
        e.preventDefault();
        inputs = {
            couponRate: couponRate,
            discountRate: discountRate,
            maturityDate: maturityDate,
            faceValue: faceValue,
            couponPeriod: couponPeriod,
        }
        await axios.post('/product/bond/', inputs);        
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Item>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField id="coupon-rate" variant="outlined" label="Coupon Rate" />
                            <TextField id="discount-rate" variant="outlined" label="Discount Rate" />
                            <TextField id="maturity-date" variant="outlined" label="Maturity Date" />
                            <TextField id="face-value" variant="outlined" label="Face Value" />
                            <TextField id="coupon-period" variant="outlined" label="Coupon Period" />
                            <Button type = "submit"> Submit </Button>
                        </form>
                    </Box>
                </Item>
            </Grid>
        </Grid>
    );
}

