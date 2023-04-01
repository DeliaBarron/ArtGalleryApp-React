# Art Gallery REACT.js 
---
### Getting Started 
This project was done with React hooks and overall framework.
##### Prerequisites
Git
Node: any 12.x version starting with v12.0.0 or greater

##### Installation
Install [Node.Js](https://nodejs.org/en) in case of it being your first time.
Open your terminal and run the next lines:

###### Commands to get you started and play the game:

`npm i` to install all the style dependencies (Bootstrap, axios, icons and more from React's API)
##### Running locally
`npm run dev` to start the developement server.
`open http://localhost:5173` to open the site in your favourite browser.
- In this case, the local host will be on port `5173` because of the dev server is hosted by [Vite](https://vitejs.dev/guide/). (For more info click the link)
- The page will reload when you make changes.
- You may also see any lint errors in the console.

### API Fetch.
---
Welcome to the guideline through another API exercise. Where you'll find a bit of React Hooks info, HTML, CSS and CSS.

### Promise.All( ) & Axios
In 2020, Axios updated their documentation reflecting that axios.all method has been deprecated and should be replaced with **Promise.all**
since this update, the proposal to get rid of both **axios.all** and **axios.spread** has been there.

##### Promise.all( )
Pomise.all method returns a **single Promise** that fulfills when all of the iterable input's promises fulfill. 

###### parameters
 - **iterable:** array of promises
 ###### return values
- **Asynchronously fulfilled:** the fulfillment value is an array of fulfillment values in the order of the promises passed, regardless of completion order. 

#### getGallery.js
###### ./src/services/getGallery.js
```js
import axios from "axios";
//
export const getGallery =async() =>{
   let [galleryApi, ArtistInfoApiOG]=await Promise.all(endpoints.map((endpoint)=> axios.get(endpoint)))
   
   return {galleryApi, ArtistInfoApiOG}
}
```

