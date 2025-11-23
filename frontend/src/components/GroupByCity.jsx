import React, { useEffect, useState } from 'react'
import Product from './Product.jsx'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const GroupByCity = ({ city }) => {

    const { allProducts } = useSelector(state => state.products)
    const[product, setProduct] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        let filtered = allProducts.filter(item => item.location.includes(city)).slice(0, 8)
        setProduct(filtered.slice(0, 4))
    }, [])

  return product ? (
    <div className="w-full px-6 py-10 bg-white relative">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-start">
        Popular Stays in {city}
      </h2>
      <h3 onClick={() => navigate(`/city/${city}`)} className='text-lg text-blue-600 absolute right-12 top-20 cursor-pointer'>See More...</h3>

      <div className="flex flex-wrap justify-center md:justify-start gap-2">
        {product.map((item, index) => (
          <Product key={index} item={item} />
        ))}
      </div>
    </div>
  ) 
  : null
}

export default GroupByCity
