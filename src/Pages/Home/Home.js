import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Row from '../../components/Row/Row'
import requests from '../../Request'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Header />
        <Banner />
        <Row title="Titulos más buscados" fetchUrl={requests.fetchTrending}/>
        <Row title="Tendencias ahora" fetchUrl={requests.fetchTopRated}/>
        <Row title="Ciencia ficción acción" fetchUrl={requests.fetchActionMovies}/>
        <Row title="Comedias" fetchUrl={requests.fetchComedyMovies}/>
        <Row title="Terror" fetchUrl={requests.fetchHorrorMovies}/>
        <Row title="Romances" fetchUrl={requests.fetchRomanceMovies}/>
        <Row title="Documentales" fetchUrl={requests.fetchDocumentaries}/>
        <Footer />
    </div>
  )
}

export default Home