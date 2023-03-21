import {useGalleryContext} from '../context/galleryContext.jsx'
import ArtistInfo from './ArtistInfo.jsx'

const Favourites = () => {
  // const imageUrl='https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2545.jpg?w=360'
  const context = useGalleryContext()
  const { artistInfoApi, query,showInfo} =context
  let storage=JSON.parse(localStorage.getItem('favs'))


  return (
    <>
        <div className='row'>
         {
           context.loading
           ? <h1>Loading</h1>
           :storage.filter((item)=>{
             if(query==''){
               return item
             }else if(item.title.toLowerCase().includes(query.toLowerCase()) || item.id==query){
               return item
             }
             return null
           }).map((item,id) => (
             <div key={item.id} className="cards col-lg-2 col-md-4 col-sm-6 text-center" >
                 <img src={item.url} className='img-fluid mx-auto' />
                 <button onClick={()=>handleFavClick(item)} className='dislike-btn' id='id' >
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
                        <ArtistInfo  item={item} itemId={id} artistInfo={artistInfoApi}></ArtistInfo>
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