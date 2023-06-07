import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'c1680bf7e0c2d3bb0c5f997c43d0a3f2';

export async function getUpcomingMovies() {
  const response = await axios.get(`${API_URL}/movie/upcoming`, {
    params: {
      api_key: API_KEY,
    },
  });

  return response.data.results;
}

export async function searchMovies(searchKey) {
  const response = await axios.get(`${API_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query: searchKey,
    },
  });

  return response.data.results;
}
