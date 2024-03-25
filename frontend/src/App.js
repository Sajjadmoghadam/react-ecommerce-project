import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Index';
import LoginHeader from './Components/Headers/LoginHeader/Index';
import Header from './Components/Headers/Header/Index';
import Footer from './Components/Footer/Index';
import Market from './Pages/Market/Index';
import MyProfile from "./Pages/MyProfile/Index";
import MyWallet from "./Pages/MyWallet/Index"
import Orders from "./Pages/Orders/Index"
import Tickets from "./Pages/Tickets/Index"
import MyRefund from "./Pages/MyRefund/Index"
import PageNotFound from './Pages/PageNotFound/Index';
import { CssBaseline } from '@mui/material';
function App() {
  const token = true
  return (
    <>
      {token ? <LoginHeader /> : <Header />}
      
      <Routes>
        <Route exact path='/' element={token ? <Navigate to="/market" /> : <Home />} />
        <Route path='/market' element={token ? <Market /> : <Navigate to="/" />} />
        <Route path='/myprofile' element={token ? <MyProfile /> : <Navigate to="/" />} />
        <Route path='/myrefund' element={token ? <MyRefund /> : < Navigate to="/" />} />
        <Route path='/myWallet' element={token ? <MyWallet /> : < Navigate to="/" />} />
        <Route path='/orders' element={token ? <Orders /> : < Navigate to="/" />} />
        <Route path='/tickets' element={token ? < Tickets />: < Navigate to="/" />} />
        <Route path='*' element ={<PageNotFound/>}/>
      </Routes>
      {token ? null : <Footer />}
    </>
  );
}

export default App;
