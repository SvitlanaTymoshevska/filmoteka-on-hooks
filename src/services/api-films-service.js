import axios from "axios";

const API_KEY = '115b567d77b04428b1251a93b22d9778';

export async function fetchFilms (page, query) {  
    let URL = "";
    if (query) {
        URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`;
    } else {
        URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=${page}`;
    }

    const response = await axios.get(URL);
    const results = response.data.results;

    if (results.length === 0 && query) {
      throw new Error();
    }

    return [results, response.data.total_pages];
}

export async function fetchGenres() {
    const URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
    const response = await axios.get(URL);

    return response.data.genres;
}