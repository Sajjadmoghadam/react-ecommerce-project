import { Button, Paper, Stack, Typography } from '@mui/material'
import AddBoxIcon from '@mui/icons-material/AddBox';
import './style.css'
import React from 'react'

export default function Card({title,price,image}) {
    return (
        <>

            <Stack component={Paper} width={"250px"} height={"400px"} m={.5} justifyContent={"space-between"}>
                <Stack>
                    <img className='product-img' src={image} alt="" />
                </Stack>
                <Stack p={1} gap={1}>
                    <Typography fontSize={"14px"}>{title}</Typography>
                    <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"} >
                        <Typography color='primary' fontSize={"14px"}>{price} تومان</Typography>
                        <Button startIcon={<AddBoxIcon fontSize='large'/>}>افزودن</Button>
                    </Stack>
                </Stack>
            </Stack>

        </>
    )
}
