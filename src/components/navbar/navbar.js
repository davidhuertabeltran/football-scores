import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { ToggleTheme } from "../dark-mode/toggle";
import { MdSportsSoccer } from "react-icons/md";
import { Nav } from "./navbar-styles";
import { darkTheme, lightTheme } from "../dark-mode/global-style";
import { StyleSheetManager } from 'styled-components';
import isValidProp from '@emotion/is-prop-valid';
import { AvailableLeagues } from "../leagues/leagues-id";

function NavBar({ theme, toggleTheme }) {

	const [scrollNav, setScrollNav] = useState(false);

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true)
		} else {
			setScrollNav(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', changeNav)
	}, [])

	const textColor = useMemo(() => {
		if (scrollNav) {
			return theme === "dark" ? lightTheme.navBarText : darkTheme.navBarText;
		} else {
			return theme === "light" ? darkTheme.navBarText : lightTheme.navBarText
		}

	}, [theme, scrollNav]);

	const backgroundColor = useMemo(() => {
		if (scrollNav) {
			return theme === "dark" ? darkTheme.body : lightTheme.body;
		} else {
			return theme === "light" ? lightTheme.body : darkTheme.body
		}
	}, [theme, scrollNav]);

	return (
		<StyleSheetManager shouldForwardProp={propName => isValidProp(propName)}>
			<Nav scrollNav={scrollNav} theme={theme} textColor={textColor} backgroundColor={backgroundColor} className="nav rounded-b">
				<div className="navbar">
					<div className="navbar-start">
						<div className="dropdown">
							<div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h8m-8 6h16" />
								</svg>
							</div>
							<ul
								tabIndex="0"
								className="menu menu-sm  opacity-0 dropdown-content rounded-box z-40 mt-3 w-52 p-2 shadow [&_li>*:not(ul):not(.menu-title):not(details):active]:bg-primary"
								style={{ backgroundColor: backgroundColor }}
							>
								<li className="text-lg"><Link to={`/`} className="link link-hover">All Leagues</Link></li>
								{
									AvailableLeagues.map((league, index) => (
										<li key={index} className="text-lg">
											<Link to={`/league/${league.id}`} className="link link-hover">{league.name}</Link>
										</li>
									))
								}
							</ul>
						</div>
						<Link to="/" className="btn btn-ghost">{<MdSportsSoccer style={{ fontSize: "2em" }} />} ChidoScores</Link>
					</div>
					<div className="navbar-center hidden lg:flex">
						<ul className="menu menu-horizontal px-1">
							<li className="text-lg"><Link to={`/`} className="link link-hover">All Leagues</Link></li>
							{
								AvailableLeagues.map((league, index) => (
									<li key={index} className="text-lg">
										<Link to={`/league/${league.id}`} className="link link-hover">{league.name}</Link>
									</li>
								))
							}
						</ul>
					</div>
					<div className="navbar-end">
						<ToggleTheme theme={theme} toggleTheme={toggleTheme} />
					</div>
				</div>
			</Nav>
		</StyleSheetManager>
	);
}

export default NavBar;
