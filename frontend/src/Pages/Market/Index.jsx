import { Stack, TextField, Typography, IconButton, Grid } from '@mui/material';
import WindowIcon from '@mui/icons-material/Window';
import AppleIcon from '@mui/icons-material/Apple';
import GrassIcon from '@mui/icons-material/Grass';
import SpaIcon from '@mui/icons-material/Spa';
import React, { useState } from 'react';
import MarketSlider from '../../Components/Sliders/Market/Index';
import Card from '../../Components/Card/Index';
import './style.css'


const Market = () => {

    const [category, setCategory] = useState('all')


    return (
        <>
            <Stack flexDirection={"row"} height={"100vh"} paddingTop={"71px"} overflow={"hidden"}>
                <Stack border={"1px solid #e5e5e5"} display={{ md: "flex", xs: "none" }} width={"72px"} gap={1} py={1}>
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
                
                


            </Stack>

        </>
    );
}

export default Market;
