import { useNavigate } from "react-router-dom";
import WishList from "./WishList.jsx";

const Product = ({item}) => {
    const navigate = useNavigate()
    const currency = "₹"
    const productId = item.id

  return (
    <div className="w-[280px] sm:w-[300px] bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden m-4 cursor-pointer">
      
      {/* Product Image */}
      <div className="relative">
        <img
          src={item.images?.[0]}
          alt="Product Image"
          onClick={() => navigate(`/product/${productId}`)}
          className="w-full h-[200px] object-cover"
        />
        <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm text-sm px-3 py-1 rounded-full text-gray-700 font-medium">
          {item.review} ⭐
        </div>
        <div className="w-12 h-12 group absolute top-3 left-3 text-sm px-3 py-1 rounded-full text-gray-700 font-medium">
          <WishList item={item.id} invert={'invert'}/>
        {/* Hover Text */}
            <div className="absolute left-10 top-1 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-sm font-semibold">Favorite</p>
            </div>
        </div>
      </div>

      {/* Product Details */}
      <div onClick={() => navigate(`/product/${productId}`)} className="p-4 space-y-2">
        <p className="text-lg font-semibold text-gray-800 truncate">
          {item.name}
        </p>
        <div className="flex justify-between items-center text-gray-700">
          <p className="text-md font-medium">
            {currency} {item.price}
          </p>
          <div className="text-md font-medium">
            {item.location}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
