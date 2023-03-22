// Components
import Favourites from '../components/Favourites.jsx'
import Blogs from '../components/Blogs.jsx'

//Hooks & Context
import React, { useState } from 'react'
import { useGalleryContext } from '../context/galleryContext.jsx'

const Profile = () => {
  const context = useGalleryContext()
  const { artistInfoApi, query, showInfo, setFavs, favs } = context

  const [favDisplayed, setFavDisplayed]=useState()

 
  function handleFavDisplay(item, artistInfo){
    
    setFavDisplayed(item)
  }

  return (
    <>
      
        <div className='container-fluid'>
          <div className='row gallery mt-3'>
            <div className='col-6 favs-art'>
              <Favourites artistInfoApi={artistInfoApi} query={query} favDisplay={handleFavDisplay} showInfo={showInfo} setFavs={setFavs} favs={favs}  ></Favourites>
            </div>
            <div className='col-6 favs-user'>
                <Blogs favs={favs}  display={favDisplayed} ></Blogs>
              </div>
          </div>
        </div>
    </>
  )
}

export default Profile