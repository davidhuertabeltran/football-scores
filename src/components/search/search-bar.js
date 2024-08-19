import React, { useState } from 'react';
import { SearchResults } from './search-results';
import { data } from '../../lib/dummy-data';

export const SearchBar = () => {
	const [dummyResults, setDummyResults] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	// const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all&league=${leagueID}`;

	const fetchDummyData = async (value) => {
		const filteredResults = data.filter((fixture) =>
			fixture.league.name.toLowerCase().includes(value.toLowerCase())
		);

		const uniqueResults = Array.from(
			new Map(filteredResults.map(item => [item.league.id, item])).values()
		);

		setDummyResults(uniqueResults);
	};

	const handleInputChange = (value) => {
		setSearchTerm(value);
		fetchDummyData(value);

	};

	const clearResults = () => {
		setDummyResults([]);
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
					placeholder="Enter league name"
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
				results={dummyResults}
				onSelectResult={handleSelectResult}
				clearResults={clearResults}
			/>
		</>
	);
};