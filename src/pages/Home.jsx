import React from 'react'
import Grid from '../components/Grid'
import { useGalleryContext } from '../context/galleryContext'
const Home = () => {
  const context = useGalleryContext()
  const { galleryApi, artistInfoApi, showInfo, query, setFavs, favs } = context
  
  return (
    <Grid galleryApi={galleryApi} artistInfoApi={artistInfoApi} showInfo={showInfo} query={query} setFavs={setFavs} favs={favs} ></Grid>
  )
}

export default Home