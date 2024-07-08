import React, { useState } from 'react'
import { Rating } from '@smastrom/react-rating'

function Star({prod}) {
    const [rating, setRating] = useState(3);
    // console.log(value)
  return <>
    <Rating
        style={{ maxWidth: 180 }}
        value={rating}
        onChange={setRating}
      />
        {
            console.log(`Rating of the Product : ${prod} is ${rating}`)
        }
  </>
}

export default Star
