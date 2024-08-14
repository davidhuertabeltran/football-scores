export const FixtureEventTypes = {
	Live: 'Live',
	Finished: 'Match Finished',
}

export const FixtureBox = ({ fixture }) => {
	return (
		<div className="fixture-status-indicator relative">

			{
				fixture.fixture.status.long === FixtureEventTypes.Finished
					? <div className="fixture-status text-center text-sm text-red-500 font-bold">{fixture.fixture.status.long}</div>
					:
					<div className="fixture-live-container flex justify-center">
						<p className="fixture-status-elapsed text-center font-bold text-green-500 text-sm">{fixture.fixture.status.elapsed}'</p>
						<div className="live-indicator-container flex justify-center items-center gap-1 absolute right-0 top-[2px]">
							<div className="h-[5px] w-[5px] animate-pulse rounded-full bg-red-500"></div>
							<p className="live-indicator relative font-bold text-xs">{FixtureEventTypes.Live}</p>
						</div>
					</div>
			}
			<div className="divider mt-0 mb-0"></div>
		</div>
	)
}