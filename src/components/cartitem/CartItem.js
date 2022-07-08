import './cartitem.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { DeleteItem } from '../../redux/CartSlice';

const CartItem = ({ d, qty }) => {

  const dispatch = useDispatch();

  return (
    <div className='cartitem'>
      <div className="cart-wrapper">
        <div className="left">
          <div className="cart-items">
            <div className="cart-item">
              <div className="cart-item-content-left">
                <div className="cart-item-img">
                  <img src={`https://electronic-ecommerce.herokuapp.com/${d.image}`} alt="imgcart" />
                  <h4>{d.name}</h4>
                </div>

              </div>
              <div className="cart-item-content-right">
                <div className="cart-item-stock">
                  <span>{d.stock}</span>
                </div>
                <div className="cart-item-qty">
                  <label htmlFor="qty">Product Quantity: {qty}</label>
                </div>
                <div className="cart-item-delete-button" onClick={() => { dispatch(DeleteItem(d)) }}>
                  <DeleteIcon fontSize='md' />
                  Delete
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem