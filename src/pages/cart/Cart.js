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
          {data.map((d) => { return <CartItem key={d.id} d={d} /> })}
        </div>
        <div className="right">
          <CartTotal d={data} />
        </div>
      </div>
    </div >
  )
}

export default Cart