import React, { useState, useEffect } from 'react';

export default function Comic ({comic, onSelect}) {
    const [favorite, setFavorite] = useState(false);

    // Verificar si el cómic está en favoritos al cargar el componente
    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorite(favorites.some(fav => fav.id === comic.id));
    }, [comic.id]);

    // Función para gestionar favoritos
    const toggleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        let updatedFavorites;

        if (favorite) {
        updatedFavorites = favorites.filter(fav => fav.id !== comic.id);
        } else {
        updatedFavorites = [...favorites, comic];
        }

        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        setFavorite(!favorite);
    }; 

    return (
        <div className="comic-card">
            <img
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt={comic.title}
                onClick={() => onSelect(comic)} 
                className="comic-image-card"
            />
            <h3 onClick={() => onSelect(comic)}>{comic.title}</h3>  
            <button className="favorite-button" onClick={toggleFavorite}>
                {favorite ? '★ Quitar de Favoritos' : '☆ Agregar a Favoritos'}
            </button>
        </div>
    );
}