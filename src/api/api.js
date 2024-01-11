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
    // filter by movies and tv shows
    // then return an object for each one
    const trendingShows = data
      .filter((el) => el.media_type !== 'person')
      .map((element) => {
        if (element.media_type === 'movie') {
          return {
            id: element.id,
            title: element.title,
            posterPath: element.poster_path,
            type: element.media_type,
          }
        } else {
          return {
            id: element.id,
            title: element.name,
            posterPath: element.poster_path,
            type: element.media_type,
          }
        }
      })

    return trendingShows
  } catch (e) {
    throw new Error('Failed to fetch trending movies and tv shows', e)
  }
}

export async function getPopularMovies() {
  try {
    const response = await axios.get(`${API_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
      },
    })

    const data = response.data.results
    const popularMovies = data.map((movie) => ({
      id: movie.id,
      title: movie.title,
      posterPath: movie.poster_path,
      type: 'movie',
    }))

    return popularMovies
  } catch (e) {
    throw new Error("Can't get popular movies", e)
  }
}

export async function getTrendingTvShows() {
  try {
    const response = await axios.get(`${API_URL}/trending/tv/week`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    })

    const data = response.data.results
    const trendingTvShows = data.map((show) => ({
      id: show.id,
      title: show.name,
      posterPath: show.poster_path,
      type: 'tv',
    }))

    return trendingTvShows
  } catch (e) {
    throw new Error('Failded to fetch popular tv shows', e)
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
    // filter by movies and tv shows
    // then return an object for each one
    const searchResults = data
      .filter((el) => el.media_type !== 'person')
      .map((element) => {
        if (element.media_type === 'movie') {
          return {
            id: element.id,
            title: element.title,
            posterPath: element.poster_path,
            type: element.media_type,
          }
        } else {
          return {
            id: element.id,
            title: element.name,
            posterPath: element.poster_path,
            type: element.media_type,
          }
        }
      })

    return searchResults
  } catch (e) {
    throw new Error('Failed to search for movies and tv shows', e)
  }
}

export async function getMovieDetails(movieID) {
  try {
    const response = await axios.get(`${API_URL}/movie/${movieID}`, {
      params: {
        api_key: API_KEY,
      },
    })

    const { data } = response
    const movieDetails = {
      title: data.title,
      posterPath: data.poster_path,
      tagline: data.tagline,
      description: data.overview,
      releaseDate: data.release_date,
      runtime: data.runtime,
      backdropPath: data.backdrop_path,
      genres: data.genres,
    }

    return movieDetails
  } catch (e) {
    throw new Error('Failed to fetch movie details', e)
  }
}

export async function getTvShowDetails(tvShowID) {
  try {
    const response = await axios.get(`${API_URL}/tv/${tvShowID}`, {
      params: {
        api_key: API_KEY,
      },
    })

    const { data } = response
    const tvShowDetails = {
      title: data.name,
      posterPath: data.poster_path,
      tagline: data.tagline,
      description: data.overview,
      releaseDate: data.first_air_date,
      backdropPath: data.backdrop_path,
      genres: data.genres,
      episodes: data.number_of_episodes,
      seasons: data.seasons,
    }

    return tvShowDetails
  } catch (e) {
    throw new Error('Failed to fetch series details', e)
  }
}
