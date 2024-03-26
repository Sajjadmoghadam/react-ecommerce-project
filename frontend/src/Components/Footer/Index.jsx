import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import "./style.css"

const Footer = () => {
    return (
        <>

            <Stack bgcolor={'primary.main'} justifyContent={'center'} alignItems={'center'}>
                <Stack width={{ xl: '70%', lg: '100%' }} flexDirection={'row'}>
                    {/* <Stack>
                        <Typography variant='h3' fontSize={'21px'}>درباره تازه بار</Typography>
                        <Typography textAlign={'justify'} >همه ما می‌دانیم که یک غذای خوب از مواد اولیه تازه و با کیفیت تهیه می‌شود و تازه بار اولین پلتفرم B2B با هدف تهیه محصولات تازه در ایران است که مواد اولیه رستواران‌، فست‌فود، کافی‌شاپ و آشپزخانه‌ها و همچنین مشتریان خانگی را به صورت مستقیم از کشاورزان تامین و در نهایت رعایت پروتکل‌های بهداشتی به مشتریان خود ارائه می‌کند.</Typography>
                        <Stack flexDirection={"row"}>
                            <Button>021-86121307</Button>
                            <Button>info@tazebar.com</Button>
                        </Stack>
                    </Stack>
                    <Stack>
                        <Typography variant='h3' fontSize={'21px'}>بیشتر بدانید</Typography>
                        <Button>درباره ما</Button>
                        <Button>تماس با ما </Button>
                        <Button>پرسش های متداول</Button>
                    </Stack>
                    <Stack>
                        <Typography variant='h3' fontSize={'px'}>صفحات ما</Typography>
                        <Button>ثبت شکایات</Button>
                        <Button>حریم خصوصی</Button>
                        <Button>قوانین و مقررات</Button>
                    </Stack>
                    <Stack flexDirection={'row'}>
                        <Box><img className='enamad-logo' src="/assets/image/enamad.png" alt="" /></Box>
                        <Box><img className='samandehi-logo' src="/assets/image/samandehi.png" alt="" /></Box>
                    </Stack> */}
                    <Grid container spacing={2}>

                        <Grid item xs={4}>
                            <Typography variant='h3' fontSize={'21px'}>درباره تازه بار</Typography>
                            <Typography textAlign={'justify'} >همه ما می‌دانیم که یک غذای خوب از مواد اولیه تازه و با کیفیت تهیه می‌شود و تازه بار اولین پلتفرم B2B با هدف تهیه محصولات تازه در ایران است که مواد اولیه رستواران‌، فست‌فود، کافی‌شاپ و آشپزخانه‌ها و همچنین مشتریان خانگی را به صورت مستقیم از کشاورزان تامین و در نهایت رعایت پروتکل‌های بهداشتی به مشتریان خود ارائه می‌کند.</Typography>
                            <Stack flexDirection={"row"}>
                                <Button sx={{color:"#000"}} >021-86121307</Button>
                                <Button sx={{color:"#000"}}>info@tazebar.com</Button>
                            </Stack>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant='h3' fontSize={'21px'}>بیشتر بدانید</Typography>
                            <Stack>
                            <Button sx={{color:"#000"}}>درباره ما</Button>
                            <Button sx={{color:"#000"}}>تماس با ما </Button>
                            <Button sx={{color:"#000"}}>پرسش های متداول</Button>
                            </Stack>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant='h3' fontSize={'21px'}>صفحات ما</Typography>
                            <Stack>
                            <Button sx={{color:"#000"}}>ثبت شکایات</Button>
                            <Button sx={{color:"#000"}}>حریم خصوصی</Button>
                            <Button sx={{color:"#000"}}>قوانین و مقررات</Button>
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
                            <Stack flexDirection={"row"} justifyContent={"end"}>
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
