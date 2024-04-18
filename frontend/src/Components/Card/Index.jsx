import { Button, Paper, Stack, Typography, IconButton } from '@mui/material'
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { useSelector, useDispatch } from 'react-redux';
import './style.css'
import React from 'react'
import { addItems, removeItems } from '../../Store/Slices/CartSlice';

export default function Card({ product }) {
    const item = useSelector(state => state.cart.cartList).filter(e => {
        if (e._id === product._id) {
            return true
        } else {
            return false
        }
    })[0]
    const dispatch = useDispatch()

    return (
        <>

            <Stack component={Paper} maxWidth={{ lg: "32%", md: "49%", sm: "32%", xs: "100%" }} borderRadius={"10px"} width={"100%"} className='card-container'  >
                <Stack alignItems={"center"}>
                    <img className='product-img' src={product.image} alt="" />
                </Stack>
                <Stack p={1} gap={1}>
                    <Typography fontSize={"14px"}>{product.name}</Typography>
                    <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"} >
                        <Typography color='primary' fontSize={"14px"}>{product.price} تومان</Typography>
                        {!item ?<Button onClick={(e) => dispatch(addItems(product))} startIcon={<AddBoxIcon fontSize='large' />}>افزودن</Button> :
                            <Stack sx={{ bgcolor: "black" }} flexDirection={"row"} borderRadius={"10px"} alignItems={"center"}>
                                <IconButton onClick={(e) => dispatch(addItems(product))}><AddBoxIcon sx={{ color: "white" }} fontSize='small' /></IconButton>
                                <Typography textAlign={"center"} sx={{ backgroundColor: "white", width: "20px" }}>{item.quantity}</Typography>
                                <IconButton onClick={(e) => dispatch(removeItems(product._id))}><IndeterminateCheckBoxIcon sx={{ color: "white" }} fontSize='small' /></IconButton>
                            </Stack>
                        }
                    </Stack>
                </Stack>
            </Stack>

        </>
    )
}
