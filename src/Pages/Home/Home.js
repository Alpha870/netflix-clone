import './Home.css'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Row from '../../components/Row/Row'
import requests from '../../Request'

const Home = () => {
  return (
    <div>
        <Header />
        <Banner />
        <Row title="NETFLIX ORIGINALES" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
        <Row title="TOP" fetchUrl={requests.fetchTopRated}/>
        <Row title="ACCION" fetchUrl={requests.fetchActionMovies}/>
        <Row title="COMEDIA" fetchUrl={requests.fetchComedyMovies}/>
        <Row title="TERROR" fetchUrl={requests.fetchHorrorMovies}/>
        <Row title="ROMANCE" fetchUrl={requests.fetchRomanceMovies}/>
        <Row title="DOCUMENTALES" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  )
}

export default Home