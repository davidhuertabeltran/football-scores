import { useParams } from 'react-router-dom';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { FetchMatches } from '../../requests/fetch-matches';
import { finishedDummy } from '../../lib/finished-matches-dummy';
import { Back } from '../buttons/back';
import FixturesTable from '../fixtures-table/fixtures-table';
import { useRef } from 'react';
import { leagueListClean } from '../../lib/league-list-clean';
import { data } from '../../lib/dummy-data';


export const Leagues = ({ fixtures }) => {
	const toTopRef = useRef(null);
	const { leagueID } = useParams();


	const leagues = fixtures.filter(fixture => fixture.league.id === parseInt(leagueID));

	const urlFinishedFixtures = useMemo(() => `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=${leagueID}&last=10&status=FT-AET-PEN`, [leagueID]);
	const urlLiveFixtures = useMemo(() => `https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all&league=${leagueID}`, [leagueID]);

	const [liveFixtures, setLiveFixtures] = useState([]);
	const [finishedFixtures, setFinishedFixtures] = useState([]);
	const [loading, setLoading] = useState(false); //change to true when using API

	const currentLeague = useMemo(() => leagueListClean.find(l => l.league.id === parseInt(leagueID, 10)), [leagueID]);

	const fetchLiveData = useCallback(async () => {
		try {
			const matches = await FetchMatches(urlLiveFixtures);
			setLiveFixtures(matches);
		} catch (error) {
			console.error('Error fetching live matches:', error);
		}
	}, [urlLiveFixtures]);

	const fetchFinishedData = useCallback(async () => {
		try {
			const matches = await FetchMatches(urlFinishedFixtures);
			setFinishedFixtures(matches);
		} catch (error) {
			console.error('Error fetching finished matches:', error);
		}
	}, [urlFinishedFixtures]);

	// useEffect(() => {
	// 	setLoading(true);
	// 	Promise.all([fetchLiveData(), fetchFinishedData()]).finally(() => {
	// 		setLoading(false);
	// 		window.scrollTo(0, 0);
	// 	});
	// }, [fetchLiveData, fetchFinishedData]);

	if (!currentLeague) {
		return <div className="text-center">League not found</div>;
	}

	const { name, logo } = currentLeague.league;

	console.log('leagues', leagues);

	return (
		<div className="league-container" ref={toTopRef}>
			<div className="league-details flex justify-between items-center px-10">
				<Back />
				<div className="league-container flex items-center gap-2">
					<div className="league-logo">
						<img className="logo" src={logo} alt={name} width={40} />
					</div>
					<div className="league-name">
						<p className="text-right text-sm font-bold">{name}</p>
					</div>
				</div>
			</div>
			<div className="live-matches-league-container border rounded-xl px-6 py-12 mt-8">
				<p className="text-xl font-bold uppercase text-center">Live Matches</p>
				{loading ? (
					<div className="text-center">Loading...</div>
				) : leagues.length === 0 ? ( //replace to leagues when not using API
					<div className="text-center">There are no live matches at the moment</div>
				) : (
					<FixturesTable fixtures={leagues} /> //replace to leagues when not using API
				)}
			</div>
			<div className="finished-matches-league-container border rounded-xl px-6 py-12 mt-8">
				<p className="text-l font-bold text-center uppercase">Finished matches</p>
				<p className="text-l font-bold text-center uppercase">{name}</p>
				{loading ? (
					<div className="text-center">Loading...</div>
				) : finishedDummy.length === 0 ? (
					<div className="text-center">There are no data for previous matches at the moment</div>
				) : (
					<FixturesTable fixtures={finishedDummy} />
				)}
			</div>
		</div>
	);
};