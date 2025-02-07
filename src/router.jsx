import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import Error from "./pages/Error";
import Dashboard from "./components/dashboard/Dashboard";
import ProductList from "./components/productList/ProductList";
import Users from "./components/Users/Users";
import UserDetails from "./components/userDetails/UserDetails";
import AddProduct from "./components/addProduct/AddProduct";
import ProductDetails from "./components/productDetails/ProductDetails";
import Register from "./pages/register";
import Login from "./pages/Login";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path:'/',
                element: <Dashboard />
            },
            {
                path:'/products/all',
                element: <ProductList />
            },
            {
                path:'/users/all',
                element: <Users />
            },
            {
                path:'/products/add',
                element: <AddProduct />
            },
            {
                path:'/users/:id',
                element: <UserDetails />,
                loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            },
            {
                path:'/products/:id',
                element: <ProductDetails />,
                loader: ({params})=>fetch(`https://api.restful-api.dev/objects/${params.id}`)
            },
        ]
    },
    {
        path:'/register',
        element: <Register />
    },
    {
        path:'/login',
        element: <Login />
    }
])