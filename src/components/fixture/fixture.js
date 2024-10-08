import React, { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom';
import { Events } from '../events/events';
import { Score } from '../score/score';
import { useNavigate } from 'react-router-dom';
import { Back } from '../buttons/back';
import { FetchMatches } from '../../requests/fetch-matches';
import { data } from '../../lib/dummy-data';
import { FixtureView } from '../fixture-status-indicators/fixture-view';

export const Fixture = ({ theme }) => {
	const navigate = useNavigate();
	const { matchID } = useParams();

	const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?id=${matchID}`
	const [fixture, setFixture] = useState(null);
	const [loading, setLoading] = useState(false); //change to true when using API

	const fetchData = useCallback(async () => {
		try {
			const matches = await FetchMatches(url);
			setFixture(matches[0]);
			setLoading(false);
		} catch (error) {
			setLoading(false);
		}
	}, [matchID, url]);

	useEffect(() => {
		// fetchData();
		setFixture(data[6]) //comment this line when using API
	}, [matchID]);


	if (!fixture) {
		return null;
	}

	return (
		<div className="fixture-container  px-10 border rounded-xl">
			<div className="card-fixture-details py-1">
				<div className="league-details flex justify-between xl:items-end items-center p-3">
					<Back />
					<div onClick={() => navigate(`/league/${fixture.league.id}`)} className="league-container cursor-pointer">
						<div className="league-logo flex justify-end">
							<img className="logo" src={fixture.league.logo} alt={fixture.league.name} width={40} />
						</div>
						<div className="league-name">
							<p className="text-right text-sm font-bold">{fixture.league.name}</p>
						</div>
					</div>
				</div>
				<div className="divider"></div>

				<FixtureView fixture={fixture} />

				{
					loading ? (
						<div className="text-center">Loading...</div>
					) : fixture.length === 0 ? (
						<div className="text-center">There are no data for this match at the moment</div>
					) : (
						<div className="fixture-details w-full flex p-1 justify-evenly items-center">

							<div className="team-home-details flex justify-evenly items-center flex-col w-[33%] gap-2">
								<div className="home-team-logo w-[80px] h-auto" align="center">
									<img src={fixture.teams.home.logo} alt={fixture.teams.home.name} />
								</div>
								<div className="home-team-name">
									<p className="text-center text-sm">{fixture.teams.home.name}</p>
								</div>
							</div>

							<div className="fixture-goals w-[33%] text-center " align="center">
								{
									<Score fixture={fixture} />
								}
							</div>

							<div className="team-away-details flex justify-evenly items-center flex-col w-[33%] gap-2">
								<div className="away-team-logo w-[80px] h-auto" align="center">
									<img src={fixture.teams.away.logo} alt={fixture.teams.away.name} />
								</div>
								<div className="away-team-name">
									<p className="text-center text-sm">{fixture.teams.away.name}</p>
								</div>
							</div>
						</div>
					)
				}
			</div>
			<div className="divider"></div>
			<Events fixture={fixture} theme={theme} />
		</div>
	)
}
