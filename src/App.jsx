import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'; 
import menuData from './data/menus';
import jumboImg from './assets/img/jumbotron.jpg';
import comicsData from './data/comics';

const App = () => {
  return (
    <>
      <Header menus={menuData}/>
      <Main jumbobg={jumboImg} comics={comicsData}/>
      <Footer menus={menuData} />
    </>
  )
}

export default App