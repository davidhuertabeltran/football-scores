export const FetchMatches = async (urlRequest) => {
	const url = urlRequest;
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': `${process.env.REACT_APP_FOOTBALL_API_KEY}`,
			'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
		}
	};

	try {
		const response = await fetch(url, options);
		const result = await response.json();
		return result.response || [];
	} catch (error) {
		console.error(error);
		return [];
	}
};
