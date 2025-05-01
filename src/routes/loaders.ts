import axios from 'axios';

const PATH = 'http://search.imdbot.workers.dev/'

export async function moviesLoader({ request }: { request: Request }) {
  const url = new URL(request.url);
  const query = url.searchParams.get('q') || '';

  if (!query) return [];

  const response = await axios.get(`${PATH}?q=${query}`);
  return response.data?.description || [];
}


export async function movieLoader({ request }: { request: Request }) {
	const url = new URL(request.url);
	const query = url.searchParams.get('tt') || '';
  
	if (!query) return [];
  
	const response = await axios.get(`${PATH}?tt=${query}`);
	return response.data?.short || '';
  }