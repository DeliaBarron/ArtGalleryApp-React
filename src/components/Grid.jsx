import React, { useEffect } from 'react'
import ArtistInfo from './ArtistInfo.jsx'
//Grid Context
import {useGalleryContext} from '../context/galleryContext.jsx'

const Grid = () => {
  const imageUrl='https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2545.jpg?w=360'
  const context= useGalleryContext()
  const { galleryApi, artistInfoApi, showInfo, query, setFavs, favs } = context

  useEffect(()=>{
    localStorage.setItem('favs',JSON.stringify(favs))
    console.log('favsUseEffect: ', favs)

  },[favs])
  
  function handleFavClick(item){
    let favArr=favs
    let addArr=true
    let id=item.id
    favArr.map((fav) => {
      if(fav.id === id){
        addArr= false
        console.log(fav.id, id)
      }
    })
    if(addArr){
      favArr.push(item)
    }
    setFavs([...favArr])
  }
    //   setFavs((current)=>[...current, item])
  return (
    <>
       <div className='container-fluid'>
        <div className='row gallery mt-3'>
            {
              context.loading
              ? <h1>Loading</h1>
              :galleryApi.filter((item)=>{
                if(query==''){
                  return item
                }else if(item.title.toLowerCase().includes(query.toLowerCase()) || item.id==query){
                  return item
                }
                return null
              }).map((item,id) => (
                <div key={item.id} className="cards col-lg-3 col-md-4 col-sm-6 text-center" >
                    <img src={item.url} className='img-fluid mx-auto' />
                    <button onClick={()=>handleFavClick(item)} className='like-btn' id='id' >
                     <i className="bi bi-hand-thumbs-up"></i>
                    </button>
                    <div className='mt-1 card-info'>
                        <h5 id='id'>ID: {item.id}</h5> 
                        <span>{item.title}</span>
                    </div>
                    <div>
                      {
                        showInfo ?
                        <span>...</span>:
                        <ArtistInfo  item={item} itemId={id} artistInfo={artistInfoApi}></ArtistInfo>
                      }
                      </div>
                </div>
              ))
            }
            
            
            
          
           

            
        </div>
       </div>
    </>
  )
}

export default Grid