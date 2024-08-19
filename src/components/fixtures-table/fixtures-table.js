import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FixtureBox } from '../fixture-status-indicators/fixture-box';
import { Link } from 'react-router-dom';

export default function FixturesTable({ fixtures }) {
	const navigate = useNavigate();

	const leagueIds = fixtures.map(fixture => fixture.league.id);
	const leagueNames = fixtures.map(fixture => fixture.league.name);
	const leagueLogos = fixtures.map(fixture => fixture.league.logo);
	const uniqueLeagueIds = leagueIds.filter((leagueId, index) => leagueIds.indexOf(leagueId) === index);

	const leagueData = uniqueLeagueIds.map(leagueId => {
		const originalIndex = leagueIds.indexOf(leagueId);

		return {
			id: leagueId,
			name: leagueNames[originalIndex],
			logo: leagueLogos[originalIndex]
		};
	});

	return (
		<div className="fixtures-league-groups px-6">
			{leagueData.map((league, index) => {
				const leagueFixtures = fixtures.filter(fixture => fixture.league.id === league.id);

				if (leagueFixtures.length === 0) {
					return null;
				}

				return (
					<div key={index} className="fixtures-table-container">
						<div key={index} className="league-group my-10">

							<div
								onClick={() => navigate(`/league/${league.id}`)}
								className="league-header inline-flex gap-2 items-center cursor-pointer">
								<img className="w-[50px] h-auto" src={league.logo} alt={league.name} />
								<h1 className="league-name font-bold uppercase">{league.name}</h1>
							</div>


							<div className="fixtures-table flex flex-wrap gap-8 pt-6 justify-center md:justify-start">
								{leagueFixtures.map((fixture, fixtureIndex) => (
									<div
										onClick={() => navigate(`/fixture/${fixture.fixture.id}`)}
										key={fixtureIndex}
										className="card-fixture w-[275px] h-[140px] rounded-md p-2 relative cursor-pointer flex flex-col justify-between"
									>
										<div className="card-fixture-details">
											<FixtureBox fixture={fixture} />
											<div className="fixture-details w-full flex p-1 justify-evenly items-center">
												<div className="team-home-details flex justify-evenly items-center flex-col w-[33%] gap-2">
													<div className="home-team-logo w-[50px] h-[50px] flex items-center">
														<img src={fixture.teams.home.logo} alt={fixture.teams.home.name} />
													</div>
													<div className="home-team-name w-[100px]">
														<p className="text-center text-xs truncate">{fixture.teams.home.name}</p>
													</div>
												</div>
												<div className="fixture-goals text-center w-[33%]">
													<p className="text-lg font-bold">{fixture.goals.home} : {fixture.goals.away}</p>
												</div>
												<div className="team-away-details flex justify-evenly items-center flex-col w-[33%] gap-2">
													<div className="away-team-logo w-[50px] h-[50px] flex items-center">
														<img src={fixture.teams.away.logo} alt={fixture.teams.away.name} />
													</div>
													<div className="away-team-name w-[100px]">
														<p className="text-center text-xs truncate">{fixture.teams.away.name}</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
						{index !== leagueData.length - 1 && <div className="divider match"></div>}
					</div>
				);
			})}
		</div >
	);
}
