import ArtistInfo from './ArtistInfo.jsx'
import { useEffect } from 'react'
const Favourites = ({ artistInfoApi, query, showInfo, setFavs,favs, favDisplay }) => {
  // const imageUrl='https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2545.jpg?w=360'
 
  let storage =favs
  console.log(favs)
  useEffect(() => {
    localStorage.setItem('favs',JSON.stringify(favs))
  },[favs])
  
  function handleRemoveFav(item){
    let favArr=storage
    let id
    let removeFav=false
    favArr.map((fav,favIndex)=>{
      if(fav.id === item.id){
        removeFav=true
        id=favIndex
      }
    })
    // console.log(id)
    if(removeFav){
      favArr.splice(id,1)
    }
    setFavs([...favArr])
    console.log(favs)

  }
  return (
    <>
        <div className='row'>
         {
           favs.length==0
           ? <div className='favs-empty'>
              <p className='m-2'>you don't have favourites yet...</p>
            </div>
           
           :storage.filter((item)=>{
             if(query==''){
               return item
             }else if(item.title.toLowerCase().includes(query.toLowerCase()) || item.id==query){
               return item
             }
             return null
           }).map((item,id) => (
             <div key={item.id} className="cards col-lg-2 col-md-4 col-sm-6 text-center" >
                 <img onClick={()=>favDisplay(item, artistInfoApi)} src={item.url} className='img-fluid mx-auto' />
                 <button onClick={()=>handleRemoveFav(item)} className='dislike-btn' id='id' >
                  <i className="bi bi-hand-thumbs-down"></i>
                 </button>
                 <div className='mt-1 card-info'>
                     <h6 id='id'>ID: {item.id}</h6> 
                     <span>{item.title}</span>
                 </div>
                 <div className='artist-info'>
                      {
                        showInfo ?
                        <span>...</span>:
                        <ArtistInfo  item={item} artistInfo={artistInfoApi}></ArtistInfo>
                      }
                  </div>
             </div>
           ))
          }
     </div>
    
 </>
  )
}

export default Favourites