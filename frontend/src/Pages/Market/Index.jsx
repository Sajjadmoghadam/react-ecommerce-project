import { Stack, TextField, Typography, IconButton, Grid, Box, Paper, Button } from '@mui/material';
import WindowIcon from '@mui/icons-material/Window';
import AppleIcon from '@mui/icons-material/Apple';
import GrassIcon from '@mui/icons-material/Grass';
import SpaIcon from '@mui/icons-material/Spa';
import React, { useEffect, useState } from 'react';
import MarketSlider from '../../Components/Sliders/Market/Index';
import ProductCard from '../../Components/Card/Index'
import InventoryIcon from '@mui/icons-material/Inventory';
import CancelIcon from '@mui/icons-material/Cancel';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import AddBoxIcon from '@mui/icons-material/AddBox';
import './style.css'



const Market = () => {

    const [category, setCategory] = useState('all')
    const [products, setProducts] = useState()


    useEffect(() => {

        if (category === 'all') {
            fetch('http://localhost:5000/products')
                .then(res => res.json())
                .then(data => {
                    
                    setProducts(data.data)
                })


        } else {
            fetch('http://localhost:5000/products', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ category })

            })
                .then(res => res.json())
                .then(data => {
                    setProducts(data.data)
                })



        }


    }, [category])


                  let  cards =  products?.map(e=> <ProductCard title={e.name} price={e.price} image={e.image} />)

    return (
        <>
            <Stack flexDirection={"row"} height={"100vh"} width={"100%"} paddingTop={"71px"} display={{ md: "flex", xs: "none" }} >
                <Stack border={"1px solid #e5e5e5"} display={{ md: "flex", xs: "none" }} minWidth={"72px"} gap={1} py={1}>
                    <IconButton onClick={() => setCategory("all")} size='large' sx={{ alignSelf: "center", backgroundColor: category === 'all' && "primary.main", color: category === 'all' && "white", '&:hover': { color: "primary.main" } }}>
                        <WindowIcon fontSize='40px' />
                    </IconButton>
                    <IconButton onClick={() => setCategory("fruit")} size='large' sx={{ alignSelf: "center", backgroundColor: category === 'fruit' && "primary.main", color: category === 'fruit' && "white", '&:hover': { color: "primary.main" } }}>
                        <AppleIcon fontSize='40px' />
                    </IconButton>
                    <IconButton onClick={() => setCategory("vegetable")} size='large' sx={{ alignSelf: "center", backgroundColor: category === 'vegetable' && "primary.main", color: category === 'vegetable' && "white", '&:hover': { color: "primary.main" } }}>
                        <GrassIcon fontSize='40px' />
                    </IconButton>
                    <IconButton onClick={() => setCategory("crops")} size='large' sx={{ alignSelf: "center", backgroundColor: category === 'crops' && "primary.main", color: category === 'crops' && "white", '&:hover': { color: "primary.main" } }}>
                        <SpaIcon fontSize='40px' />
                    </IconButton>

                </Stack>
                <Grid container bgcolor={"#F3F7F8"} style={{ width: 'calc(100% - 72px)' }}>
                    <Grid item lg={'8'} md={"7"} py={1} display={"flex"} flexWrap={"wrap"} gap={1} justifyContent={"center"} className='productConainer' >
                        <Box width={"97%"} >
                            <MarketSlider />
                        </Box>
                        {cards}
                    </Grid>
                    <Grid item lg={"4"} md={"5"} display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"center"} className='zero'>
                        <Stack position={"relative"} component={Paper} height={"95%"} width={"90%"} sx={{ borderRadius: "10px 10px 0px 0px" }} overflow={"hidden"}>
                            <Stack flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"} bgcolor={"primary.main"} p={1} px={3} >
                                <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
                                    <InventoryIcon fontSize='large' sx={{ color: "white" }} />
                                    <Typography sx={{ color: "white" }}>1 محصول</Typography>
                                </Stack>
                                <Stack>
                                    <Typography fontSize={"21px"} sx={{ color: "white" }}>1000 تومان</Typography>
                                </Stack>
                            </Stack>
                            <Stack height={"100%"} >
                                <Stack flexDirection={"row"} p={1} alignItems={"center"} sx={{ borderBottom: "1px solid #e5e5e5" }}>
                                    <Stack><img className='cartProductImg' src="/assets/image/55.jpg" alt="" /></Stack>
                                    <Stack width={"100%"}>
                                        <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"} >
                                            <Typography>گوجه فرنگی بوته‌ای سبد 14 کیلویی</Typography>
                                            <IconButton><CancelIcon color='error' /></IconButton>
                                        </Stack>
                                        <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
                                            <Stack sx={{ bgcolor: "black" }} flexDirection={"row"} borderRadius={"10px"} alignItems={"center"}>
                                                <IconButton ><AddBoxIcon sx={{ color: "white" }} fontSize='small' /></IconButton>
                                                <Typography textAlign={"center"} sx={{ backgroundColor: "white", width: "20px" }}>1</Typography>
                                                <IconButton><IndeterminateCheckBoxIcon sx={{ color: "white" }} fontSize='small' /></IconButton>
                                            </Stack>
                                            <Typography className='login-span'>28800 تومان</Typography>
                                        </Stack>
                                    </Stack>
                                </Stack>

                            </Stack>
                            <Stack>
                                <Button variant='contained' size='large' sx={{ bgcolor: "black", borderRadius: "0" }}>ثبت سفارش 256000 تومان</Button>
                            </Stack>

                        </Stack>


                    </Grid>
                </Grid>
            </Stack>
            <Stack display={{ md: "none", xs: "flex" }} bgcolor={"#F3F7F8"} >
                <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"} p={1} bgcolor={"white"} m={2}>
                    <Stack >
                        <Typography fontSize={"21px"}>0 تومان</Typography>
                        <Typography color={"#AcAcAc"} fontSize={"14px"}>موجودی شما برای سفارش</Typography>
                    </Stack>
                    <Stack>
                        <Button variant='contained' sx={{ bgcolor: "black", borderRadius: "40px" }}>افزایش</Button>
                    </Stack>
                </Stack>
                <Stack>
                    <MarketSlider/>
                </Stack>
                <Stack flexDirection={"row"} width={"100%"} gap={1} px={2}>
                    <Stack alignItems={"center"} justifyContent={"center"} bgcolor={"white"} width={"25%"} p={1} borderRadius={"10px"} onClick={e => setCategory("food")} sx={{cursor:"pointer"}}>
                        <img className='mobile-category' src="/assets/image/mobilecategoryimage/1.png" alt="" />
                        <Typography fontSize={"14px"}>مواد غذایی</Typography>
                    </Stack>
                    <Stack alignItems={"center"} justifyContent={"center"} bgcolor={"white"} width={"25%"} p={1} borderRadius={"10px"} onClick={e => setCategory("crops")} sx={{cursor:"pointer"}}>
                        <img className='mobile-category' src="/assets/image/mobilecategoryimage/2.png" alt="" />
                        <Typography fontSize={"14px"}>صیفی جات</Typography>
                    </Stack>
                    <Stack alignItems={"center"} justifyContent={"center"} bgcolor={"white"} width={"25%"} p={1} borderRadius={"10px"} onClick={e => setCategory("vegetable")} sx={{cursor:"pointer"}}>
                        <img className='mobile-category' src="/assets/image/mobilecategoryimage/3.png" alt="" />
                        <Typography fontSize={"14px"}>سبزیجات</Typography>
                    </Stack>
                    <Stack alignItems={"center"} justifyContent={"center"} bgcolor={"white"} width={"25%"} p={1} borderRadius={"10px"} onClick={e => setCategory("fruit")} sx={{cursor:"pointer"}}>
                        <img className='mobile-category' src="/assets/image/mobilecategoryimage/4.png" alt="" />
                        <Typography fontSize={"14px"}>میوه</Typography>
                    </Stack>
                
                 
                    
                </Stack>
                <Stack>
                    <Stack flexDirection={"row"} flexWrap={"wrap"} gap={1} justifyContent={"center"} p={2}>
                     
                     {cards}

                    </Stack>
                </Stack>
                <Stack position={"fixed"} bottom={0} right={0} left={0}>
                    <Button variant='contained' size='large' fullWidth sx={{bgcolor:"black",borderRadius:"0px", lineHeight:"50px"}}>ثبت سفارش</Button>
                </Stack>

            </Stack>

        </>
    );
}

export default Market;
