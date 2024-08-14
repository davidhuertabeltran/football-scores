import { useParams } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import { FetchMatches } from '../../requests/fetch-matches';
import { finishedDummy } from '../../lib/finished-matches-dummy';
import { Back } from '../buttons/back';
import FixturesTable from '../fixtures-table/fixtures-table';

export const Leagues = ({ fixtures }) => {
	const params = useParams();
	const leagueID = params.leagueID;
	const leagues = fixtures.filter(fixture => fixture.league.id === parseInt(leagueID));

	const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=${leagueID}&last=9&status=FT-AET-PEN`
	const [pastFixtures, setPastFixtures] = useState([]);
	const [loading, setLoading] = useState(false); //change to true when using API

	const fetchData = useCallback(async () => {
		try {
			const matches = await FetchMatches(url);
			setPastFixtures(matches);
			setLoading(false);
		} catch (error) {
			setLoading(false);
		}
	}, [url]);

	useEffect(() => {
		// fetchData();
	}, [leagueID]);

	if (leagues.length === 0) {
		return <div className="text-center">No fixtures found for this league.</div>;
	}

	return (
		<div className="league-container">
			<div className="league-details flex justify-between items-center px-10">
				<Back />
				<div className="league-container flex items-center gap-2">
					<div className="league-logo ">
						<img className="logo" src={leagues[0].league.logo} alt={leagues[0].league.name} width={40} />
					</div>
					<div className="league-name">
						<p className="text-right text-sm font-bold">{leagues[0].league.name}</p>
					</div>
				</div>
			</div>

			<div className="live-matches-league-container border rounded-xl px-6 py-12 mt-8">
				<p className="text-xl font-bold uppercase text-center">Live Matches</p>
				<FixturesTable fixtures={leagues} />
			</div>
			<div className="finished-matches-league-container border rounded-xl p-12 mt-8">
				<p className="text-l font-bold text-center uppercase">Finished matches</p>
				<p className="text-l font-bold text-center uppercase">{leagues[0].league.name}</p>
				{loading ? (
					<div className="text-center">Loading...</div>
				) : finishedDummy.length === 0 ? ( //change to pastFixtures.length when using API
					<div className="text-center">There are no data for previous matches at the moment</div>
				) : (
					<FixturesTable fixtures={finishedDummy} /> //change to pastFixtures when using API
				)}
			</div>

		</div>

	);
}