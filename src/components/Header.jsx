const Header = ({showFavorites, setShowFavorites, selectedComic, setSelectedComic}) => {
    return (
     <div className="header">
        <h1>{selectedComic !== null ? selectedComic.title : (showFavorites ? 'Favoritos' : 'Marvel Comics')}</h1>
       {selectedComic === null && (<button onClick={() => setShowFavorites(!showFavorites)}>
            {showFavorites ? 'Ver Todos los Cómics' : 'Ver Favoritos'}
        </button>)}
        {selectedComic !== null && <button onClick={()=> setSelectedComic(null)}>&larr; Volver</button>}
    </div>

    )
}

export default Header;