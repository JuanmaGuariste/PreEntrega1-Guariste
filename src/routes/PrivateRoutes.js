import { Navbar } from '../Components/Navbar/Navbar';
import { ItemListContainer } from '../Components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from '../Components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from '../Components/Cart/Cart';
import { Routes, Route, Navigate } from 'react-router-dom';



export const PrivateRoutes = () => {

    return (
            <>                
                <Navbar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/productos" element={<ItemListContainer />} />
                    <Route path="/productos/:categoryId" element={<ItemListContainer />} />
                    <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </> 
    )
}