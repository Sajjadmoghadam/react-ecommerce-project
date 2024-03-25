import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <>

            <Stack bgcolor={'primary.main'} justifyContent={'center'} alignItems={'center'} height={'50px'}>
                <Stack width={"70%"} height={'50px'} bgcolor={'error.main'}>
                    <Stack>
                        <Typography variant='h3'>درباره تازه بار</Typography>
                        <Typography >همه ما می‌دانیم که یک غذای خوب از مواد اولیه تازه و با کیفیت تهیه می‌شود و تازه بار اولین پلتفرم B2B با هدف تهیه محصولات تازه در ایران است که مواد اولیه رستواران‌، فست‌فود، کافی‌شاپ و آشپزخانه‌ها و همچنین مشتریان خانگی را به صورت مستقیم از کشاورزان تامین و در نهایت رعایت پروتکل‌های بهداشتی به مشتریان خود ارائه می‌کند.</Typography>
                        <Stack>
                            <Button>021-86121307</Button>
                            <Button>info@tazebar.com</Button>
                        </Stack>
                    </Stack>
                    <Stack></Stack>
                    <Stack></Stack>
                    <Stack></Stack>

                </Stack>
            </Stack>

        </>
    )
}

export default Footer;
