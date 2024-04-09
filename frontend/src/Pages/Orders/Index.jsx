import React from 'react';
import { Paper, Stack, Typography, TableRow, TableHead, TableContainer, TableCell, TableBody, Table } from '@mui/material';



function createData(orderNum, number, pricePaid, deliveryTime, condition, InvoiceIssuanceDate) {
    return { orderNum, number, pricePaid, deliveryTime, condition, InvoiceIssuanceDate};
}

const rows = [

];

const Orders = () => {
    return (
        <Stack className='container' bgcolor={"#F4F8F9"} width={"100%"} height={"100vh"} paddingTop={"72px"}>


            <Stack width={"90%"} height={"90%"} sx={{ padding: "24px 12px 48px", margin: "0 auto" }} >
                <Stack marginBottom={"16px"}>
                    <Typography variant='h1' fontSize={"21px"} sx={{ padding: "12px 8px" }}>آرشیو سفارشات</Typography>
                </Stack>
                <Stack component={Paper} borderRadius={"10px"} width={"100%"} height={"100%"} bgcolor={"#fff"}>
                    <TableContainer >
                        <Table  aria-label="simple table" >
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{fontSize:"10px"}}>شماره سفارش</TableCell>
                                    <TableCell sx={{fontSize:"10px"}}>تعداد</TableCell>
                                    <TableCell sx={{fontSize:"10px"}}>قیمت پرداختی</TableCell>
                                    <TableCell sx={{fontSize:"10px"}}>تاریخ تحویل</TableCell>
                                    <TableCell sx={{fontSize:"10px"}}>وضعیت</TableCell>
                                    <TableCell sx={{fontSize:"10px"}}>تاریخ صدور فاکتور</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row" fontSize={"10px"}>
                                            {row.orderNum}
                                        </TableCell>
                                        <TableCell sx={{fontSize:"10px"}}>{row.number}</TableCell>
                                        <TableCell sx={{fontSize:"10px"}}>{row.pricePaid}</TableCell>
                                        <TableCell sx={{fontSize:"10px"}}>{row.deliveryTime}</TableCell>
                                        <TableCell sx={{fontSize:"10px"}}>{row.condition}</TableCell>
                                        <TableCell sx={{fontSize:"10px"}}>{row.InvoiceIssuanceDate}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Stack>
            </Stack>


        </Stack>
    );
}

export default Orders;
