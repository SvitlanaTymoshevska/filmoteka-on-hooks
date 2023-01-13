import axios from "axios";
import { API_KEY } from "./api-key";

export async function getPopularFilms (page) {  
    const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=${page}`;
    const response = await axios.get(URL);
    
    return response.data.results;
}