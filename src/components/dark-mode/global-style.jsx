import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: '#fff',
    text: 'rgb(19, 28, 35)',
    bodyInverse: 'rgb(19, 28, 35)',
    textInverse: '#fff',
    cardfixtureBoxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
    navBarText: 'white',
    eventBoxShadow: 'rgba(0, 0, 0, 0.09) 0px 3px 12px'
};

export const darkTheme = {
    body: 'rgb(19, 28, 35)',
    text: '#fff',
    bodyInverse: '#fff',
    textInverse: 'rgb(19, 28, 35)',
    cardfixtureBg: '#000',
    cardfixtureBoxShadow: 'rgba(55, 53, 53, 0.72) 0px 1px 3px,rgb(32, 28, 28) 0px 1px 2px',
    navBarText: 'black',
    eventBoxShadow: 'rgb(0, 0, 0) 2px 2px 2px'
}

export const GlobalStyle = createGlobalStyle`
    body { 
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: all .5s linear;
    }

    .card-fixture {
        background: ${({ theme }) => theme.cardfixtureBg};
        transition: all .5s linear;
        box-shadow: ${({ theme }) => theme.cardfixtureBoxShadow};
    }

    .search-results {
        background: ${({ theme }) => theme.body};
         box-shadow: ${({ theme }) => theme.cardfixtureBoxShadow};
    }
`;

