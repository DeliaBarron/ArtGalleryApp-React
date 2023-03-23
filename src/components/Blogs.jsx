// import React, { useEffect } from 'react'


const Blogs = ({ display, favs }) => {
  let artInfo
  let artistInfo
  if(favs.length===0){
    display=false
  }
  if(display){
    artInfo=display[0]
    artistInfo=display[1]
  }
 
  console.log(artInfo)
  console.log(artistInfo)

  return (
      <div className='blog container-fluid'>
       <div className="row">
            {
              display?
              <>
               <div className="col-lg-7">
                  <img src={artInfo.url} className='img-fluid mx-auto' />
               </div>
               <div className='col-lg-5 blog-list'>
               <h3 className='blog-title'>About Artist</h3>
                 <p> <span className='highlight-text'>Name:</span> {artistInfo.name} </p>
                 <p> <span className='highlight-text'>Email:</span> {artistInfo.email} </p>
                 <p> <span className='highlight-text'>Company:</span> {artistInfo.company.name} </p>
                 <p> <span className='highlight-text'>City:</span> {artistInfo.address.city} </p>
                 <p> <span className='highlight-text'>Motto:</span>  {`"${artistInfo.company.catchPhrase}"`} </p>
                 <p> <span className='highlight-text'>Phone:</span> {artistInfo.phone} </p>
                 </div>
                 <div className='row mt-3 blog-about-photo'>
                  <h3 className='blog-title'>About photo</h3>
                  <p> <span style={{fontWeight:400}}>Title:</span> {`"${artInfo.title}"`} </p>
                  <p> <span style={{fontWeight:400}}>Album No:</span> {artInfo.albumId} </p>
                  <p> <span style={{fontWeight:400}}>Photo No:</span> {artInfo.id} </p>
                </div>
              </>
              :
              <> 
                <div className="col-lg-7 blog-foto">
             
                </div>
                <div className='row mt-3' style={{color:"gray", fontStyle:"italic"}}>
                  <p> click a photo to display more information ...</p>
                </div>  
              </>
              
            }
         
        </div>
        
       </div>

    
  )
}

export default Blogs