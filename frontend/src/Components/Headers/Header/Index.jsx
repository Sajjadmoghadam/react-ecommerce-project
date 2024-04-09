import { Button, Link, Stack } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import React from 'react';
import './style.css'
import { useLocation } from 'react-router-dom';

const Header = () => {
    const { pathname } = useLocation()
    const isHome = pathname !== "/" ? true : false

    return (
        <>

            <Stack padding={'12px'} zIndex={2} sx={{ backgroundColor: 'transparent', position: "absolute", top: "0", left: "0", right: "0" }}>
                <Stack flexDirection={"row"} justifyContent={"space-between"} sx={{ width: isHome ? "1200px" : "100%", margin: isHome && "0 auto" }}>
                    <Stack mx={3}><img className='white-logo' src={isHome ? "/assets/image/logo1.svg" : "/assets/image/logo.svg"} alt="" /></Stack>
                    <Stack direction={'row'} spacing={3}>
                        <Button sx={{ fontSize: '12px', display: { md: 'block', xs: 'none' }, color: isHome ? "white" : "inherit", borderColor: isHome && "#fff" }}><Link href="/application" color="inherit" underline='none'>دانلود اپلیکیشن</Link></Button>
                        <Button sx={{ fontSize: '12px', display: { md: 'block', xs: 'none' }, color: isHome ? "white" : "inherit", borderColor: isHome && "#fff" }}><Link href="/faq" color="inherit" underline='none'> سوالات متداول</Link></Button>
                        <Button sx={{ fontSize: '12px', border: '1px solid rgba(0, 0, 0, .12)', color: isHome ? "white" : "inherit", borderColor: isHome && "#fff" }} size='large' endIcon={<SupportAgentIcon fontSize='large' />}>021-86121307</Button>
                    </Stack>
                </Stack>
            </Stack>


        </>
    );
}

export default Header;
