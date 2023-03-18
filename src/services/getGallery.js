import axios from "axios";

let endpoints= [
   'https://jsonplaceholder.typicode.com/photos?_limit=20',
   'https://jsonplaceholder.typicode.com/users'
]

//  export const getGallery = () => {
//      axios.all(endpoints.map((promise) => axios.get(promise)))
//      .then(axios.spread((galleryApiData, ArtistInfoApiData) => {
//         return ({
//                 galleryApiData,
//                 ArtistInfoApiData
//                })
//      }))
//  }
export const getGallery =async() =>{
   let [galleryApi, ArtistInfoApiOG]=await Promise.all(endpoints.map((endpoint)=> axios.get(endpoint)))
   
   return {galleryApi, ArtistInfoApiOG}
}
