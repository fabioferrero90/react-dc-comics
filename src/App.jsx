import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'; 
import menuData from './data/menus';

const App = () => {
  return (
    <>
      <Header menus={menuData}/>
      <Main />
      <Footer menus={menuData} />
    </>
  )
}

export default App