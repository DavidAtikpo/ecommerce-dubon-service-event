import React from 'react';
import './App.css'
import ProductPage from './pages/productPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/auth/LoginPage';
import Cart from './pages/Cart';
import RegisterPage from './pages/auth/RegisterPage';
import ForgotPasswordPage from './pages/auth/ForgotPassword';
import ResetPasswordPage from './pages/auth/resetPasswordPage';
import VerifyCodePage from './pages/auth/verificationCode';
import ChatBox from './components/ChatBox'; 
import ShippingAddressPage from './components/ShippingAddressPage';
import PaymentPage from './components/PaymentPage';
import CheckingStatus from './pages/orders/OrdreStatus';
import RatingPopup from './pages/orders/RatingPopup';
import ProductDetails from './pages/admin/ProductManagement';
import ErrorBoundary from './components/ErrorBoundary';
import MessageSideBar from './components/MessageComponent/MessageSideBar';
import ProfilePhotoUploader from './components/MonCompte/AccountPage';
import MessagePage from './components/MessageComponent/MessagePage';
import OrderSummaryPage from './pages/orders/ResumeCommande';
import MonCompte from './pages/user/MonComptePage'
import EmailUpdateComponent from './components/MonCompte/EmailUpdateComponent';
import PayPalButton from './components/Paypal';
import PasswordUpdateComponent from './components/MonCompte/PasseWord';
import PhoneUpdateComponent from './components/MonCompte/PhoneVerificationComponent';
import LanguageSelector from './components/topbar/LanguageSelector';
import Stats from './components/Stats';
import AdminProduct from './pages/admin/AdminProduct'
import AddProductPage from './components/AddProductPage';
import Ecran from './components/Ecran'
import EventManagement from './pages/admin/Evenement/EventManagement';
import TrainingManagement from './pages/admin/Formation/TrainingManagement'
import LivreurManagement from './pages/admin/Livreur/LivreurManagement';
import OrderManagement from './pages/admin/dashboard/OrderManegement';
import VendeurDashboard from './pages/vendeurs/vendeurDashboard';
import AjouterProduit from './pages/vendeurs/AjouterProduit';
import MesProduits from './pages/vendeurs/MesProduits';
import MesCommandes from './pages/vendeurs/Mescommandes';
import Checkout from './components/topbar/checkout';
import ProfilePhotoComponent from './components/MonCompte/ProfilePhotoComponent';


function App() {
  return (
    <Router>
      <div className="App">
       
        <ChatBox />

        
        <ErrorBoundary>
        <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/vendeur/dashboard" element={<VendeurDashboard/>} /> */}
        <Route path="/vendeur/produits/ajouter" element={<AjouterProduit/>} />
        <Route path="/vendeur/produits" element={<MesProduits/>} />
        <Route path="/vendeur/commandes" element={<MesCommandes/>} />
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/profilePhoto' element = {<ProfilePhotoComponent/>}/>
        <Route path='/language' element = {<LanguageSelector/> }/>
        <Route path='/stats' element ={<Stats/>}/>
        <Route path='/produits' element ={<AdminProduct/>}/>
        <Route path='/page-accueil-admin' element ={<Ecran/>}/>
        {/* <Route path='/evenement' element ={<EventManagement/>}/> */}
        {/* <Route path='/formation' element ={<TrainingManagement/>}/> */}
        {/* <Route path='/livreur' element ={<LivreurManagement/>}/> */}

        <Route path='/add-produits' element ={<AddProductPage/>}/>
        <Route path='/commande' element ={<OrderManagement/>}/>
        {/* <Route path='/restaurant' element ={<RestaurantManagement/>}/> */}




         
          {/* <Route path="/" element={<UserDashboardLayout />} /> */}
         
          <Route path="/productPage/:productId" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/message-page" element={<MessagePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path='/verification-code' element={<VerifyCodePage />} />
          <Route path='/shipping-address' element={<ShippingAddressPage/>}/>
          <Route path='/payment' element={<PaymentPage/>}/>
          <Route path='/user-status' element={<CheckingStatus/>}/>
          <Route path='/rating-popup' element={<RatingPopup/>}/>
          <Route path='/dubon-ser-pro-ma/:productId' element={<ProductDetails/>}/>
          <Route path='/gerer-compte' element={<ProfilePhotoUploader/>}/>
          <Route path='/message-side-bar' element={<MessageSideBar/>}/>
          <Route path='/summary' element={<OrderSummaryPage/>}/>
          <Route path='/moncompte' element={<MonCompte/>}/>
          <Route path='/email' element={<EmailUpdateComponent/>}/>
          <Route path='/paypal' element={<PayPalButton/>}/>
          <Route path='/phone' element={<PhoneUpdateComponent/>}/>
          <Route path='/password' element={<PasswordUpdateComponent/>}/>
        </Routes>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;
