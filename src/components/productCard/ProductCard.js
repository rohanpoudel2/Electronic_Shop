import './productcard.scss';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { AddItem } from '../../redux/CartSlice';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';


const ProductCard = ({ d }) => {

  if (!localStorage.getItem('electronic-shop-rohan')) {
    localStorage.setItem('electronic-shop-rohan', []);
  }

  const [state, setState] = React.useState({
    top: false,
  });

  const [quantity, setQuantity] = React.useState(0);

  const dispatch = useDispatch();

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
      <div className="top-down">
        <h2>Set the Quantity</h2>
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        <button onClick={() => dispatch(AddItem({
          product: d,
          quantity: quantity
        }))}>
          Continue
        </button>
      </div>
    </Box>
  );

  var productDate = new Date(d.createDate);

  return (
    <div className="productcard">
      <div className="productImage">
        <img src={`https://electronic-ecommerce.herokuapp.com/${d.image}`} alt="productimg" />
      </div>
      <div className="productDetails">
        <div className="left">
          <div className="productTitle">{d.name}</div>
          <div className="productPrice">Price: Rs.{d.price}</div>
        </div>
        <div className="right">
          <div className={`productQuantity ${d.stock <= 0 ? 'outofstock' : 'instock'}`}>Stock:{d.stock}</div>
          {d.category.map((d) => <div key={nanoid()} className="productCategory">{d}</div>)}
        </div>
      </div>
      <div className="productEnd">
        {d.stock <= 0 ?
          <button className='gray' disabled>Add to Cart</button>
          :
          <button onClick={toggleDrawer('top', true)}>Add to Cart</button>}
        <Drawer
          anchor='top'
          open={state['top']}
          onClose={toggleDrawer('top', false)}
        >
          {list('top')}
        </Drawer>
        <div className="productListDate">{productDate.getDate()}-{productDate.getMonth() + 1}-{productDate.getFullYear()}</div>
      </div>
    </div >
  )
}

export default ProductCard