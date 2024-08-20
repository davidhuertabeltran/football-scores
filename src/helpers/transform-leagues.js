import leaguesListAllData from '../data/leagues-list-all.json';

const transformLeagues = (data) => {
	return data
		.filter(item => {
			// Check if the league has a season in 2024 with events coverage set to true
			return item.seasons.some(season =>
				season.year === 2024 && season.coverage.fixtures.events === true
			);
		})
		.map(item => ({
			league: {
				id: item.league.id,
				name: item.league.name,
				logo: item.league.logo
			},
			country: {
				name: item.country.name
			}
		}));
};

// Example usage with your leagues data
const newLeagues = transformLeagues(leaguesListAllData);

// Log or use the new JSON structure
console.log(JSON.stringify(newLeagues, null, 2));