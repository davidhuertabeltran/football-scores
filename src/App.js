import { useCallback, useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/navbar/navbar';
import FixturesTable from './components/fixtures-table/fixtures-table';
import { FetchMatches } from './requests/fetch-matches';
import { data } from './lib/dummy-data';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Fixture } from './components/fixture/fixture';
import { useDarkMode } from './components/dark-mode/use-dark-mode';
import { GlobalStyle, lightTheme, darkTheme } from './components/dark-mode/global-style';
import { ThemeProvider } from 'styled-components';
import { Refresh } from './components/buttons/refresh';
import { Footer } from './components/footer/footer';
import { Leagues } from './components/leagues/leagues';

function App() {
  const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all`;
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const [liveFixtures, setLiveFixtures] = useState([]);
  const [loading, setLoading] = useState(false); //change to true when using API

  const fetchData = useCallback(async () => {

    try {
      const matches = await FetchMatches(url);
      setLiveFixtures(matches);
      setLoading(false);

    } catch (error) {

      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    // fetchData();
  }, []);

  return (
    <div className="main-app w-full md:w-[700px] lg:w-[1000px] m-auto min-h-screen">
      <ThemeProvider theme={themeMode}>
        <BrowserRouter>
          <GlobalStyle />
          <NavBar theme={theme} toggleTheme={toggleTheme} />
          {/* <Refresh /> */}
          {/* <Refresh onRefresh={fetchData} /> */}
          {loading ? (
            <div className="text-center">Loading...</div>
          ) : data.length === 0 ? ( //change to fixtures.length when using API 
            <div className="text-center">There are no live matches at the moment</div>
          ) : (
            <Routes>
              <Route path="/" element={<FixturesTable fixtures={data} />} /> {/* change to liveFixtures when using API */}
              <Route path="/fixture/:matchID" element={<Fixture theme={theme} />} />
              <Route path="/league/:leagueID" element={<Leagues fixtures={data} />} /> {/* remove fixtures when using API */}
            </Routes>
          )}
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
