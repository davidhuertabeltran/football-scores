export const Score = ({ fixture }) => {

	if (fixture.score.fulltime.home !== null && fixture.score.fulltime.away !== null) {
		return (
			<div className="score-fulltime">
				<p className="text-2xl text-green-500 font-bold" >FULLTIME</p>
				<p className="text-2xl text-green-500 font-bold">{fixture.score.fulltime.home} : {fixture.score.fulltime.away}</p>
			</div>
		)
	}

	return (
		<div className="score-ongoing">
			<p className="text-2xl  font-bold">{fixture.goals.home} : {fixture.goals.away}</p>
		</div>
	)
}
