import { GiSoccerBall } from 'react-icons/gi';
import { FaExchangeAlt } from "react-icons/fa";
import { TableEvents } from './table-events';
import React, { useMemo } from "react";
import { darkTheme, lightTheme } from "../dark-mode/global-style";

export const EventTypes = {
	Goal: 'Goal',
	Time: 'Time',
	Team: 'Team',
	Events: 'Events',
	Card: 'Card',
	Subst: 'subst',
}

export const EventIcons = {
	[EventTypes.Goal]: <GiSoccerBall style={{ fontSize: "2em" }} />,
	[EventTypes.Subst]: <FaExchangeAlt style={{ fontSize: "2em" }} />,
};

export const Events = ({ fixture, theme }) => {
	const boxShadow = useMemo(() => {
		return theme === "dark" ? darkTheme.eventBoxShadow : lightTheme.eventBoxShadow;
	}, [theme]);

	if (fixture.events.length === 0) {
		return <p className="text-center">There are no events for this match yet, come back later</p>;
	}

	return (
		<div align="center" className="fixture-events-container">
			<h1 className="fixture-events-title text-gray-400 text-xl">{EventTypes.Events}</h1>
			<div className="fixture-events-details overflow-x-auto pt-2 pb-10">
				<div className="table-events-container flex flex-col gap-2 w-auto md:w-2/3">
					{fixture.events.map((event, index) => (
						<div className="event-container grid grid-flow-col grid-cols-[45%_10%_45%] items-center justify-stretch" key={index}>
							<div className="home-events-container flex items-center w-auto min-h-[50px] flex-row-reverse rounded-lg p-2"
								style={{
									boxShadow: event.team.id === fixture.teams.home.id ? boxShadow : ''
								}}>
								{event.team.id === fixture.teams.home.id && (
									<TableEvents event={event} reverseLayout />
								)}
							</div>
							<div className="event-time-elapsed"><p>{event.time.elapsed}'</p></div>
							<div className="away-events-container  flex items-center w-auto min-h-[50px] rounded-lg p-2"
								style={{
									boxShadow: event.team.id === fixture.teams.away.id ? boxShadow : ''
								}}
							>
								{event.team.id === fixture.teams.away.id && (
									<TableEvents event={event} />
								)}
							</div>
						</div>
					))}
				</div>
			</div >
		</div >
	);
};
