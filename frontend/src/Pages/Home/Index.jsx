import { InputAdornment, Stack, TextField, Typography, Button, Divider, Chip, Box } from '@mui/material';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LockIcon from '@mui/icons-material/Lock';
import React, { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import './style.css'
import Customers from '../../Components/Sliders/Customers/Index';



gsap.registerPlugin(useGSAP, ScrollTrigger);

const Home = () => {
    const greenContainer = useRef()
    const meal = useRef()
    const tl = gsap.timeline()
    const loginForm = useRef();
    useGSAP(() => {
        tl.fromTo(loginForm.current, { opacity: 0 }, { opacity: 1, delay: "1" })
        tl.to(greenContainer.current, { x: "-=35%", delay: "0.5" })
        tl.to(meal.current, { x: "-=135%", delay: "0.5", rotate: "360" })


    }, [])

    


    return (
        <>
            <Stack height={"100vh"} flexDirection={"row"} position={'relative'} overflow={"hidden"} sx={{ backgroundImage: "url('assets/image/bg.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover", }} >
                <Stack ref={greenContainer} width={"100%"} height={"100vh"} position={"absolute"} bgcolor={'primary.main'} sx={{ right: "100%", boxShadow: '5px 0px 50px 5px' }}></Stack>
                <Stack ref={meal} height={"100vh"} sx={{ position: 'absolute', right: { xl: "100%", lg: "110%", md: "145%", xs: "170%" } }} justifyContent={"center"}>
                    <img className='plate' src='/assets/image/meal.png' />

                </Stack>
                <Stack justifyContent={"center"} alignItems={"flex-end"} sx={{ margin: "0 auto", width: "100%", maxWidth: { lg: "1185px", xs: "100%" } }} px={2} >
                    <Stack ref={loginForm} width={{ sm: "450px", xs: "100%" }} height={{ sm: "500px", xs: "auto" }} gap={3} sx={{ backgroundColor: { md: "rgba(0, 0 ,0 ,0.1)", xs: "rgba(255,255,255, 0.9)" }, zIndex: "4" }} alignItems={"center"} justifyContent={"center"} px={{ sm: "32px", xs: "16px" }} py={2}>
                        <Typography textAlign={"center"} variant='h1' color={"#000"} fontSize={"30px"}> از مزرعه تا آشپزخانه</Typography>
                        <Typography textAlign={"center"} variant='h1' color={"#000"} fontSize={"21px"}> برای سفارش از <span className='login-span'> تازه بار</span> ثبت نام کنید</Typography>
                        <Typography textAlign={"center"} color={"#000"} > خدمات سریع و هوشمند ارسال بار تازه از بهترین کشاورزان به راحتی و با چند کلیک مواد تازه و با کیفیت مورد نیاز خود را از تازه بار دریافت کنید </Typography>
                        <TextField
                            placeholder='09xxxxxxxxx'
                            dir='ltr'

                            sx={{ backgroundColor: "#fff", alignSelf: "stretch" }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <PhoneAndroidIcon sx={{ color: "primary.main" }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            placeholder='رمز عبور خود را وارد کنید '
                            sx={{ backgroundColor: "#fff", alignSelf: "stretch" }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon sx={{ color: "primary.main" }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Button variant="contained" sx={{ backgroundColor: "#000", alignSelf: "stretch", lineHeight: "45px", fontSize: "17px" }} >ورود به تازه بار</Button>
                    </Stack>

                </Stack>

            </Stack>
            <Stack width={"100%"} py={6}>
                <Stack width={{ lg: "1185px", md: "850px", xs: "100%" }} sx={{ margin: "0 auto" }} gap={2} px={2}>
                    <Typography textAlign={"center"} variant='h2' fontSize={"30px"}> تعدادی از مشتریان <span className='login-span'>تازه بار</span></Typography>
                    <Divider variant='middle' sx={{ color: "red" }} />
                    <Typography textAlign={"center"} variant='h3' fontSize={"16px"}>روزانه محصولات تازه بار را برای تهیه صبحانه، ناهار، شام و پیش غذا انتخاب می‌کنند</Typography>
                    <Stack overflow={'hidden'} py={2}>
                        <Customers />
                    </Stack>

                </Stack>
            </Stack>
            <Stack width={"100%"} py={6}>
                <Stack width={{ lg: "1185px", md: "850px", xs: "100%" }} sx={{ margin: "0 auto" }} gap={3}  px={2}>
                    <Typography fontSize={"21px"} textAlign={"center"} variant='h2'><span className='login-span'>تازه بار</span> ، پیشگام سفارش آنلاین بار تازه در ایران</Typography>
                    <Stack flexDirection={"row"} flexWrap={'wrap'} gap={1} justifyContent={"center"}>
                        <Chip label="رستوران"/>
                        <Chip label="فست فود"/>
                        <Chip label="آشپزخانه"/>
                        <Chip label="کافی شاپ"/>
                        <Chip label="تالار"/>
                        <Chip label="هتل"/>
                        <Chip label="بیمارستان"/>
                        <Chip label="مدارس"/>
                        <Chip label="مساجد"/>
                        <Chip label="هایپر مارکت"/>
                        <Chip label="آبمیوه فروشی"/>
                    </Stack>
                </Stack>
            </Stack>
            <Stack width={"100%"} height={"400px"} sx={{backgroundImage:"url('assets/image/newsletter.png')" , backgroundRepeat:"no-repeat", backgroundSize:"cover",backgroundPosition: 'center',}} justifyContent={"center"} alignItems={"center"}>
                    <Stack width={"70%"} minHeight={"76px"} sx={{backgroundColor:"rgba(255 ,255 ,255, 0.8)",borderRadius:"8px"}} flexDirection={{lg:"row",xs:"column"}} alignItems={"center"} justifyContent={"space-between"}p={2} gap={2}>
                            <Box>
                                <Typography variant='h1' fontSize={"21px"}>برای استفاده از خدمات تازه بار همین الان به صورت رایگان ثبت نام کنید</Typography>
                            </Box>
                            <Box>
                                <Button onClick={()=>greenContainer.current?.scrollIntoView({ behavior: 'smooth' })} variant='contained' size='large' sx={{bgcolor:"#000"}}>شروع ثبت نام</Button>
                            </Box>
                    </Stack>
            </Stack>
        </>
    );
}

export default Home;
