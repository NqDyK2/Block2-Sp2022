import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfor'

import type { ProductType } from './types/product';
import { add, list } from './api/product';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import ProductDetail from './pages/ProductDetail';
import AdminLayout from './pages/layouts/AdminLayout';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/HomePage';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import ProductAdd from './pages/ProductAdd';
import ProductManager from './pages/ProductManager';
// import HomePage from './pages/Website/HomePage';
// import ProductPage from './pages/Website/ProductPage';

function App() {
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    const getProducts = async () => {
        const { data } = await list();
        setProducts(data);
    }
    getProducts();
  }, [])
  
  const onHandleAdd = async (product: any) => {
    console.log("App.js : ", product);
    const {data} = await add(product);
    setProducts([...products, data]);
  }

  return (
    <div className="App">
        <header>
          <ul>
            <li><NavLink to="/">Home Page</NavLink></li>
            <li><NavLink to="/product">Product</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<WebsiteLayout />}>
                <Route index element={<HomePage />} />
                {/* Cách 1: để vào chi tiết sản phẩm 
                <Route path="product">
                  <Route element={<ProductPage />} />
                  <Route path=":id" element={<ProductDetail />} />
                </Route> */}
                {/* Cách 2: để vào chi tiết sản phẩm */}
                  <Route path="product" element={<ProductPage />}  />
                  <Route path="/product/:id" element={<ProductDetail />} />
            </Route>
            <Route path="admin" element={<AdminLayout />}>
                <Route index element={<Navigate to="dashboard" />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="product">
                  <Route index  element={<ProductManager products={products} />} />
                  <Route path="add" element={<ProductAdd name="Dyy" onAdd={onHandleAdd} />} />
                </Route>
            </Route>
          </Routes>
        </main>
    </div>
  )
}

export default App


