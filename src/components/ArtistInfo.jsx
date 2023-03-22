import React from 'react'

const ArtistInfo = ({artistInfo, item}) => {
    let artist
    artistInfo.forEach((ele, index) => {
      if((index+1)===item.id){
        artist=ele
      }
    })

  return (
    <>
      
        <ul className='artist-info__ul mt-2'>
         <li>{artist.name}</li>
         <li>{artist.email}</li>
         <li>{artist.address.city} City</li>
        </ul>
      
   
      
    </>
  )
}

export default ArtistInfo
