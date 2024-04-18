import React from 'react';
import { Typography,Stack,IconButton } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { addItems, removeItems } from '../../Store/Slices/CartSlice';
import { useDispatch } from 'react-redux';


const CartCard = ({product}) => {
    const dispatch=useDispatch()
    return (
        <>

            <Stack flexDirection={"row"} p={1} alignItems={"center"} sx={{ borderBottom: "1px solid #e5e5e5" }}>
                <Stack><img className='cartProductImg' src={product.image} alt="" /></Stack>
                <Stack width={"100%"}>
                    <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"} >
                        <Typography>{product.name}</Typography>
                        <IconButton><CancelIcon color='error' /></IconButton>
                    </Stack>
                    <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
                        <Stack sx={{ bgcolor: "black" }} flexDirection={"row"} borderRadius={"10px"} alignItems={"center"}>
                        <IconButton onClick={(e) => dispatch(addItems(product))}><AddBoxIcon sx={{ color: "white" }} fontSize='small' /></IconButton>
                                <Typography textAlign={"center"} sx={{ backgroundColor: "white", width: "20px" }}>{product.quantity}</Typography>
                                <IconButton onClick={(e) => dispatch(removeItems(product._id))}><IndeterminateCheckBoxIcon sx={{ color: "white" }} fontSize='small' /></IconButton>
                        </Stack>
                        <Typography className='login-span'>{product.price} تومان</Typography>
                    </Stack>
                </Stack>
            </Stack>

        </>
    );
}

export default CartCard;
