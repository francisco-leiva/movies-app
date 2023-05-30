import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
  params: { startYear: '2023' },
  headers: {
    'X-RapidAPI-Key': '9bd473923bmsh648b39055c2b74bp1d4172jsnf7cae87408da',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
  },
};

async function getData() {
  const response = await axios.request(options);

  return response.data;
}

export default async function Home() {
  const data = await getData();
  const { results } = await data;

  console.log(results);

  return (
    <main>
      <div>Movies App</div>
    </main>
  );
}
