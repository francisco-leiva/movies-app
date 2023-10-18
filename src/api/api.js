import axios from 'axios'
import { API_URL, API_KEY } from '@/utils/constants'

export async function getTrendingShows() {
  try {
    const response = await axios.get(`${API_URL}/trending/all/week`, {
      params: {
        api_key: API_KEY,
      },
    })

    const data = response.data.results
    // filter data only for movies and tv shows
    // then mapped movies and tv shows
    const newData = data
      .filter((el) => el.media_type !== 'person')
      .map((element) => {
        if (element.media_type === 'movie') {
          return {
            id: element.id,
            title: element.title,
            poster: element.poster_path,
            type: element.media_type,
          }
        } else {
          return {
            id: element.id,
            title: element.name,
            poster: element.poster_path,
            type: element.media_type,
          }
        }
      })

    return newData
  } catch (e) {
    throw new Error("Can't get trending movies and tv shows", e)
  }
}

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
      type: 'movie',
    }))

    return mappedMovies
  } catch (e) {
    throw new Error("Can't get popular movies", e)
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
      type: 'tv',
    }))

    return mappedTvShows
  } catch (e) {
    throw new Error("Can't get popular tv shows", e)
  }
}

export async function searchShows(searchKey) {
  try {
    const response = await axios.get(`${API_URL}/search/multi`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    })

    const data = response.data.results
    // filter data only for movies and tv shows
    // then mapped movies and tv shows
    const newData = data
      .filter((el) => el.media_type !== 'person')
      .map((element) => {
        if (element.media_type === 'movie') {
          return {
            id: element.id,
            title: element.title,
            poster: element.poster_path,
            type: element.media_type,
          }
        } else {
          return {
            id: element.id,
            title: element.name,
            poster: element.poster_path,
            type: element.media_type,
          }
        }
      })

    return newData
  } catch (e) {
    throw new Error("Can't search for movies and tv shows", e)
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
    throw new Error("Can't get movie details", e)
  }
}
