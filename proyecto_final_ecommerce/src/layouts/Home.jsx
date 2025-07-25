import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import GalleryProducts from '../components/GalleryProducts.jsx'

const Home = () => {
  return (
    <div className='home-container'>
      <Header/>
      <div className='home-main'>
        <h1 style={{margin: '1rem'}}>Welcome!</h1>
        <GalleryProducts/>  
      </div>
      <Footer/>
    </div>
  )
}

export default Home