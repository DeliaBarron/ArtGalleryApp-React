import React from 'react'

const ArtistInfo = ({artistInfo, itemId}) => {
    let id= itemId
    let item=artistInfo[id]
    
    // let email=artistInfo[id].email
    console.log('id:',id, 'name:',name)
    console.log(artistInfo)

  return (
    <>
      <div className='i'>
        <ul className='artist-info mt-2'>
         <li>{item.name}</li>
         <li>{item.email}</li>
         <li>{item.address.city} City</li>
        </ul>
      </div>
   
      
    </>
  )
}

export default ArtistInfo
{/* <ul className='artist-info mt-2'>
               <li>{artistInfo[0].name}</li>
               <li>{artistInfo[0].email}</li>
               <li>{artistInfo[0].website}</li>
               <li>{artistInfo[0].address.city} City</li>
               </ul> */}