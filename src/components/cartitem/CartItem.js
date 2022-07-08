import './cartitem.scss';
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem = () => {
  return (
    <div className='cartitem'>
      <div className="cart-wrapper">
        <div className="left">
          <div className="cart-items">
            <div className="cart-item">
              <div className="cart-item-content-left">
                <div className="cart-item-img">
                  <img src='https://www.btplanet.com.np/storage/backend/assets/images/product/1615356731D8aE-Slim-3i.jpg' alt="" />
                  <h4>Product Title</h4>
                </div>

              </div>
              <div className="cart-item-content-right">
                <div className="cart-item-stock">
                  <span>1</span>
                </div>
                <div className="cart-item-qty">
                  <label htmlFor="qty">Product Quantity:</label>
                  <input id='inputqty' name='qty' type='number' step='1' min='1' max='10' />
                </div>
                <div className="cart-item-delete-button">
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