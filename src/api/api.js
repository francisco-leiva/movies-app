import { API_URL, API_KEY } from '@/utils/constants'

export async function getTrendingShows(page = 1) {
  try {
    const params = new URLSearchParams({ api_key: API_KEY, page })
    const response = await fetch(`${API_URL}/trending/all/week?${params}`)

    if (!response.ok) {
      throw new Error(response.status)
    }

    const data = await response.json()
    // filter by movies and tv shows
    // then return an object for each one
    const trendingShows = data.results
      .filter((el) => el.media_type !== 'person')
      .map((element) => {
        const id = element.id
        const title =
          element.media_type === 'movie' ? element.title : element.name
        const posterPath = element.poster_path
        const type = element.media_type

        return { id, title, posterPath, type }
      })

    return trendingShows
  } catch (e) {
    console.error('Failded to fetch trending shows, response status:', e)
  }
}

export async function getPopularMovies(page = 1) {
  try {
    const params = new URLSearchParams({ api_key: API_KEY, page })
    const response = await fetch(`${API_URL}/movie/popular?${params}`)

    if (!response.ok) {
      throw new Error(response.status)
    }

    const data = await response.json()
    const popularMovies = data.results.map((movie) => ({
      id: movie.id,
      title: movie.title,
      posterPath: movie.poster_path,
      type: 'movie',
    }))

    return popularMovies
  } catch (e) {
    console.error('Failded to fetch popular movies, response status:', e)
  }
}

export async function getTrendingTvShows(page = 1) {
  try {
    const params = new URLSearchParams({
      api_key: API_KEY,
      language: 'en-US',
      page,
    })
    const response = await fetch(`${API_URL}/trending/tv/week?${params}`)

    if (!response.ok) {
      throw new Error(response.status)
    }

    const data = await response.json()
    const trendingTvShows = data.results.map((show) => ({
      id: show.id,
      title: show.name,
      posterPath: show.poster_path,
      type: 'tv',
    }))

    return trendingTvShows
  } catch (e) {
    console.error('Failded to fetch trending tv shows, response status:', e)
  }
}

export async function searchShows(query, page = 1) {
  try {
    const params = new URLSearchParams({
      api_key: API_KEY,
      query,
      page,
    })
    const response = await fetch(`${API_URL}/search/multi?${params}`)

    if (!response.ok) {
      throw new Error(response.status)
    }

    const data = await response.json()
    const totalPages = data.total_pages
    // filter by movies and tv shows
    // then return an object for each one
    const searchResults = data.results
      ?.filter((el) => el.media_type !== 'person')
      ?.map((element) => {
        const id = element.id
        const title =
          element.media_type === 'movie' ? element.title : element.name
        const posterPath = element.poster_path
        const type = element.media_type

        return { id, title, posterPath, type }
      })

    return { searchResults, totalPages }
  } catch (e) {
    console.error('Failed to search shows, response status:', e)
  }
}

export async function getMovieDetails(movieID) {
  try {
    const params = new URLSearchParams({ api_key: API_KEY })
    const response = await fetch(`${API_URL}/movie/${movieID}?${params}`)

    if (!response.ok) {
      throw new Error(response.status)
    }

    const data = await response.json()
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
    console.error('Failed to fetch movie details, response status:', e)
  }
}

export async function getMovieCast(movieID) {
  try {
    const params = new URLSearchParams({ api_key: API_KEY })
    const response = await fetch(
      `${API_URL}/movie/${movieID}/credits?${params}`
    )

    if (!response.ok) {
      throw new Error(response.status)
    }

    const data = await response.json()
    const movieCast = data.cast.map((castMember) => ({
      id: castMember.id,
      name: castMember.name,
      character: castMember.character,
      profilePath: castMember.profile_path,
    }))

    return movieCast
  } catch (e) {
    console.error('Failed to fetch movie cast, response status:', e)
  }
}

export async function getTvShowDetails(tvShowID) {
  try {
    const params = new URLSearchParams({ api_key: API_KEY })
    const response = await fetch(`${API_URL}/tv/${tvShowID}?${params}`)

    if (!response.ok) {
      throw new Error(response.status)
    }

    const data = await response.json()
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
    console.error('Failed to fetch tv show details, response status:', e)
  }
}

export async function getTvShowCast(tvShowID) {
  try {
    const params = new URLSearchParams({ api_key: API_KEY })
    const response = await fetch(`${API_URL}/tv/${tvShowID}/credits?${params}`)

    if (!response.ok) {
      throw new Error(response.status)
    }

    const data = await response.json()
    const tvShowCast = data.cast.map((castMember) => ({
      id: castMember.id,
      name: castMember.name,
      character: castMember.character,
      profilePath: castMember.profile_path,
    }))

    return tvShowCast
  } catch (e) {
    console.error('Failed to fetch tv show cast, response status:', e)
  }
}
