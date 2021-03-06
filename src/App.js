import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Cart from './pages/cart/Cart';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.scss';
import { Container } from '@mui/system';
import Footer from './components/footer/Footer';
import Checkout from './pages/checkout/Checkout';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Container>
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
          </Container>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App