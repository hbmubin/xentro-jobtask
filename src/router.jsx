import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import Error from "./pages/Error";
import Dashboard from "./components/dashboard/Dashboard";
import ProductList from "./components/productList/ProductList";
import Users from "./components/Users/Users";
import UserDetails from "./components/userDetails/UserDetails";


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
                path:'/users/:id',
                element: <UserDetails />,
                loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            },
        ]
    }
])