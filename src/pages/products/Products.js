import './products.scss';
import ProductCard from '../../components/productCard/ProductCard';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {

  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState();
  const [sort, setSort] = useState();
  const [pdate, setPdate] = useState('');

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
  }, [category, pdate]);

  const handleFilter = (e) => {
    e.preventDefault();
    /*
    const arr = (Data.map((d) =>
      [d.id, d.category[1]]
    ));
    console.log(arr.map((d) => d[1]))
*/
    if (category && category !== 'none') {
      setData(Data.map((d) => d).filter((d) => d.category[1] === category));
    }
    if (sort && sort === 'Low to High') {
      setData(Data.sort((a, b) => a.price - b.price));
      setSort('');
    }
    if (sort && sort === 'High to Low') {
      setData(Data.sort((a, b) => b.price - a.price));
      setSort('');
    }

    if (pdate) {
      let pdatetime = 0;
      let datetime = 0;
      setData(Data.map((d) => d).filter((d) => {
        const compDate = new Date(d.createDate);
        const selectedDate = compDate.getFullYear() + '-' + ((compDate.getMonth() + 1) < 10 ? '0' + (compDate.getMonth() + 1) : (compDate.getMonth() + 1)) + '-' + (compDate.getDate() < 10 ? '0' + compDate.getDate() : compDate.getDate());
        var datum = Date.parse(selectedDate);
        datetime = datum / 1000;
        datum = Date.parse(pdate);
        pdatetime = datum / 1000;
        return pdatetime === datetime
      }))
      var datum = Date.parse(pdate);
      pdatetime = datum / 1000;

      console.log(pdatetime)
      console.log(datetime)
    }

  }


  return (
    <div className="product-wrapper">
      <div className="left">
        <div className="filter-title">
          <h2>Filters</h2>
        </div>
        <div className="filters">
          <form onSubmit={handleFilter}>
            <div className="filter-item">
              <label htmlFor="sort">Sort By:</label>
              <select defaultValue={'DEFAULT'} name="sort" id="sort" onChange={(e) => setSort(e.target.value)}>
                <option value="DEFAULT" disabled> -- select an option -- </option>
                <option value="Low to High">Low to High</option>
                <option value="High to Low">High to Low</option>
              </select>
              <input value={pdate} type="date" placeholder="dd-mm-yyyy" style={{ margin: "10px 0px" }} onChange={(e) => setPdate(e.target.value)} />
            </div>
            <div className="filter-title">
              <h2>Category</h2>
            </div>
            <div className="filter-item">
              <div className="inputdiv">
                <input type="radio" name="cat" value="none" defaultChecked />
                <label htmlFor="headseat">None</label><br />
              </div>
              <div className="inputdiv">
                <input type="radio" id="headseat" name="cat" value="headseat" onClick={(e) => setCategory(e.target.value)} />
                <label htmlFor="headseat">Headseat</label><br />
              </div>
              <div className="inputdiv">
                <input type="radio" id="keyboard" name="cat" value="keyboard" onClick={(e) => setCategory(e.target.value)} />
                <label htmlFor="keyboard">Keyboard</label><br />
              </div>
              <div className="inputdiv">
                <input type="radio" id="laptop" name="cat" value="laptop" onClick={(e) => setCategory(e.target.value)} />
                <label htmlFor="laptop">Laptop</label>
              </div>
              <div className="inputdiv">
                <input type="radio" id="watch" name="cat" value="watch" onClick={(e) => setCategory(e.target.value)} />
                <label htmlFor="watch">Watch</label>
              </div>
              <div>
                <input type="radio" id="mobile" name="cat" value="mobile" onClick={(e) => setCategory(e.target.value)} />
                <label htmlFor="mobile">Mobile</label>
              </div>
            </div>
            <button type='Submit'>Apply Filters</button>
          </form>
        </div>
      </div>
      <div className="right">
        <div className="products">
          {loading ? <h3 style={{ color: 'gray' }}>Loading...</h3> : null}
          {Data.map((d) => {
            const price = d.price.replace('$', '');
            d.price = price;
            return <ProductCard key={d.id} d={d} />
          }
          )}
        </div>
      </div>
    </div>
  )
}

export default Products