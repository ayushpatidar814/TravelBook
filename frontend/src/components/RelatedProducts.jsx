import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'

const RelatedProducts = ({ productId }) => {
    const { allProducts } = useSelector(state => state.products)
    const[products, setProducts] = useState([])

    useEffect(() => {
      if (allProducts.length > 0 && productId) {
        const currentProduct = allProducts.find(
            (item) => item.id === Number(productId)
      );

      if (currentProduct) {
        const related = allProducts.filter(
          (item) =>
            item.location === currentProduct.location &&
            item.id !== currentProduct.id
        );

      setProducts(related.slice(0, 8))
    }}
    
    }, [productId])

  return (
    <div>
      {
        (products.length > 0) && (
          <>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-start">
              Popular Stays NearBy
            </h2>

            <div className="flex flex-wrap gap-2 bg-slate-50 rounded-xl">
              {/* Related Products */}
              {
                products.map((item, key) => (
                    <Product key={key} item={item} />
                ))
              }
            </div>
          </>
        )
      }
    </div>
  )
}

export default RelatedProducts
