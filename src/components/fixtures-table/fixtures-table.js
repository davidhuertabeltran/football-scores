import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FixtureBox } from '../fixture-status-indicators/fixture-box';


export default function FixturesTable({ fixtures }) {
	const navigate = useNavigate();

	return (
		<div className="fixtures-table flex flex-wrap gap-8 justify-evenly pt-6">
			{fixtures.map((fixture, index) => (
				<div onClick={() => navigate(`/fixture/${fixture.fixture.id}`)} key={index} className="card-fixture border-2 border-blue-200 w-[275px] h-[170px] rounded-md p-2 relative cursor-pointer flex flex-col justify-between" >
					<div className="card-fixture-details py-1">
						<FixtureBox fixture={fixture} />
						<div className="fixture-details w-full flex p-1 justify-evenly items-center">
							<div className="team-home-details flex justify-evenly items-center flex-col w-[33%] gap-2">
								<div className="home-team-logo w-[70px] h-[70px] flex items-center" >
									<img src={fixture.teams.home.logo} alt={fixture.teams.home.name} />
								</div>
								<div className="home-team-name w-[100px]">
									<p className="text-center text-xs truncate">{fixture.teams.home.name}</p>
								</div>
							</div>

							<div className="fixture-goals  text-center w-[33%]" >
								<p className="text-lg font-bold">{fixture.goals.home} : {fixture.goals.away}</p>
							</div>

							<div className="team-away-details flex justify-evenly items-center flex-col w-[33%] gap-2">
								<div className="away-team-logo w-[70px] h-[70px] flex items-center" >
									<img src={fixture.teams.away.logo} alt={fixture.teams.away.name} />
								</div>
								<div className="away-team-name w-[100px]">
									<p className="text-center text-xs truncate">{fixture.teams.away.name}</p>
								</div>
							</div>
						</div>

					</div>

				</div>
			))
			}
		</div >
	)
}
