import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

//components
import Navbar from './components/Navbar.jsx'
import AppRoutes from './routes/AppRoutes.jsx';
import Footer from './components/Footer.jsx';

//context
import { GalleryProvider } from './context/galleryContext.jsx'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <GalleryProvider>
           <Navbar />
           <AppRoutes />
        </GalleryProvider>
        <Footer></Footer>
      </BrowserRouter>
      
    </div>
  )
}




export default App
