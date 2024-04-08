import { Button, Paper, Stack, Typography } from '@mui/material'
import AddBoxIcon from '@mui/icons-material/AddBox';
import './style.css'
import React from 'react'

export default function Card({title,price,image}) {
    return (
        <>

            <Stack component={Paper} maxWidth={{lg:"32%",md:"49%",sm:"32%",xs:"100%"}} borderRadius={"10px"}  width={"100%"} className='card-container'  >
                <Stack alignItems={"center"}>
                    <img className='product-img' src={'/assets/image/55.jpg'} alt="" />
                </Stack>
                <Stack p={1} gap={1}>
                    <Typography fontSize={"14px"}>پرتقال آبگیری شمال سبد 12 کیلویی</Typography>
                    <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"} >
                        <Typography color='primary' fontSize={"14px"}>۲۷۳٬۶۰۰ تومان</Typography>
                        <Button startIcon={<AddBoxIcon fontSize='large'/>}>افزودن</Button>
                    </Stack>
                </Stack>
            </Stack>

        </>
    )
}
