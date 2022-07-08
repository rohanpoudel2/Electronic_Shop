import CartItem from '../../components/cartitem/CartItem';
import CartTotal from '../../components/carttotal/CartTotal';
import './cart.scss';
import { useSelector } from 'react-redux';

const Cart = () => {

  const data = useSelector(state => state.value);

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      <div className="cart-container">
        <div className="left">
          {data.map((d) => <CartItem key={d.product.id} d={d.product} qty={d.quantity} />)}
        </div>
        <div className="right">
          <CartTotal />
        </div>
      </div>
    </div >
  )
}

export default Cart