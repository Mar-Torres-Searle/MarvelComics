import React, { useEffect, useState } from 'react';
import Comic from './Comic';

export default function FavoritesList ({selectedComic, onSelect}){
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites);
    }, []);

    return (
        <div className="comic-grid">
          {favorites.length > 0 ? (
            favorites.map(comic => (
            <Comic key={comic.id} comic={comic} onSelect={onSelect} />
            ))
        ) : (
            <p>No tienes cómics favoritos aún.</p>
        )}
        </div>
    );
}