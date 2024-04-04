import { Button, Paper, Stack, Typography } from '@mui/material'
import AddBoxIcon from '@mui/icons-material/AddBox';
import './style.css'
import React from 'react'

export default function Card() {
    return (
        <>

            <Stack component={Paper} flexGrow={1}>
                <Stack>
                    <img className='product-img' src={""} alt="" />
                </Stack>
                <Stack p={1} gap={1}>
                    <Typography fontSize={"14px"}>پیاز سفید درشت بسته 10 کیلویی</Typography>
                    <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"} >
                        <Typography color='primary' fontSize={"14px"}>9800 تومان</Typography>
                        <Button startIcon={<AddBoxIcon fontSize='large'/>}>افزودن</Button>
                    </Stack>
                </Stack>
            </Stack>

        </>
    )
}
