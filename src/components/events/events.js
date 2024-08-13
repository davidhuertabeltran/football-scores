import { GiSoccerBall } from 'react-icons/gi';
import { FaExchangeAlt } from "react-icons/fa";
import { TbRectangleVerticalFilled } from "react-icons/tb";

export const EventTypes = {
	Goal: 'Goal',
	Time: 'Time',
	Team: 'Team',
	Events: 'Events',
	Card: 'Card',
	Subst: 'subst',
}

const eventIcons = {
	[EventTypes.Goal]: <GiSoccerBall style={{ fontSize: "2em" }} />,
	[EventTypes.Subst]: <FaExchangeAlt style={{ fontSize: "2em" }} />,
};

export const Events = ({ fixture }) => {
	if (fixture.events.length === 0) {
		return <p className="text-center">There are no events for this match yet, come back later</p>;
	}

	console.log('Evebts', fixture.events);

	return (
		<div align="center" className="fixture-events ">
			<h1 className="text-gray-400 text-xl">{EventTypes.Events}</h1>
			<div className="overflow-x-auto">
				<table className="table-md">
					<thead>
						<tr>
							<th>{EventTypes.Team}</th>
							<th>{EventTypes.Time}</th>
							<th>{EventTypes.Events}</th>
						</tr>
					</thead>
					<tbody>
						{fixture.events.map((event, index) => (
							<tr key={index}>
								<th>{event.time.elapsed}'</th>
								<td>{event.team.name}</td>
								<td>
									{event.type === EventTypes.Card && (
										event.detail === 'Yellow Card' ?
											<TbRectangleVerticalFilled style={{ fontSize: "2em", color: "yellow", stroke: "black", strokeWidth: "1" }} />
											: <TbRectangleVerticalFilled style={{ fontSize: "2em", color: "red", stroke: "black", strokeWidth: "1" }} />
									)}
									{eventIcons[event.type] || null}
								</td>

							</tr>
						))}
					</tbody>
				</table>
			</div >
		</div >
	);
};
