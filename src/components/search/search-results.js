import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export const SearchResults = ({ results, onSelectResult, clearResults }) => {
	const show = results.length > 0 ? 'block' : 'none';
	const containerRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (containerRef.current && !containerRef.current.contains(event.target)) {
				clearResults();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [clearResults]);

	return (
		<div
			ref={containerRef}
			className="search-results box-border h-auto w-[290px] m-0 p-5 absolute top-[92px] sm:top-[48px] right-0 sm:left-0 z-10 shadow-md rounded-lg"
			style={{ display: show }}>
			{
				results.map((result, index) => (
					<Link
						key={index}
						to={`/league/${result.league.id}`}
						className="search-result"
						onClick={onSelectResult}
					>
						<p>{result.league.name} - {result.country.name}</p>
					</Link >
				))
			}
		</div >
	);
};