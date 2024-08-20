import React, { useState } from 'react';
import { SearchResults } from './search-results';
import { leagueListClean } from '../../lib/league-list-clean';

export const SearchBar = () => {
	const [results, setResults] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	const fetchLeaguesData = async (value) => {
		const searchValue = value.toLowerCase();

		const filteredResults = leagueListClean.filter((fixture) =>
			fixture.league.name.toLowerCase().includes(searchValue) ||
			fixture.country.name.toLowerCase().includes(searchValue)
		);

		const uniqueResults = Array.from(
			new Map(filteredResults.map(item => [item.league.id, item])).values()
		);

		setResults(uniqueResults);
	};

	const handleInputChange = (value) => {
		setSearchTerm(value);
		fetchLeaguesData(value);
	};

	const clearResults = () => {
		setResults([]);
		setSearchTerm('');
	};

	const handleSelectResult = () => {
		clearResults();
	};

	return (
		<>
			<label className="input input-bordered flex items-center gap-2 bg-transparent">
				<input
					type="text"
					value={searchTerm}
					onChange={(e) => handleInputChange(e.target.value)}
					placeholder="Enter a league name or country"
				/>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 16 16"
					fill="currentColor"
					className="h-4 w-4 opacity-70">
					<path
						fillRule="evenodd"
						d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
						clipRule="evenodd" />
				</svg>
			</label>

			<SearchResults
				results={results}
				onSelectResult={handleSelectResult}
				clearResults={clearResults}
			/>
		</>
	);
};