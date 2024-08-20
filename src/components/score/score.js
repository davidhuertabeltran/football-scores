export const Score = ({ fixture }) => {

	if (fixture.score.fulltime.home !== null && fixture.score.fulltime.away !== null) {
		return (
			<div className="score-fulltime flex gap-3 flex-col">
				<p className=" text-xl md:text-[30px] lg:text-[40px]  text-green-500 font-bold" >FULLTIME</p>
				<p className="text-xl md:text-[30px] lg:text-[40px]  text-green-500 font-bold">{fixture.score.fulltime.home} : {fixture.score.fulltime.away}</p>
			</div>
		)
	}

	return (
		<div className="score-ongoing">
			<p className="text-xl md:text-[30px] lg:text-[60px] font-bold">{fixture.goals.home} : {fixture.goals.away}</p>
		</div>
	)
}
