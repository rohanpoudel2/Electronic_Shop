import './navbar.scss';
import HomeIcon from '@mui/icons-material/Home';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const Navbar = () => {

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
    >
      <List>
        <ListItem>
          <HomeIcon className='icon' />
          <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
            Home
          </Link>
        </ListItem>
        <ListItem>
          <StoreMallDirectoryIcon className='icon' />
          <Link to='/products' style={{ textDecoration: 'none', color: 'inherit' }}>
            Products
          </Link>
        </ListItem>
        <ListItem>
          <ShoppingBasketIcon className='icon' />
          <Link to='/cart' style={{ textDecoration: 'none', color: 'inherit' }}>
            Cart Items
          </Link>
        </ListItem>
      </List>
    </Box>
  );


  const data = useSelector(state => state.value);

  let items = 0;

  console.log(data.map(() => items++))

  return (
    <div className="navbar">
      <div>
        <Drawer
          anchor='left'
          open={state['left']}
          onClose={toggleDrawer('left', false)}
        >
          {list('left')}
        </Drawer>
      </div>
      <Container>
        <div className="wrapper">
          <Link to='/' style={{ textDecoration: 'none' }}>
            <div className="logo">
              <span>Electronic Shop</span>
            </div>
          </Link>
          <div className="hamburger" onClick={toggleDrawer('left', true)}>
            <MenuIcon className='icon' />
          </div>
          <div className="nav_items">
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