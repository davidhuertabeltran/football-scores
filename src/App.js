import "./App.css";
import NavBar from "./components/navbar/navbar";
import FixturesTable from "./components/fixtures-table/fixtures-table";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Fixture } from "./components/fixture/fixture";
import { useDarkMode } from "./components/dark-mode/use-dark-mode";
import {
    GlobalStyle,
    lightTheme,
    darkTheme,
} from "./components/dark-mode/global-style";
import { ThemeProvider } from "styled-components";
import { Footer } from "./components/footer/footer";
import { Leagues } from "./components/leagues/leagues";

function App() {
    const [theme, toggleTheme] = useDarkMode();
    const themeMode = theme === "light" ? lightTheme : darkTheme;

    return (
        <div className="main-app w-full md:w-[700px] lg:w-[1000px] m-auto min-h-screen">
            <ThemeProvider theme={themeMode}>
                <BrowserRouter>
                    <GlobalStyle />
                    <NavBar theme={theme} toggleTheme={toggleTheme} />
                    {
                        <Routes>
                            <Route path="/" element={<FixturesTable />} />
                            <Route
                                path="/fixture/:matchID"
                                element={<Fixture theme={theme} />}
                            />
                            <Route
                                path="/league/:leagueID"
                                element={<Leagues />}
                            />
                        </Routes>
                    }
                    <Footer />
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
}

export default App;
