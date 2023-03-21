import React from 'react'
import Favourites from '../components/Favourites.jsx'
import Blogs from '../components/Blogs.jsx'

const Profile = () => {
  
  return (
    <>
      
        <div className='container-fluid'>
          <div className='row gallery mt-3'>
            <div className='col-6 favs-art'>
              <Favourites></Favourites>
            </div>
            <div className='col-6 favs-user'>
                <Blogs></Blogs>
              </div>
          </div>
        </div>
    </>
  )
}

export default Profile