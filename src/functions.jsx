const keyPublica = 'ad2d4f75edc094ae7cf0a6c6b0a7dfb4'
const hash = '501bb828fbc14bead8fd41c6707fee8e'


const fetchComics = async () => {
    const url = `https://gateway.marvel.com:443/v1/public/comics?orderBy=focDate&noVariants=true&limit=40&offset=0&ts=1&apikey=${keyPublica}&hash=${hash}`
    
    return(
        fetch(url)
        .then(response => response.json())
    )
};

const getComic = (id) => {
    const url = `https://gateway.marvel.com:443/v1/public/comics/${id}?ts=1&apikey=${keyPublica}&hash=${hash}`
    
    return(
        fetch(url)
            .then(response => response.json())
    )
};

const getComicCharacters = (id) => {
    const url = `https://gateway.marvel.com:443/v1/public/comics/${id}/characters?ts=1&apikey=${keyPublica}&hash=${hash}`
    
    return(
        fetch(url)
            .then(response => response.json())
    )
};

const functions = {
    fetchComics,
    getComic,
    getComicCharacters
};

export default functions;

