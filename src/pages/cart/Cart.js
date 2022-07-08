import CartItem from '../../components/cartitem/CartItem';
import CartTotal from '../../components/carttotal/CartTotal';
import './cart.scss';

const Cart = () => {

  if (localStorage.getItem('electronic-shop-rohan') == null) {
    const data = 'No Items in Cart'
  } else {

  }

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      <div className="cart-container">
        <div className="left">
          <CartItem />
        </div>
        <div className="right">
          <CartTotal />
        </div>
      </div>
    </div >
  )
}

export default Cart