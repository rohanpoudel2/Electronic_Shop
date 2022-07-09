import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Cart from './pages/cart/Cart';
import Checkout from './pages/checkout/Checkout';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.scss';
import { Container } from '@mui/system';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Container>
          <div className="app">
            <Routes>
              <Route path='/'>
                <Route index element={<Home />} />
                <Route path='products'>
                  <Route index element={<Products />} />
                </Route>
                <Route path='cart'>
                  <Route index element={<Cart />} />
                  <Route path='checkout' element={<Checkout />} />
                </Route>
              </Route>
            </Routes>
          </div>
        </Container>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App