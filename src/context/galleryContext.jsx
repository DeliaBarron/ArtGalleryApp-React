import { createContext, useContext, useEffect, useState } from "react";
import { getGallery } from "../services/getGallery.js";

const galleryContext = createContext()

function GalleryProvider (props) {
    const [galleryApi, setGalleryApi]= useState([])
    const [artistInfoApi, setArtistInfo]= useState([])
    const [showInfo, setShowInfo]=useState(true)
    const [query, setQuery]= useState('')
    const [loading, setLoading]=useState(false)
    const [favs, setFavs]=useState([])

    const getGalleryApi = async () => {
        const { galleryApi, ArtistInfoApiOG }= await getGallery()
        const galleryApiData = galleryApi.data
        const ArtistInfoApiDataOG =ArtistInfoApiOG.data
         ArtistInfoApiOG.data.push(...ArtistInfoApiOG.data)
        console.log(galleryApiData)
        console.log(ArtistInfoApiDataOG)

        if((galleryApi && ArtistInfoApiOG).status==200){
            setArtistInfo(ArtistInfoApiDataOG)
            setGalleryApi(galleryApiData)  
        }else {
            setLoading(true)
        }
    }
   
    useEffect(()=>{
        getGalleryApi()
    },[])
    const value={
        galleryApi,
        artistInfoApi,
        query,
        setQuery,
        loading,
        showInfo,
        setShowInfo,
        favs,
        setFavs
    }

    return(
        <galleryContext.Provider value={value}{...props}></galleryContext.Provider>
    )
   
}
const useGalleryContext = () => {
    const context = useContext(galleryContext)
    return context
}
export {
    GalleryProvider,
    useGalleryContext
}