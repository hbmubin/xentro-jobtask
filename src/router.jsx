import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import Error from "./pages/Error";
import Dashboard from "./components/dashboard/Dashboard";
import ProductList from "./components/productList/ProductList";
import Users from "./components/Users/Users";

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
                path:'/users',
                element: <Users />
            },
        ]
    }
])