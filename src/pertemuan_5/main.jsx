import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Sidebar from './layouts/Sidebar';
import Header from './layouts/Header';
import './assets/tailwind.css';
import Order from './pages/order';
import OrderInvoice from './pages/OrderInvoice';
import Customer from './pages/Customer';
import CustomerSettings from './pages/CustomerSettings';
import Error from './pages/Error';
import Login from './pages/Login';
import Error401 from './pages/Error401';
import MainLayout from './layouts/MainLayout';
import Page15 from '../pages/latihanit/Page15';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route element={<MainLayout />}>
                                <Route path="/" element={<Dashboard />} />
                                <Route path="Order" element={<Order />} />
                                <Route path="Invoice" element={<OrderInvoice />} />
                                <Route path="customer" element={<Customer />} />
                                <Route path="Settings" element={<CustomerSettings />} />
                                <Route path="/Page15"element={<Page15 />} />
                </Route>
                <Route path='/login' element={<Login />} />
                <Route path="*" element={<Error/>} />
                <Route path='/Error401' element={<Error401 />} />
            </Routes>
        </Router>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

export default App;
