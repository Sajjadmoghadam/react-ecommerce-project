import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import HandshakeIcon from '@mui/icons-material/Handshake';
import React from 'react';
import "./style.css"

const Footer = () => {
    return (
        <>
            <Stack  justifyContent={'center'} alignItems={'center'}>
                <Stack width={"1200px"} flexDirection={'row'} justifyContent={'space-between'}>
                    <Stack color={'secondary.main'} alignItems={'center'} flexDirection={"row-reverse"} gap={1}><Typography variant='h3' color={"secondary.main"} fontSize={"18px"}>سفارش آسان</Typography> <LocalCafeIcon fontSize='large' /> </Stack>
                    <Stack color={'secondary.main'} alignItems={'center'} flexDirection={"row-reverse"} gap={1}><Typography variant='h3' color={"secondary.main"} fontSize={"18px"}>قیمت شفاف</Typography> <LocalCafeIcon fontSize='large' /> </Stack>
                    <Stack color={'secondary.main'} alignItems={'center'} flexDirection={"row-reverse"} gap={1}><Typography variant='h3' color={"secondary.main"} fontSize={"18px"}>خرید بهینه</Typography> <HandshakeIcon fontSize='large' /> </Stack>
                    <Stack color={'secondary.main'} alignItems={'center'} flexDirection={"row-reverse"} gap={1}><Typography variant='h3' color={"secondary.main"} fontSize={"18px"}>ضمانت کیفیت</Typography> <LocalCafeIcon fontSize='large' /> </Stack>
                    
                    
                </Stack>
            </Stack>
            <Stack bgcolor={'primary.main'} justifyContent={'center'} alignItems={'center'}>
                <Stack width={"1200px"} flexDirection={'row'} margin={4}>

                    <Grid container spacing={2}>

                        <Grid item xs={4} p={"12px"} >
                            <Stack spacing={2}>
                                <Typography variant='h3' fontSize={'21px'}>درباره تازه بار</Typography>
                                <Typography textAlign={'justify'} >همه ما می‌دانیم که یک غذای خوب از مواد اولیه تازه و با کیفیت تهیه می‌شود و تازه بار اولین پلتفرم B2B با هدف تهیه محصولات تازه در ایران است که مواد اولیه رستواران‌، فست‌فود، کافی‌شاپ و آشپزخانه‌ها و همچنین مشتریان خانگی را به صورت مستقیم از کشاورزان تامین و در نهایت رعایت پروتکل‌های بهداشتی به مشتریان خود ارائه می‌کند.</Typography>
                                <Stack flexDirection={"row"} gap={2}>
                                    <Button sx={{ color: "#FFF" }} startIcon={<PhoneEnabledIcon/>} >021-86121307</Button>
                                    <Button sx={{ color: "#FFF" }} startIcon={<EmailIcon/>}>info@tazebar.com</Button>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={2} p={"12px"}>
                            <Stack spacing={2}>
                                <Typography variant='h3' fontSize={'21px'}>بیشتر بدانید</Typography>
                                <Stack>
                                    <Button sx={{ color: "#FFF" ,alignSelf:'flex-start'}} startIcon={<ArrowBackIosNewIcon />}>درباره ما</Button>
                                    <Button sx={{ color: "#FFF" ,alignSelf:'flex-start'}} startIcon={<ArrowBackIosNewIcon />}>تماس با ما </Button>
                                    <Button sx={{ color: "#FFF" ,alignSelf:'flex-start'}} startIcon={<ArrowBackIosNewIcon />}>پرسش های متداول</Button>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={2} p={"12px"}>
                            <Stack spacing={2}>
                                <Typography variant='h3' fontSize={'21px'}>صفحات ما</Typography>
                                <Stack>
                                    <Button sx={{ color: "#FFF" ,alignSelf:'flex-start'}} startIcon={<ArrowBackIosNewIcon />}>ثبت شکایات</Button>
                                    <Button sx={{ color: "#FFF" ,alignSelf:'flex-start'}} startIcon={<ArrowBackIosNewIcon />}>حریم خصوصی</Button>
                                    <Button sx={{ color: "#FFF" ,alignSelf:'flex-start'}} startIcon={<ArrowBackIosNewIcon />}>قوانین و مقررات</Button>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={4} p={"12px"}>
                            <Stack flexDirection={"row"} justifyContent={"end"} gap={2}>
                                <Box><img className='enamad-logo' src="/assets/image/enamad.png" alt="" /></Box>
                                <Box><img className='samandehi-logo' src="/assets/image/samandehi.png" alt="" /></Box>
                            </Stack>
                        </Grid>

                    </Grid>

                </Stack>
            </Stack>

        </>
    )
}

export default Footer;
