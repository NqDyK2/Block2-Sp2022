import { useEffect, useState  } from 'react'
import logo from './logo.svg'
import './App.css'
import "@material-tailwind/react/tailwind.css";


import type { Product } from './types/product';
import { list } from './api/product';
import { NavLink, Route, Routes, Switch, Route, Redirect} from 'react-router-dom';
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const [products, setProducts] = useState<{_id: number, name: string}[]>([])

  useEffect(() => {
    const getProducts = async () => {
        const { data } = await list();
        setProducts(data);
    }
    getProducts();
  })
  return (
    <div className="App">
      <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Redirect from="*" to="/" />
        </Switch>
    </div>
  )
}

export default App


