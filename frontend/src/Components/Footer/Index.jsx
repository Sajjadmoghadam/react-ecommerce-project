import { Box, Button, ButtonGroup, Divider, Grid, IconButton, Stack, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EmailIcon from '@mui/icons-material/Email';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import HandshakeIcon from '@mui/icons-material/Handshake';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import React from 'react';
import "./style.css"

const Footer = () => {
    return (
        <>
            <Stack justifyContent={'center'} alignItems={'center'} p={2}>
                <Stack width={{ lg: "1180px",md:"100%", xs: "90%" }} flexDirection={'row'} flexWrap={"wrap"} justifyContent={'space-between'}>
                    <Stack color={'secondary.main'} alignItems={'center'} flexDirection={"row-reverse"} gap={1}><Typography variant='h3' color={"secondary.main"} fontSize={"18px"}>سفارش آسان</Typography> <LocalCafeIcon fontSize='large' /> </Stack>
                    <Stack color={'secondary.main'} alignItems={'center'} flexDirection={"row-reverse"} gap={1}><Typography variant='h3' color={"secondary.main"} fontSize={"18px"}>قیمت شفاف</Typography> <PointOfSaleIcon fontSize='large' /> </Stack>
                    <Stack color={'secondary.main'} alignItems={'center'} flexDirection={"row-reverse"} gap={1}><Typography variant='h3' color={"secondary.main"} fontSize={"18px"}>خرید بهینه</Typography> <HandshakeIcon fontSize='large' /> </Stack>
                    <Stack color={'secondary.main'} alignItems={'center'} flexDirection={"row-reverse"} gap={1}><Typography variant='h3' color={"secondary.main"} fontSize={"18px"}>ضمانت کیفیت</Typography> <CheckCircleIcon fontSize='large' /> </Stack>


                </Stack>
            </Stack>
            <Stack bgcolor={'primary.main'} justifyContent={'center'} alignItems={'center'}>
                <Stack width={{ lg: "1180px", xs: "100%" }} flexDirection={'row'} margin={4} px={{lg:"0" ,xs :3}}>

                    <Grid container spacing={2}>

                        <Grid item lg={4} xs={12} p={"12px"} >
                            <Stack spacing={2}>
                                <Typography variant='h3' fontSize={'21px'}>درباره تازه بار</Typography>
                                <Typography textAlign={'justify'} >همه ما می‌دانیم که یک غذای خوب از مواد اولیه تازه و با کیفیت تهیه می‌شود و تازه بار اولین پلتفرم B2B با هدف تهیه محصولات تازه در ایران است که مواد اولیه رستواران‌، فست‌فود، کافی‌شاپ و آشپزخانه‌ها و همچنین مشتریان خانگی را به صورت مستقیم از کشاورزان تامین و در نهایت رعایت پروتکل‌های بهداشتی به مشتریان خود ارائه می‌کند.</Typography>
                                <Stack flexDirection={"row"} gap={2} flexWrap={'wrap'}>
                                    <Button sx={{ color: "#FFF" }} startIcon={<PhoneEnabledIcon />} >021-86121307</Button>
                                    <Button sx={{ color: "#FFF" }} startIcon={<EmailIcon />}>info@tazebar.com</Button>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item lg={2} sm={4} xs={6} p={"12px"}>
                            <Stack spacing={2}>
                                <Typography variant='h3' fontSize={'21px'}>بیشتر بدانید</Typography>
                                <Stack>
                                    <Button sx={{ color: "#FFF", alignSelf: 'flex-start' }} startIcon={<ArrowBackIosNewIcon />}>درباره ما</Button>
                                    <Button sx={{ color: "#FFF", alignSelf: 'flex-start' }} startIcon={<ArrowBackIosNewIcon />}>تماس با ما </Button>
                                    <Button sx={{ color: "#FFF", alignSelf: 'flex-start' }} startIcon={<ArrowBackIosNewIcon />}>پرسش های متداول</Button>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item lg={2} sm={4} xs={6} p={"12px"}>
                            <Stack spacing={2}>
                                <Typography variant='h3' fontSize={'21px'}>صفحات ما</Typography>
                                <Stack>
                                    <Button sx={{ color: "#FFF", alignSelf: 'flex-start' }} startIcon={<ArrowBackIosNewIcon />}>ثبت شکایات</Button>
                                    <Button sx={{ color: "#FFF", alignSelf: 'flex-start' }} startIcon={<ArrowBackIosNewIcon />}>حریم خصوصی</Button>
                                    <Button sx={{ color: "#FFF", alignSelf: 'flex-start' }} startIcon={<ArrowBackIosNewIcon />}>قوانین و مقررات</Button>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item lg={4} sm={4} xs={12} p={"12px"}>
                            <Stack flexDirection={"row"} justifyContent={{sm:'end', xs:"center"}} gap={2}>
                                <Box><img className='enamad-logo' src="/assets/image/enamad.png" alt="" /></Box>
                                <Box><img className='samandehi-logo' src="/assets/image/samandehi.png" alt="" /></Box>
                            </Stack>
                        </Grid>


                        <Grid item xs={12} >
                            <Divider variant='middle' />
                            <Stack flexDirection={{md:'row',xs:'column'}} alignItems={"center"} justifyContent={"space-between"} marginTop={2}>
                                <Stack>
                                    <Typography>کلیه حقوق مادی و معنوی این سایت برای شرکت مانا تجارت تازه بار محفوظ می‌باشد.</Typography>
                                </Stack>
                                <Stack flexDirection={"row"} alignItems={"center"}>
                                    <Stack>
                                        <Typography>همراه ما باشید:</Typography>
                                    </Stack>
                                    <Stack flexDirection={"row"}>
                                        <IconButton>
                                            <TelegramIcon sx={{ color: "white" }} />
                                        </IconButton>
                                        <IconButton>
                                            <WhatsAppIcon sx={{ color: "white" }} />
                                        </IconButton>
                                        <IconButton>
                                            <InstagramIcon sx={{ color: "white" }} />
                                        </IconButton>
                                        <IconButton >
                                            <FacebookIcon sx={{ color: "white" }} />
                                        </IconButton>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Grid>

                    </Grid>

                </Stack>
            </Stack>

        </>
    )
}

export default Footer;
