import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import WishList from '../components/WishList'
import { assests, products } from '../assets/assets.js'
import RelatedProducts from '../components/RelatedProducts.jsx'

const ProductPage = () => {
    const { productId } = useParams()
    
    const[product, setProduct] = useState([]);
    const[imageVisible, setImageVisible] = useState(false);
    const[mainImage, setMainImage] = useState(product.images?.[0]);
    const[checkIn, setCheckIn] = useState();
    const[checkOut, setCheckOut] = useState();
    const[guest, setGuest] = useState(1)

    const handleBooking = async () => {
        console.log(typeof(checkIn), typeof(checkOut), typeof(guest))
    }

    useEffect(() => {
        const filtered = products.filter(item => item.id === Number(productId))
        const selectedProduct = filtered?.[0];
        setProduct(selectedProduct);

        if(selectedProduct?.images?.length > 0) {
            setMainImage(selectedProduct.images[0])
        }

    }, [productId])

  return (
    <> 
    {
        imageVisible ? 
        <div className='flex flex-col gap-6 md:p-8 bg-slate-50 rounded-xl'>
        
            <img onClick={() => setImageVisible(false)} src={assests.cross_icon} alt="cross icon" className='w-6 h-6 cursor-pointer' />
            {/* ---------- Image Section ---------- */}
            <div className="w-full flex flex-col items-center">
            {/* Main Image */}
                <div className="w-full max-w-6xl h-[400px] md:h-[550px] overflow-hidden rounded-2xl shadow-md mb-5">
                    <img
                        src={mainImage}
                        alt={product.name}
                        className="w-full h-full object-cover rounded-2xl hover:scale-[1.02] transition-transform duration-300"
                    />
                </div>

                {/* Scrollable Thumbnails */}
                <div className="w-full max-w-6xl overflow-x-auto scroll-smooth scrollbar-thin scrollbar-thumb-teal-500 scrollbar-track-slate-100 rounded-xl shadow-inner">
                    <div className="flex gap-3 md:gap-4 w-max px-2 py-2">
                        {product.images?.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Stay image ${index + 1}`}
                                onClick={() => setMainImage(img)}
                                className={`w-28 h-20 md:w-36 md:h-28 object-cover rounded-xl cursor-pointer border-2 transition-all duration-300 ${
                                mainImage === img
                                    ? "border-teal-600 scale-105 shadow-md"
                                    : "border-transparent hover:scale-105"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* ---------- Details Section ---------- */}
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-10 bg-white p-8 rounded-2xl shadow-md">

                {/* Left: Stay Info */}
                <div className="flex-1 space-y-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">{product.name}</h1>
                        <div className="relative group">
                            <WishList item={productId} />
                            <div className="absolute top-8 left-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-sm font-semibold text-black bg-slate-100 px-2 py-1 rounded">Favorite</p>
                            </div>
                        </div>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>

                    <div className="space-y-2 text-gray-700">
                        <p><strong>📍 Location:</strong> {product.location}</p>
                        <p><strong>⭐ Review:</strong> {product.review}</p>
                    </div>

                    <div className="flex gap-3 items-center pt-3">
                        <img
                            src={product.author_image}
                            alt={product.author_name}
                            className="w-12 h-12 rounded-full border-2 border-teal-500"
                        />
                        <p className="text-gray-700 font-medium">Hosted by {product.author_name}</p>
                    </div>
                </div>

                {/* Right: Booking Section */}
                <div className="w-full lg:w-[380px] bg-slate-50 rounded-2xl shadow-inner p-6 space-y-5">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Book Your Stay</h2>

                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="text-sm font-medium text-gray-600">Check-In</label>
                            <input
                                type="date"
                                value={checkIn}
                                onChange={(e) => setCheckIn(e.target.value)}
                                className="w-full border rounded-lg p-2 text-gray-700 focus:ring-2 focus:ring-teal-500 outline-none"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-600">Check-Out</label>
                            <input
                                type="date"
                                value={checkOut}
                                onChange={(e) => setCheckOut(e.target.value)}
                                className="w-full border rounded-lg p-2 text-gray-700 focus:ring-2 focus:ring-teal-500 outline-none"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-600">Guests</label>
                        <input
                            type="number"
                            min="1"
                            value={guest}
                            onChange={(e) => setGuest(e.target.value)}
                            className="w-full border rounded-lg p-2 text-gray-700 focus:ring-2 focus:ring-teal-500 outline-none"
                            placeholder="2"
                        />
                    </div>

                    <button
                        onClick={handleBooking}
                        className="w-full bg-teal-600 text-white text-lg py-3 rounded-full hover:bg-teal-700 transition-all duration-300 mt-3"
                    >
                        Book a Stay
                    </button>
                </div>
            </div>
        </div>
    :
        <div className="flex flex-col lg:flex-row gap-6 md:p-8 bg-slate-50 rounded-xl">
  
            {/* LEFT SECTION - Product Images */}
            <div className="flex-1">
                <div className="max-w-5xl mx-auto relative">
                    {/* Title + Wishlist */}
                    <div className="flex justify-between items-center mb-4 md:mb-6">
                        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">{product.name}</h1>
                        <div className="w-30 h-20 relative group flex items-center justify-end rounded-full text-gray-700 font-medium">
                            {/* Hover Text */}
                            <div className="absolute left-8 top-7 opacity-0 group-hover:opacity-100 transition-all duration-300 ">
                                <p className="text-black text-sm font-semibold">Favorite</p>
                            </div>
                           <WishList item={productId} />
                        </div>
                    </div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-4 grid-rows-3 gap-2 md:gap-3">
                        {/* Main large image */}
                        <div className="col-span-3 row-span-2">
                            <img
                                src={product.images?.[0]}
                                alt={product.name}
                                className="w-full h-full md:h-80 object-cover rounded-xl hover:scale-[1.02] transition-transform duration-300"
                            />
                        </div>

                        {/* Right stacked images */}
                        <div className="col-span-1 row-span-2 flex flex-col gap-2 md:gap-3">
                            <img
                                src={product.images?.[1]}
                                alt={product.name}
                                className="w-full h-1/2 object-cover rounded-xl hover:scale-[1.03] transition-transform duration-300"
                            />
                            <img
                                src={product.images?.[2]}
                                alt={product.name}
                                className="w-full h-1/2 object-cover rounded-xl hover:scale-[1.03] transition-transform duration-300"
                            />
                        </div>

                        {/* Bottom row of images */}
                        <div className="col-span-4 grid grid-cols-3 gap-2 md:gap-3">
                            <img
                                src={product.images?.[3]}
                                alt={product.name}
                                className="w-full h-32 md:h-40 object-cover rounded-xl hover:scale-[1.03] transition-transform duration-300"
                            />
                            <img
                                src={product.images?.[4]}
                                alt={product.name}
                                className="w-full h-32 md:h-40 object-cover rounded-xl hover:scale-[1.03] transition-transform duration-300"
                            />
                            <img
                                src={product.images?.[5]}
                                alt={product.name}
                                className="w-full h-32 md:h-40 object-cover rounded-xl hover:scale-[1.03] transition-transform duration-300"
                            />
                        </div>
                    </div>

                    {/* Button */}
                    <button onClick={() => setImageVisible(true)} className="absolute bottom-0 right-0 px-4 p-2 text-black bg-white font-medium rounded-full opacity-60 cursor-pointer hover:font-bold hover:opacity-90">Explore all images</button>
                </div>
            </div>

            {/* RIGHT SECTION - Booking Card */}
            <div className="w-full lg:w-[350px] bg-white rounded-2xl shadow-md p-5 md:p-6 flex flex-col justify-between">
                {/* Details */}
                <div className="space-y-3 mb-4">
                    <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>
                    <p className="text-gray-600"><strong>📍 Location:</strong> {product.location}</p>
                    <p className="text-gray-600"><strong>⭐ Review:</strong> {product.review}</p>
                    <div className='flex gap-2 items-center'>
                        <img src={product.author_image} alt="" className='w-10 h-10 border border-green-500 rounded-full' />
                        <p className="text-gray-600 font-medium">Hosted By {product.author_name}</p>
                    </div>
                </div>

                {/* Booking Inputs */}
                <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="text-sm font-medium text-gray-600">Check-In</label>
                            <input type="date" onChange={(e) => setCheckIn(e.target.value)} value={checkIn} className="w-full border rounded-lg p-2 text-gray-700" />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-600">Check-out</label>
                            <input type="date" onChange={(e) => setCheckOut(e.target.value)} value={checkOut} className="w-full border rounded-lg p-2 text-gray-700" />
                        </div>
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-600">Guests</label>
                        <input type="number" min="1" onChange={(e) => setGuest(e.target.value)} value={guest} className="w-full border rounded-lg p-2 text-gray-700" placeholder="2" />
                    </div>

                    {/* Book Button */}
                    <button onClick={handleBooking} className="w-full bg-teal-600 text-white text-lg py-3 rounded-full hover:bg-teal-700 transition-all duration-300 mt-4">
                        Book a Stay
                    </button>
                </div>
            </div>
        </div>
    }
        <div className="flex flex-col lg:flex-row gap-6 md:p-8 bg-slate-50 rounded-xl">
            <div className="mt-10 px-4 w-full ">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Amenities Included</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <img src={assests.wifi_icon} alt="Wi-Fi" className="w-6 h-6" />
                            <p className={`${product?.amenities?.includes('Free Wi-Fi') ? '' : 'line-through decoration-gray-700'}`}>Free Wi-Fi</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src={assests.tv_icon} alt="TV" className="w-6 h-6" />
                            <p className={`${product?.amenities?.includes('Smart TV') ? '' : 'line-through decoration-gray-700'}`}>Smart TV</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src={assests.air_conditioner} alt="AC" className="w-6 h-6" />
                            <p className={`${product?.amenities?.includes('Air Conditioning') ? '' : 'line-through decoration-gray-700'}`}>Air Conditioning</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src={assests.swimming} alt="Pool" className="w-6 h-6" />
                            <p className={`${product?.amenities?.includes('Swimming Pool') ? '' : 'line-through decoration-gray-700'}`}>Swimming Pool</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src={assests.kitchen_table} alt="Kitchen" className="w-6 h-6" />
                            <p className={`${product?.amenities?.includes('Kitchen Access') ? '' : 'line-through decoration-gray-700'}`}>Kitchen Access</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src={assests.bed} alt="Kitchen" className="w-6 h-6" />
                            <p className={`${product?.amenities?.includes('King/Queen Size Bed') ? '' : 'line-through decoration-gray-700'}`}>King/Queen Size Bed</p>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <img src={assests.parked_car} alt="Parking" className="w-6 h-6" />
                            <p className={`${product?.amenities?.includes('Free Parking') ? '' : 'line-through decoration-gray-700'}`}>Free Parking</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src={assests.breakfast} alt="Breakfast" className="w-6 h-6" />
                            <p className={`${product?.amenities?.includes('Breakfast Included') ? '' : 'line-through decoration-gray-700'}`}>Breakfast Included</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src={assests.cctv_camera} alt="CCTV" className="w-6 h-6" />
                            <p className={`${product?.amenities?.includes('24/7 CCTV') ? '' : 'line-through decoration-gray-700'}`}>24/7 CCTV</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src={assests.dumbbell} alt="Gym" className="w-6 h-6" />
                            <p className={`${product?.amenities?.includes('Fitness Center') ? '' : 'line-through decoration-gray-700'}`}>Fitness Center</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src={assests.pet_care} alt="Pet Friendly" className="w-6 h-6" />
                            <p className={`${product?.amenities?.includes('Pet Friendly') ? '' : 'line-through decoration-gray-700'}`}>Pet Friendly</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src={assests.room_service} alt="Pet Friendly" className="w-6 h-6" />
                            <p className={`${product?.amenities?.includes('Room Service') ? '' : 'line-through decoration-gray-700'}`}>Room Service</p>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <img src={assests.balcony} alt="Balcony" className="w-6 h-6" />
                            <p className={`${product?.amenities?.includes('Private Balcony') ? '' : 'line-through decoration-gray-700'}`}>Private Balcony</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src={assests.facial_treatment} alt="Spa" className="w-6 h-6" />
                            <p className={`${product?.amenities?.includes('Spa Access') ? '' : 'line-through decoration-gray-700'}`}>Spa Access</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src={assests.bar_counter} alt="Bar" className="w-6 h-6" />
                            <p className={`${product?.amenities?.includes('Mini Bar') ? '' : 'line-through decoration-gray-700'}`}>Mini Bar</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src={assests.heater} alt="Heating" className="w-6 h-6" />
                            <p className={`${product?.amenities?.includes('Heating') ? '' : 'line-through decoration-gray-700'}`}>Heating</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src={assests.mountains} alt="View" className="w-6 h-6" />
                            <p className={`${product?.amenities?.includes('Mountain View') ? '' : 'line-through decoration-gray-700'}`}>Mountain View</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src={assests.beach} alt="View" className="w-6 h-6" />
                            <p className={`${product?.amenities?.includes('Sea/Lake View') ? '' : 'line-through decoration-gray-700'}`}>Sea/Lake View</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div className="flex flex-col justify-center lg:flex-row gap-6 p-4 md:p-8 bg-slate-50 rounded-xl">
            {/* Map */}
            <div className='w-full lg:w-[600px] h-[300px] md:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden shadow-md'>
                <iframe
                    src={`https://www.google.com/maps?q=${encodeURIComponent(product.location)}&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 md:p-8 bg-slate-50 rounded-xl">
            {/* Review */}
        </div>

        <div className="flex flex-col lg:flex-row gap-6 md:p-8 bg-slate-50 rounded-xl">
            {/* Related Products */}
            <RelatedProducts productId={productId} />
        </div>
    </>
  )
}

export default ProductPage
