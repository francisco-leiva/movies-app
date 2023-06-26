import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'c1680bf7e0c2d3bb0c5f997c43d0a3f2';

export async function getUpcomingMovies() {
  try {
    const response = await axios.get(`${API_URL}/movie/upcoming`, {
      params: {
        api_key: API_KEY,
      },
    });

    const movies = response.data.results;

    return movies?.map((movie) => ({
      id: movie.id,
      title: movie.title,
      poster: movie.poster_path,
    }));
  } catch (e) {
    throw new Error('No se pudo encontrar la película');
  }
}

export async function searchMovies(searchKey) {
  try {
    const response = await axios.get(`${API_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    });

    const searchedMovies = response.data.results;

    return searchedMovies?.map((movie) => ({
      id: movie.id,
      title: movie.title,
      poster: movie.poster_path,
    }));
  } catch (e) {
    throw new Error('No se pudo encontrar la película');
  }
}

export async function getMovieDetails(id) {
  try {
    const response = await axios.get(`${API_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY,
      },
    });

    const details = response.data;
    const movieDetails = {
      title: details.title,
      poster: details.poster_path,
      tagline: details.tagline,
      description: details.overview,
      releaseDate: details.release_date,
      runtime: details.runtime,
      background: details.backdrop_path,
      genres: details.genres,
    };

    return movieDetails;
  } catch (e) {
    throw new Error('No se pudo encontrar la película');
  }
}
