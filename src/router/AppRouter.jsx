import { Routes, Route } from "react-router-dom"
import MainPage from './../Pages/Main/MainPage';
import CatalogPage from './../Pages/Catalog/CatalogPage';
import OrderPage from './../Pages/Order/OrderPage';
import ProductPage from './../Pages/Product/ProductPage';
import ErrorPage from './../Pages/Error/ErrorPage';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/main" element={<MainPage/>}/>
            <Route path ="catalog" element={<CatalogPage/>}/>
            <Route path="/order" element={<OrderPage/>}/>
            <Route path="/product" element={<ProductPage/>}/>
            <Route path="/" element={<MainPage/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    )
}

export default AppRouter;