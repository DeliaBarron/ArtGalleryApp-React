import React from 'react'

const ArtistInfo = ({artistInfo, itemId}) => {
    let id= itemId
    let item=artistInfo[id]

  return (
    <>
      
        <ul className='artist-info__ul mt-2'>
         <li>{item.name}</li>
         <li>{item.email}</li>
         <li>{item.address.city} City</li>
        </ul>
      
   
      
    </>
  )
}

export default ArtistInfo
