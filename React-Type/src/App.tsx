import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'

import type { ProductType } from './types/product';
import { add, list, remove, update } from './api/product';
import {createCate, listCate, removeCate, updateCate} from './api/category'
import { login, regis } from './api/user'
import { Navigate, NavLink, Route, Routes, useParams } from 'react-router-dom';
import HomePage from './pages/layouts/LayoutHomePage/HomePage';
import ProductPage from './pages/ProductPage';
import AdminLayout from './pages/layouts/AdminLayout';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Dashboard from './pages/Dashboard';
import ProductManager from './pages/layouts/layoutsAdmin/Product/ProductManager';
import ProductDetail from './pages/ProductDetail';
import ProductAdd from './pages/layouts/layoutsAdmin/Product/ProductAdd';
import ProductEdit from './pages/layouts/layoutsAdmin/Product/ProductEdit';
import PrivateRouter from './components/PrivateRouter';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import { UserType } from './types/user';
import ProductCategory from './pages/ProductCategory';
import CategoryManager from './pages/layouts/layoutsAdmin/Category/CategoryManager';
import { CategoryType } from './types/category';
import CategoryEdit from './pages/layouts/layoutsAdmin/Category/CategoryEdit';
import CategoryAdd from './pages/layouts/layoutsAdmin/Category/CategoryAdd';
import Cart from './pages/CheckOutPage';
import CheckOutPage from './pages/CheckOutPage';

function App() {
  const [products, setProducts] = useState<ProductType[]>([])
  const [category, setCategory] = useState<CategoryType[]>([])
  const [users, setUser] = useState<UserType[]>([])

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts();
  }, []);

  useEffect(() =>{
    const getCategory = async () => {
      const {data} = await listCate();
      setCategory(data);
    }
    getCategory()
  }, []);

  // Add Product
  const onHandleAdd = async (product: any) => {
    const { data } = await add(product);
    setProducts([...products, data]);
  }
  const onHandleAddCate = async (category: any) => {
    const { data } = await createCate(category);
    setCategory([...category, data])
  }
  const onHandleRemove = async (_id: number) => {
    remove(_id);
    // rerender
    setProducts(products.filter(item => item._id !== _id));
  }
  const onHandleRemoveCategory = async (_id:number) => {
    removeCate(_id);
    setCategory(category.filter(item => item._id !== _id));
  }
  const onHandleUpdate = async (product: ProductType) => {
    try {
      // api
      const { data } = await update(product);
      // reREnder - 
      // Tạo ra 1 vòng lặp, nếu item._id == _id sản phẩm vừa cập nhật (data), thì cập nhật ngược lại giữ nguyên
      setProducts(products.map(item => item._id === data._id ? product : item))
    } catch (error) {

    }
  }
  const onHandleUpdateCategory = async (category: CategoryType) => {
    // try {
    //   const {data} = await updateCate(category);
    //   setCategory(category.map(item => item._id === data._id ? category: item))
    // } catch (error) {
      
    // }
  } 
  return (
    <div className="App">
      {/* <header>
          <ul>
            <li><NavLink to="/">Home Page</NavLink></li>
            <li><NavLink to="/product">Product</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
        </header> */}
      <main>
        <Routes>
          <Route path="/" element={<WebsiteLayout />}>
            <Route index element={<HomePage />} />
            <Route path="product">
              <Route index element={<ProductPage products={products} />} />
              <Route path=":_id" element={<ProductDetail />} />
            </Route>
            <Route path='categories' >
              <Route index element={<ProductCategory />} />
            </Route>
          </Route>
          <Route path="admin" element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="product">
              <Route index element={<PrivateRouter><ProductManager products={products} onRemove={onHandleRemove} /></PrivateRouter>} />
              <Route path=":_id/edit" element={<ProductEdit onUpdate={onHandleUpdate} />} />
              <Route path="add" element={<ProductAdd onAdd={onHandleAdd} />} />
            </Route>
            <Route path="category"> 
              <Route index element={<PrivateRouter><CategoryManager onRemove={onHandleRemoveCategory} category={category}/></PrivateRouter>}/>
              <Route path=':_id/edit' element={<CategoryEdit onUpdateCate={onHandleUpdateCategory}/>}/>
              <Route path="add" element={<CategoryAdd onAdd={onHandleAddCate} />} />
            </Route>
          </Route>
          <Route path='login' element={<Signin />}></Route>
          <Route path='register' element={<Signup />} />
          <Route path='checkout' element={<CheckOutPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App



