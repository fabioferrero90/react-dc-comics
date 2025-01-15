
const Main = (props) => {

  const style = {
    backgroundImage: 'url(' + props.jumbobg + ')',
    height: '400px',
    backgroundSize: 'cover',
  }

  return (
    <main>
      <div className="main-content">
        <div className="jumbotron" style={style}>
          <div className="container">
            <div className="jumbo-title">
              <h2>CURRENT SERIES</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card-grid d-flex flex-wrap justify-content-around">
            {props.comics.map(comic => (
              <div key={comic.id} className="card-container">
                <div className="img-container">
                  <img src={comic.thumb}></img>
                </div>
                <h3>{comic.title}</h3>
              </div>
            ))}
          </div>
          <div className="load-more d-flex justify-content-center">
            <button>LOAD MORE</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main