import React, { useState } from 'react'
import { assests } from '../assets/assets'

const WishList = ({ item, invert }) => {
    const[liked, setLiked] = useState(false)

    const addWishlist = async () => {
        console.log(item)
        setLiked(!liked)
    }

    const removeWishlist = async () => {
        setLiked(!liked)
    }

  return (
    <div>
        {
          !liked ? 
          <img onClick={addWishlist} src={assests.unlike_icon} alt='' className={`w-8 ${invert}`}/>
          :
          <img onClick={removeWishlist} src={assests.like_icon} alt="" className='w-8' />
        }
    </div>
  )
}

export default WishList
