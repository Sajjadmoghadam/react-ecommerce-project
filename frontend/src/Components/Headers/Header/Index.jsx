import { Button, Stack } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import React from 'react';
import './style.css'

const Header = () => {
    return (
        <>

            <Stack direction={'row-reverse'} padding={'12px'} sx={{ backgroundColor: 'transparent'}}>
                <Stack><img className='white-logo' src="/assets/Image/logo.svg" alt="" /></Stack>
                <Stack direction={'row'} spacing={3}>
                    <Button color='inherit' sx={{ fontSize: '12px', display: { md: 'block', xs: 'none' } }}> سوالات متداول</Button>
                    <Button color='inherit' sx={{ fontSize: '12px', display: { md: 'block', xs: 'none' } }}>دانلود اپلیکیشن</Button>
                    <Button color='inherit' sx={{ fontSize: '12px', border: '1px solid rgba(0, 0, 0, .12)' }} size='large' endIcon={<SupportAgentIcon fontSize='large' />}>021-86121307</Button>
                </Stack>
            </Stack>


        </>
    );
}

export default Header;
