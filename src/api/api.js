import axios from 'axios'
import { API_URL, API_KEY } from '@/utils/constants'

export async function getPopularMovies() {
  try {
    const response = await axios.get(`${API_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
      },
    })

    const movies = response.data.results
    const mappedMovies = movies.map((movie) => ({
      id: movie.id,
      title: movie.title,
      poster: movie.poster_path,
    }))

    return mappedMovies
  } catch (e) {
    throw new Error('No se pudo encontrar la película')
  }
}

export async function getNowPlayingMovies() {
  try {
    const response = await axios.get(`${API_URL}/movie/now_playing`, {
      params: {
        api_key: API_KEY,
      },
    })

    const movies = response.data.results
    const mappedMovies = movies.map((movie) => ({
      id: movie.id,
      title: movie.title,
      poster: movie.poster_path,
    }))

    return mappedMovies
  } catch (e) {
    throw new Error('No se pudo encontrar la película')
  }
}

export async function getPopularTvShows() {
  try {
    const response = await axios.get(`${API_URL}/tv/popular`, {
      params: {
        api_key: API_KEY,
      },
    })

    const tvShows = response.data.results
    const mappedTvShows = tvShows.map((show) => ({
      id: show.id,
      title: show.name,
      poster: show.poster_path,
    }))

    return mappedTvShows
  } catch (e) {
    throw new Error('No se pudo encontrar la película')
  }
}

export async function searchMovies(searchKey) {
  try {
    const response = await axios.get(`${API_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    })

    const movieSearch = response.data.results
    const mappedMoviesSearch = movieSearch.map((movie) => ({
      id: movie.id,
      title: movie.title,
      poster: movie.poster_path,
    }))

    return mappedMoviesSearch
  } catch (e) {
    throw new Error('No se pudo encontrar la película')
  }
}

export async function getMovieDetails(id) {
  try {
    const response = await axios.get(`${API_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY,
      },
    })

    const { data } = response
    const movieDetails = {
      title: data.title,
      poster: data.poster_path,
      tagline: data.tagline,
      description: data.overview,
      releaseDate: data.release_date,
      runtime: data.runtime,
      backdrop: data.backdrop_path,
      genres: data.genres,
    }

    return movieDetails
  } catch (e) {
    throw new Error('No se pudo encontrar la película')
  }
}
