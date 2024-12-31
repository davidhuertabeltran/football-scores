import { useParams } from "react-router-dom";
import { useMemo, useRef } from "react";

import { Back } from "../buttons/back";
import FixturesTable from "../fixtures-table/fixtures-table";
import { leaguesListAllData } from "../../lib/leagues-list-all-data";

export const Leagues = () => {
  const toTopRef = useRef(null);
  const { leagueID } = useParams();

  const currentLeague = useMemo(
    () =>
      leaguesListAllData.find((l) => l.league.id === parseInt(leagueID, 10)),
    [leagueID]
  );

  if (!currentLeague) {
    return <div className="text-center">League not found</div>;
  }

  const { name, logo } = currentLeague.league;

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
        <FixturesTable leagueID={leagueID} />
      </div>
      <div className="finished-matches-league-container border rounded-xl px-6 py-12 mt-8">
        <p className="text-l font-bold text-center uppercase">
          Finished matches
        </p>
        <p className="text-l font-bold text-center uppercase">{name}</p>
        <FixturesTable leagueID={leagueID} isFinished={true} />
      </div>
    </div>
  );
};
