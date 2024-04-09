import { Button, IconButton, InputAdornment, Link, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SearchIcon from '@mui/icons-material/Search';
import PieChartIcon from '@mui/icons-material/PieChart';
import DehazeIcon from '@mui/icons-material/Dehaze';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import './style.css'

const LoginHeader = () => {
    return (
    <>
    
    <Stack flexDirection={"row"} justifyContent={"space-between"} bgcolor={"#fff"} display={{md:"flex",xs:"none"}} height={"71px"} border={"1px solid #e5e5e5"} alignItems={"center"} position={"absolute"} top={0} right={0} left={0} zIndex={2}>
        <Stack flexDirection={"row"} alignItems={"center"}>
            <Stack width={"71px"}  alignItems={"center"} borderRight={"1px solid #e5e5e5"}><Button><Link href="/market"><img className='market-icon' src="assets/image/icon.svg" alt="" /></Link></Button></Stack>
            <Stack px={1}><Typography>0 تومان</Typography>
            <Button size='small' startIcon={<AddBoxRoundedIcon/>}>افزایش موجودی</Button></Stack>
        </Stack>
        <Stack alignItems={"center"} flexDirection={"row"} gap={1}>
            <TextField className='header-search' placeholder='جستجو در تازه بار...'  InputProps={{
                endAdornment:(
                    <InputAdornment position='end'>
                        <SearchIcon/>
                    </InputAdornment>
                )
            }}
            sx={{width:"250px"}}/>
            <Button color='inherit' sx={{ fontSize: '12px', border: '1px solid rgba(0, 0, 0, .12)' }} size='large' endIcon={<PieChartIcon fontSize='large' />}><Link  href="/dashboard" color={"inherit"} underline='none'>داشبورد مشتری</Link></Button>
            <Button color='inherit'  sx={{ fontSize: '12px', border: '1px solid rgba(0, 0, 0, .12)' }} size='large' endIcon={<AccountBalanceWalletIcon fontSize='large' />}><Link  href="/orders" color={"inherit"} underline='none'>سفارش ها</Link></Button>
            <Button color='inherit' sx={{ fontSize: '12px', border: '1px solid rgba(0, 0, 0, .12)' }} size='large' endIcon={<SupportAgentIcon fontSize='large' />}><Link  href="tel:02186121307" color={"inherit"} underline='none'>021-86121307</Link></Button>
            <IconButton color='inherit' size='large'> <DehazeIcon/> </IconButton>

        </Stack>
    </Stack>
    <Stack width={"100%"} display={{md:"none",xs:"flex"}} >
       <Stack flexDirection={"row "} gap={2} p={2} justifyContent={"space-between"} alignItems={"center"}> 
       <IconButton> <ViewHeadlineIcon sx={{fontSize:"50px" , color:"primary.main"}} /> </IconButton> 
        <TextField placeholder='جستجو در تازه بار ...' InputProps={{
            endAdornment:(
                <InputAdornment>
                        <SearchIcon/>
                </InputAdornment>
            )
        }}
        sx={{width:"100%"}}
        />
       </Stack>
    </Stack>
    
    </>
    );
}

export default LoginHeader;
