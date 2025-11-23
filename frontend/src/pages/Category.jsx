import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../assets/assets'
import Product from '../components/Product'

const Category = () => {

    const { city } = useParams()
    const[product, setProduct] = useState([])

    useEffect(() => {
        const filtered = products.filter(item => item.location.includes(city))
        setProduct(filtered)
    }, [])

  return (
    
    <div className="w-full px-6 py-10 bg-white relative">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-start">
        Popular Stays in {city}
      </h2>

      <div className="flex flex-wrap justify-center md:justify-start gap-2">
        {product.map((item, index) => (
          <Product key={index} item={item} />
        ))}
      </div>
   
    </div>
  )
}

export default Category
