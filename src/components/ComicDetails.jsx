import React, { useState, useEffect } from 'react';
import functions from '../functions';

export default function ComicDetails ({comicId, onBack}){
    const [comic, setComic] = useState(null);
    useEffect(() => {
        functions.getComic(comicId.id).then(data => {
            const characters = functions.getComicCharacters(comicId.id).then(dataCharacters => {
                setComic({...data.data.results[0], characters: dataCharacters.data.results});
            });
        });
    }, [comicId]);
    if (!comic) return (
        <div className="comic-detail --loading">
            <h2>Cargando...</h2>
        </div>
    );
    return (
        <div className="comic-detail">
            <div className="comic-image-container">
            <img
                src={comic.thumbnail.path + '.' + comic.thumbnail.extension}
                alt={comic.title}
                className="comic-image"
            />
            </div>
            <div className="comic-info">
                <p>{comic.description || 'Descripción no disponible.'}</p>
                
                {comic.characters.length > 0 && (
                    <>
                        <h4>Personajes:</h4>
                        <div className="character-gallery">
                            {comic.characters.map((character, index) => (
                                <div key={index} className="character-card">
                                    <img
                                        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                                        alt={character.name}
                                        className="character-image"
                                    />
                                    <h5>{character.name}</h5>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}