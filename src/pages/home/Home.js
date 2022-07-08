import './home.scss';
import Carousel from '../../components/carousel/Carousel';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../../components/productCard/ProductCard';
import Banner from '../../components/banner/Banner';

const Home = () => {

  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const url = 'https://electronic-ecommerce.herokuapp.com/api/v1/product';
    await axios.get(url).then((data) => {
      setLoading(false);
      setData(data.data.data.product);
    }).catch((error) => {
      console.log(error.message);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="home">
      <Carousel />
      <div className="deals">
        <div className="title">
          <h1>Deals of the Day</h1>
        </div>
        <div className="products">
          {loading ? <h3 style={{ color: 'gray' }}>Loading...</h3> : null}
          {
            Data.map((data) => {
              const price = parseInt(data.price.replace('$', ''));
              if (price < 500) {
                return <ProductCard key={data.id} id={data.id} image={data.image} name={data.name} price={price} stock={data.stock} date={data.createDate} category={data.category} />
              }
              else {
                return null;
              }
            }
            )
          }
        </div>
      </div>
      <Banner url1='https://m.media-amazon.com/images/S/aplus-media/vc/ab1f6527-bcbe-4eaa-82f5-b27f55188153.__CR0,0,1464,600_PT0_SX1464_V1___.jpg' url2='https://i02.appmifile.com/482_operator_sg/28/01/2022/945a297f5c4cee0d3af4b06705290a31.jpg' />
    </div>
  )
}

export default Home