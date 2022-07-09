import './navbar.scss';
import HomeIcon from '@mui/icons-material/Home';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const data = useSelector(state => state.value);

  let items = 0;

  console.log(data.map(() => items++))

  return (
    <div className="navbar">
      <Container>
        <div className="wrapper">
          <Link to='/' style={{ textDecoration: 'none' }}>
            <div className="logo">
              <span>Electronic Shop</span>
            </div>
          </Link>
          <div className="nav_items">
            <div className="nav_item">
              <DarkModeIcon className='icon' />
            </div>
            <div className="nav_item">
              <HomeIcon className='icon' />
              <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                Home
              </Link>
            </div>
            <div className="nav_item">
              <StoreMallDirectoryIcon className='icon' />
              <Link to='/products' style={{ textDecoration: 'none', color: 'inherit' }}>
                Products
              </Link>
            </div>
            <div className="nav_item">
              <Link to='/cart' style={{ textDecoration: 'none', color: 'inherit' }}>
                <ShoppingBasketIcon className='icon' />
              </Link>
              <div className="cart_count">{items}</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Navbar