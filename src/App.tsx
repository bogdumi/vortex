import './App.css'

function App() {
  return (
    <>
      <div className="row">
        <div className="col-6 tile-home links-tile">
          <div className='tile-content'>
            <h1>
              Links
            </h1>
          </div>
        </div>
        <div className="col-6 tile-home about-me-tile">
          <div className='tile-content'>
            <h1>
              About Me
            </h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6 tile-home cielvision-tile">
          <div className='tile-content'>
            <h1>
              Cielvision
            </h1>
          </div>
        </div>
        <div className="col-6 tile-home rotoskop-tile">
          <div className='tile-content'>
            <h1>
              Rotoskop
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
