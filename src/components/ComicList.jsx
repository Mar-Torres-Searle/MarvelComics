import React from 'react';
import Comic from './Comic';

export default function ComicList ({comics, onSelect}){
    return (
        <div className="comic-grid">
          {comics.map(comic => (
            <Comic key={comic.id} comic={comic} onSelect={onSelect} />
          ))}
        </div>
    );
}