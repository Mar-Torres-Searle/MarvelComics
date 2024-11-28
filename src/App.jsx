import { useState, useEffect } from 'react'
import './App.css'
import Comics from './components/ComicList'
import ComicDetails from './components/ComicDetails'
import ComicList from './components/ComicList'
import FavoritesList from './components/FavoritesList'
import Header from './components/Header'
import functions from './functions'

function App() {

  const [comics, setComics] = useState([]);
  const [selectedComic, setSelectedComic] = useState(null);
  const [showFavorites, setShowFavorites] = useState(false);

  //Fetch para obtener los comics de la api
  useEffect(() => {
    functions.fetchComics().then(data => setComics(data.data.results));
    
  }, []);

  const handleComicSelect = (comic) => setSelectedComic(comic);
  const handleBackToList = () => setSelectedComic(null);
  

  return(
     <>
        <Header showFavorites={showFavorites} setShowFavorites={setShowFavorites} selectedComic={selectedComic} setSelectedComic={setSelectedComic} />
        {selectedComic ? (
          <ComicDetails comicId={selectedComic} onBack={handleBackToList} />
        ) : showFavorites ? (
          <FavoritesList onSelect={handleComicSelect} />
        ) : (
          <ComicList comics={comics} onSelect={handleComicSelect} />
        )}
    </>
  )
}

export default App


