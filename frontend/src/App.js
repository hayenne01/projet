import { Route, Routes } from 'react-router-dom';
import './App.css';
import AlertErrors from './components/AlertErrors';
 import Home from './components/Home';
import NotFound from './components/NotFound';
import Profile from './components/Profile';

import SignUp from './components/SignUp';
import PrivateRoute from './privateRoute/PrivateRoute';
import Inbox from './components/Inbox';
import Dashboard from './components/Dashboard';
import Seller from './components/Seller';
import DashboardSeller from './components/DashboardSeller';
import Navbar from './components/Navbar';
import Sellerprofile from './components/SellerProfile';
import './App.css'
import {useState} from 'react'
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import AdminDashboard from './components/AdminDashboard';
import ProductCard from './components/ProductCard';
import EditProduct from './components/EditProduct';
function App() {
  const [hovered, sethovered] = useState(false)
  console.log(hovered)
  return (
    <div className="App">
   <Navbar  sethovered={sethovered} hovered={hovered} />
      {/* <AlertErrors/> */}
       <Routes>
    <Route path='/' element={<Home  hovered={hovered} />} />
    <Route path='/profile' element={<PrivateRoute><Profile hovered={hovered}/></PrivateRoute> }/>
    <Route path='/profileseller/:id' element={<PrivateRoute><Sellerprofile sethovered={sethovered} hovered={hovered}/></PrivateRoute> }/>
    <Route path='/editproduct/:id' element={<EditProduct/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/signup/seller' element={<Seller/>} />
    <Route path='/seller/addproduct' element={<AddProduct/>} />
    <Route path='/seller/products/:id' element={<ProductCard/>} />
    <Route path='/signup' element={<SignUp/>} />
    <Route path='/product:id' element={<ProductCard/>} />
    <Route path='/inbox/:id' element={<PrivateRoute><Inbox/></PrivateRoute>} />
    <Route path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>} />
    <Route path='/admin' element={<PrivateRoute><AdminDashboard hovered={hovered}/></PrivateRoute>} />
    <Route path='/dashboard/seller' element={<PrivateRoute><DashboardSeller/></PrivateRoute>} />
    <Route path='/*' element={<NotFound/>} />
    
  </Routes>

      
        </div>
  );
}

export default App;
