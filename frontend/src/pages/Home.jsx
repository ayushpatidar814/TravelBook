import { useEffect, useState } from 'react'
import GroupByCity from '../components/GroupByCity.jsx'
import HeroSection from '../components/HeroSection.jsx'
import { products } from '../assets/assets.js'

const Home = () => {
  const[product, setProduct] = useState([])

  useEffect(() => {
    const duplicate = new Set();

    const filter = products.filter((item) => {
      if(duplicate.has(item.city)) return false;

      duplicate.add(item.city);
      return true;
    });

    setProduct(filter)
  }, [])

  return (
    <div>
      <HeroSection />
      {
        product.map((item) => (
          <GroupByCity city={item.city} />
        ))
      }
    </div>
  )
}

export default Home
