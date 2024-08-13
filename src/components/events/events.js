export const EventTypes = {
	Goal: 'Goal',
	Time: 'Time',
	Team: 'Team',
	Events: 'Events'
}

export const Events = ({ fixture }) => {
	if (fixture.events.length === 0) {
		return <p className="text-center">There are no events for this match yet, come back later</p>;
	}

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
								<td>{event.detail}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};
