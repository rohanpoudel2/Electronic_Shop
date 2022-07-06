import './productcard.scss';
import { nanoid } from 'nanoid';

const ProductCard = ({ image, name, price, stock, date, category, }) => {

  var productDate = new Date(date);

  return (
    <div className="productcard">
      <div className="productImage">
        <img src={`https://electronic-ecommerce.herokuapp.com/${image}`} alt="productimg" />
      </div>
      <div className="productDetails">
        <div className="left">
          <div className="productTitle">{name}</div>
          <div className="productPrice">Price: Rs.{price}</div>
        </div>
        <div className="right">
          <div className={`productQuantity ${stock <= 0 ? 'outofstock' : 'instock'}`}>Stock:{stock}</div>
          {category.map((d) => <div key={nanoid()} className="productCategory">{d}</div>)}
        </div>
      </div>
      <div className="productEnd">
        {stock <= 0 ?
          <button className='gray' disabled>Add to Cart</button>
          :
          <button>Add to Cart</button>}

        <div className="productListDate">{productDate.getDate()}-{productDate.getMonth() + 1}-{productDate.getFullYear()}</div>
      </div>
    </div >
  )
}

export default ProductCard