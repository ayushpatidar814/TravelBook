import { useSelector } from 'react-redux'
import Product from '../components/Product.jsx'
import { useSearchParams } from 'react-router-dom'

const BookStay = () => {
  const { allProducts } = useSelector(state => state.products)
  const [ params ] = useSearchParams();

  const location = params.get('location')?.toLowerCase() || "";
  const guests = parseInt(params.get('guests')) || 1;
  const checkIn = params.get('checkIn') || "";
  const checkOut = params.get('checkOut') || "";

  const filtered = location.trim() !== "" ? allProducts.filter((item) => item.location.toLowerCase().includes(location)) : [];

  const hasSearch = location.trim() !== "" || checkIn || checkOut;

return (
    <div className="w-full px-6 py-10 bg-white">
      {hasSearch ? (
        filtered.length ? (
          <>
            <h2 className="text-2xl font-semibold mb-6">
              Stays in{" "}
              {location
                ? location.charAt(0).toUpperCase() + location.slice(1)
                : "your area"}
            </h2>
            <p className="text-gray-600 font-medium text-sm mb-4">
              {checkIn && checkOut
                ? `${new Date(checkIn).toLocaleDateString()} - ${new Date(
                    checkOut
                  ).toLocaleDateString()}`
                : "Flexible dates"}{" "}
              • {guests} guest{guests > 1 ? "s" : ""}
            </p>
            <div className="flex flex-wrap gap-2">
              {filtered.map((item) => (
                <Product key={item.id} item={item} />
              ))}
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              No stays found for “{location}”
            </h2>
            <h3 className="text-lg text-gray-600 mb-6">
              Find your dream stay below...
            </h3>
            <div className="flex flex-wrap gap-2">
              {allProducts.map((item) => (
                <Product key={item.id} item={item} />
              ))}
            </div>
          </>
        )
      ) : (
        <>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            Find your dream stay...
          </h2>
          <div className="flex flex-wrap gap-2">
            {allProducts.map((item) => (
              <Product key={item.id} item={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default BookStay;