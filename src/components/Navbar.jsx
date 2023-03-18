import React from 'react'
import { useGalleryContext } from '../context/galleryContext.jsx'
import { Link } from 'react-router-dom'
const Navbar = () => {

const context = useGalleryContext()
const {setQuery, setShowInfo, showInfo}=context

  return (
    <>
    <nav>
      <div className="title">
            <Link className="logoLink" to='./'>
                <h3 className="logo">API ART GALLERY</h3>
            </Link>
        </div>
        <div className="profile">
            <Link to='./Profile' className="likes-page">
                <i className="bi bi-hand-thumbs-up"></i>
            </Link>
      </div>
      </nav>
      <div className="queryContainer">
        <input onChange={(e)=>setQuery(e.target.value)} type="text" className="query" id="query"  placeholder="Search album id or title..."/>
        <button onClick={()=>setShowInfo(!showInfo)} type="button" id="artist-info-btn" >ADD ARTIST INFO</button>
      </div>
    </>
    
  )
}

export default Navbar