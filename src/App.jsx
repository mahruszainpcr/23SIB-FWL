import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import ClassCustomerList from './ClassCustomerList' 
import FunctionalCustomerList from './FunctionalCustomerList'
import Sidebar from './komponen/Sidebar'
import Dashboard from './komponen/Dashboard'
import Header from './komponen/Header'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Users from './pages/Users'
import Products from './pages/Products'
import ProductsDetail from './pages/ProductsDetail'
import UserProfile from './pages/UserProfile'
import UserSettings from './pages/UserSettings'
import { Navigate } from 'react-router-dom'
import Login from './pages/Login'
import CreateAcc from './pages/CreateAcc'
import Error from './pages/Error'



function App() {
  const [count, setCount] = useState(0);
  const [title, setGantiNama] = useState("Vite + React");
  const [hitung, setHitung] = useState(0);

  let angka = 10;
  angka = 20;
  console.log(angka);

  const pi = 3.14;
  // pi = 3.153 // Error: pi is a constant
  console.log(pi);

  let x = 10;
  if (true) {
    let x = 20;
    console.log(x); // 20
  }
  console.log(x); // 10

  // 1
  const customers = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ];
  customers.forEach((customer) =>
    console.log(`Nama: ${customer.name} - Email: ${customer.email}`)
  );

  // 2
  const customer = { id: 1, name: "John Doe", email: "john@example.com" };
  const { name, email } = customer;
  console.log(`Pelanggan: ${name}, Email: ${email}`);

  // 3
  const products = [
    { id: 1, name: "Laptop", stock: 10 },
    { id: 2, name: "Smartphone", stock: 15 },
  ];
  const Newproducts = { id: 3, name: "Tablet", stock: 8 };
  const UpdatedProducts = [...products, Newproducts];
  console.log(UpdatedProducts);

  const createOrder = (
    customerName = "Guest",
    product = "Unknown",
    quantity = 1
  ) => {
    console.log(`Pesanan: ${customerName} membeli ${quantity} unit ${product}`);
  };

  createOrder("John Doe", "Laptop", 2);
  createOrder("Jane Smith", "SmartPhone");
  createOrder();

  // 4
  const invoice = (customer, product, quantity, price) => {
    return `
      ==========================
               INVOICE
      ==========================
      Nama Pelanggan: ${customer}
      Product: ${product}
      Jumlah: ${quantity}
      Harga Satuan: Rp.${price}
      Total Bayar: Rp.${quantity * price}
     ==========================
    `;
  };
  console.log(invoice("John Doe", "Laptop", 2, 500));

  // 5
  const getCustomers = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(["John Doe", "Jane Smith", "Robert Brown"]);
      }, 2000);
    });
  };
  getCustomers().then((customers) => console.log("Pelanggan: ", customers));

  // 6
  const fetchProducts = async () => {
    try {
      let response = await fetch("https://fakestoreapi.com/products");
      let data = await response.json();
      console.log("Daftar Product:", data);
    } catch (error) {
      console.error("Error fetching product: ", error); // Fixed logging of error
    }
  };
  fetchProducts();

  // 7
  return (
    <>
      <Router>
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header />
            <div className="p-4">
              <Routes>
                <Route path="/users" element={<Users />}>
                  <Route path="profile" element={<UserProfile />} />
                  <Route path="settings" element={<UserSettings />} />
                </Route>
                <Route path="/" element={<Dashboard />} />
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path='/login' element={<Login />} />
                <Route path='/CreateAcc' element={<CreateAcc/>} />
                <Route path="*" element={<Error/>} />
                <Route path="/products/:id" element={<ProductsDetail />} />
                <Route path="/products" element={<Products />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App
